import React, { FunctionComponent, useState, useEffect } from 'react'
import { Table, Tag, Space, Select } from 'antd';
import { Button } from 'antd';
import { infoMessage, successMessage, errorMessage } from '../../utils/Notifications';
import { CreateProduct, GetProductsList, CreateIncomeArray, CreateConsumptionArray } from '../../actions/get';
import { IncomeModal } from '../modsls/IncomeModal';
import { AddIncomeBody, CreateIncomeBody } from '../../entities/Income';
import { Input, InputNumber, Popconfirm, Form, Typography } from 'antd';
import { StorageEntity } from '../../entities/Storage';
import { ProductEntity } from '../../entities/Product';
import { CreateConsumptionBody } from '../../entities/Consumption';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import { User } from '../../entities/User';
const { Option } = Select;




interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
    editing: boolean;
    dataIndex: string;
    title: any;
    inputType: 'number' | 'text';
    record: Item;
    index: number;
    children: React.ReactNode;
}

const EditableCell: React.FC<EditableCellProps> = ({
    editing,
    dataIndex,
    title,
    inputType,
    record,
    index,
    children,
    ...restProps
}) => {
    const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;

    return (
        <td {...restProps}>
            {editing ? (
                <Form.Item
                    name={dataIndex}
                    style={{ margin: 0 }}
                    rules={[
                        {
                            required: true,
                            message: `Please Input ${title}!`,
                        },
                    ]}
                >
                    {inputNode}
                </Form.Item>
            ) : (
                    children
                )}
        </td>
    );
};

interface Item {
    amount: string;
    title: string;
}



const EditableTable = (RouteComponentProps) => {
    let history = useHistory();
    let location = useLocation();

    const [form] = Form.useForm();
    const [data, setData] = useState<any[]>([]);
    const [editingKey, setEditingKey] = useState('');
    const [isLoading, setisLoading] = useState(true);
    const [products, setProducts] = useState<any[]>([])
    const [user, setUser] = useState<User>();

    useEffect(() => {
        setisLoading(true);
        async function fetchMyAPI() {
            if (localStorage.hasOwnProperty("user")) {
                let user = JSON.parse(localStorage.getItem("user") || {} as any);
                setUser(user);
            } else {
                history.push('/login');
            }

            let resp = await GetProductsList(user?.token!);
            setProducts(resp)
            setisLoading(false);
        }
        fetchMyAPI()
    }, [])


    const isEditing = (record: Item) => {
        return record.title === editingKey ? true : false;
    }

    const edit = (record: Partial<Item>) => {
        form.setFieldsValue({ amount: "", ...record });
        setEditingKey(record.title!);
    };

    const cancel = () => {
        setEditingKey('');
    };

    const save = async (key: React.Key) => {
        try {
            const row = (await form.validateFields()) as Item;
            console.log("KEY", key);

            products.map(p => {
                if (p.title == key) {
                    p.amount = parseInt(row.amount, 10);
                }
            })

            setProducts(products)
            setEditingKey('');

            console.log("products", products);
            // const newData = [...products];
            // const index = newData.findIndex(item => key === item.key);
            // if (index > -1) {
            //     const item = newData[index];
            //     newData.splice(index, 1, {
            //         ...item,
            //         ...row,
            //     });
            //     setProducts(newData);
            //     setEditingKey('');
            // } else {
            //     newData.push(row);
            //     setProducts(newData);
            //     setEditingKey('');
            // }
        } catch (errInfo) {
            console.log('Validate Failed:', errInfo);
        }
    };



    const createConsumption = async (products: any[]) => {
        console.log(products);

        let dtos: CreateConsumptionBody[] = [];
        products.forEach(p => {
            let dto: CreateConsumptionBody = {
                amount: p.amount,
                product_id: p.id,
                user_id: user?.id!,
            };
            if (p.amount != undefined) {
                dtos.push(dto);
            }
        });

        const body = {
            "incomes": dtos,
        }

        console.log(body);

        CreateConsumptionArray(user?.token!, body);

    }


    const Footer = () => {
        return (
            <div>
                <Button type="primary" onClick={() => createConsumption(products)}> Сохранить все изменения</Button>
            </div>
        )
    }




    const columns = [
        {
            title: 'Позиция',
            dataIndex: 'title',
            width: '25%',
            editable: false,
        },
        {
            title: 'Количество (склад)',
            key: 'storage.amount',
            width: '15%',
            editable: false,
            // render: (product: ProductEntity) => (product.storage?.amount || "Отсутвует позиция на складе")
        },
        {
            title: 'Расход',
            dataIndex: 'amount',
            key: "amount",
            width: '15%',
            editable: true,
        },
        {
            title: 'Действия',
            dataIndex: 'operation',
            render: (_: any, record: Item) => {
                const editable = isEditing(record);
                return editable ? (
                    <span>
                        <a href="javascript:;" onClick={() => save(record.title)} style={{ marginRight: 8 }}>
                            Сохранить
              </a>
                        <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
                            <a>Отменить</a>
                        </Popconfirm>
                    </span>
                ) : (
                        <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
                            Редактировать
                        </Typography.Link>
                    );
            },
        },
    ];

    const mergedColumns = columns.map(col => {
        if (!col.editable) {
            return col;
        }
        return {
            ...col,
            onCell: (record: Item) => ({
                record,
                inputType: col.dataIndex === 'age' ? 'number' : 'text',
                dataIndex: col.dataIndex,
                title: col.title,
                amount: record.amount,
                editing: isEditing(record),
            }),
        };
    });

    return (
        <>
            {isLoading ? "loading" : (
                <Form form={form} component={false}>
                    <Table
                        components={{
                            body: {
                                cell: EditableCell,
                            },
                        }}
                        bordered
                        dataSource={products}
                        columns={mergedColumns}
                        rowClassName="editable-row"
                        pagination={{
                            onChange: cancel,
                        }}
                        footer={Footer}
                    />
                </Form>)
            }

        </>
    );
};


interface ConsumptionProps {
    isModalVisible: boolean;
}


export const Consumption: FunctionComponent<ConsumptionProps> = (props: ConsumptionProps) => {
    const [visible, setVisible] = useState(false);
    const [isLoading, setisLoading] = useState(true);
    const [products, setProducts] = useState<any>(null)
    const [income, setIncome] = useState<AddIncomeBody[]>([])

    const [user, setUser] = useState<User>();
    let history = useHistory();
    let location = useLocation();

    useEffect(() => {
        setisLoading(true);
        async function fetchMyAPI() {
            if (localStorage.hasOwnProperty("user")) {
                let user = JSON.parse(localStorage.getItem("user") || {} as any);
                setUser(user);
            } else {
                history.push('/login');
            }

            let resp = await GetProductsList(user?.token!);
            setProducts(resp)
            setisLoading(false);
        }
        fetchMyAPI()
    }, [])


    function handleChange(product_title: string, amount: number) {
        let income: AddIncomeBody = {
            product_id: 0,
            amount: amount,
            product_title: product_title
        };
        setIncome(result => [...result, income]);
    }


    function saveIncome() {
        products.map(p => {

            income.map(i => {
                if (p.title === i.product_title) {
                    i.product_id = p.id;
                }
            })
        })
    }

    return (

        <div>
            {isLoading ? "loading" : (
                <>
                    <h1>
                        Создание расхода
                    </h1>
                    <EditableTable />
                </>
            )}

        </div>
    );
}

