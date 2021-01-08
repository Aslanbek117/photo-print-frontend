import React, { FunctionComponent, useState, useEffect } from 'react'
import { Table, Tag, Space, Select } from 'antd';
import { Button } from 'antd';
import { infoMessage, successMessage, errorMessage } from '../../utils/Notifications';
import { CreateProduct, GetProductsList } from '../../actions/get';
import { IncomeModal } from '../modsls/IncomeModal';
import { AddIncomeBody } from '../../entities/Income';
import { Input, InputNumber, Popconfirm, Form, Typography } from 'antd';
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
    key: string;
    name: string;
    age: number;
    address: string;
}

const originData: Item[] = [];
for (let i = 0; i < 100; i++) {
  originData.push({
    key: i.toString(),
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no. ${i}`,
  });
}

const EditableTable = () => {
    const [form] = Form.useForm();
    const [data, setData] = useState(originData);
    const [editingKey, setEditingKey] = useState('');
  
    const isEditing = (record: Item) => record.key === editingKey;
  
    const edit = (record: Partial<Item> & { key: React.Key }) => {
      form.setFieldsValue({ name: '', age: '', address: '', ...record });
      setEditingKey(record.key);
    };
  
    const cancel = () => {
      setEditingKey('');
    };
  
    const save = async (key: React.Key) => {
      try {
        const row = (await form.validateFields()) as Item;
  
        const newData = [...data];
        const index = newData.findIndex(item => key === item.key);
        if (index > -1) {
          const item = newData[index];
          newData.splice(index, 1, {
            ...item,
            ...row,
          });
          setData(newData);
          setEditingKey('');
        } else {
          newData.push(row);
          setData(newData);
          setEditingKey('');
        }
      } catch (errInfo) {
        console.log('Validate Failed:', errInfo);
      }
    };
  
    const columns = [
      {
        title: 'name',
        dataIndex: 'name',
        width: '25%',
        editable: true,
      },
      {
        title: 'age',
        dataIndex: 'age',
        width: '15%',
        editable: true,
      },
      {
        title: 'address',
        dataIndex: 'address',
        width: '40%',
        editable: true,
      },
      {
        title: 'operation',
        dataIndex: 'operation',
        render: (_: any, record: Item) => {
          const editable = isEditing(record);
          return editable ? (
            <span>
              <a href="javascript:;" onClick={() => save(record.key)} style={{ marginRight: 8 }}>
                Save
              </a>
              <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
                <a>Cancel</a>
              </Popconfirm>
            </span>
          ) : (
            <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
              Edit
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
          editing: isEditing(record),
        }),
      };
    });
  
    return (
      <Form form={form} component={false}>
        <Table
          components={{
            body: {
              cell: EditableCell,
            },
          }}
          bordered
          dataSource={data}
          columns={mergedColumns}
          rowClassName="editable-row"
          pagination={{
            onChange: cancel,
          }}
        />
      </Form>
    );
  };



const columns = [
    {
        title: 'Наименование',
        dataIndex: 'product_title',
        key: 'product_title',
    },
    {
        title: 'Приход (количество)',
        dataIndex: 'amount',
        key: 'amount',
    },
];



interface IncomeProps {
    isModalVisible: boolean;
}


export const Income: FunctionComponent<IncomeProps> = (props: IncomeProps) => {
    const [visible, setVisible] = useState(false);
    const [isLoading, setisLoading] = useState(true);
    const [products, setProducts] = useState<any>(null)

    const [income, setIncome] = useState<AddIncomeBody[]>([])

    // const createNewProduct = async (productTitle: string, isAqua: boolean, isEat: boolean, unit: string) => {
    //     setVisible(false);
    //     infoMessage("Отправлен запрос на создании позиции", "");
    //     let response;

    //     let createProductDTO: CreateProductDTO = {
    //         title: productTitle,
    //         isAqua: isAqua,
    //         isEat: isEat,
    //         unit: unit,
    //     };

    //     let body = {
    //         "product": {
    //             "title": createProductDTO.title,
    //             "isAqua": createProductDTO.isAqua,
    //             "isEat": createProductDTO.isEat,
    //             "unit": createProductDTO.unit
    //         }
    //     };

    //     console.log("[CreateProductDTO] ", body)

    //     response = await CreateProduct(body);

    //     if (response) {
    //         successMessage("Позиция успешно создана", "");
    //         // await this.getDirsList();
    //     } else {
    //         errorMessage("Произошла ошибка при создании позиции", response.message);
    //     }
    // }

    useEffect(() => {
        setisLoading(true);
        async function fetchMyAPI() {
            let resp = await GetProductsList();
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
                    Создание прихода
                    <Button type="primary" onClick={() => setVisible(true)} style={{float: 'right'}}>Добавить приход</Button>
                    <IncomeModal visible={visible} inputPlaceHolder="Кола" onConfirm={(product_title, amount) => handleChange(product_title, amount)} onCancel={() => setVisible(false)} title="Добавление прихода" okText={"Добавить"} products={products} />
                </h1>

                <div>
                    <Table dataSource={income} columns={columns} />;
                    <Button type="primary" onClick={() => saveIncome()} style={{float: 'right'}}>Сохранить</Button>
                </div>

                <EditableTable />
                </>
            )}

        </div>
    );
}

