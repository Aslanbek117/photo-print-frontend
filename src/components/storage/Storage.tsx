import React, { FunctionComponent, useState, useEffect } from 'react'
import { Table, Tag, Space } from 'antd';
import { Button } from 'antd';
import CheckOutlined, { DeleteOutlined, CheckCircleOutlined, DownCircleTwoTone, CloseCircleTwoTone } from '@ant-design/icons';
import { GetStorageList, CreateStorageItem, GetProductsList, GetObjectList } from '../../actions/get';
import { StorageEntity } from '../../entities/Storage';
import { infoMessage, successMessage, errorMessage } from '../../utils/Notifications';
import { StorageFormModal } from '../modsls/StorageModal';
import { User } from '../../entities/User';
import { useLocation, useHistory } from 'react-router';
import { ObjectEntity } from '../../entities/Object';


const columns = [
    {
        title: 'Наименование',
        key: "product.title",
        render: (res: StorageEntity) => (res.product.title )
    },
    {
        title:"Количество",
        dataIndex: "amount",
        key:"amount",
    },
    {
        title: 'Минимальный лимит',
        // dataIndex: "created",
        key: 'min_limit',
        render: (res: StorageEntity) => (res.min_limit)
    },
    {
        title: 'Точка',
        // dataIndex: "created",
        key: 'created',
        render: (res: StorageEntity) => (res.object?.name || "отсутствует")
    },
    {
        title: 'Создано',
        // dataIndex: "created",
        key: 'created',
        render: (res: StorageEntity) => (new Date(res.created).toISOString().split('T')[0]
        )
    },
];



interface StorageProps {
    isModalVisible: boolean;
}


export const Storage: FunctionComponent<StorageProps> = (data: StorageProps) => {
    const [isLoading, setisLoading] = useState(true);
    const [visible, setVisible] = useState(false);

    const [response, setResponse] = useState<any>(null)

    const [products, setProducts] = useState<any[]>([])

    const [objects, setObjects] = useState<ObjectEntity[]>([]);

    const [user, setUser] = useState<User>();
    let history = useHistory();
    let location = useLocation();




    const createNewStorageItem = async (product_title: string, amount: number, min_limit: number, object_name: string) => {
        let product_id;
        products.forEach(p => {
            if (p.title == product_title) {
                product_id = p.id;
            }
        })

        let object_id; 

        objects.forEach(o => {
            if (o.name == object_name) {
                object_id = o.id;
            }
        })
        setVisible(false);
        infoMessage("Отправлен запрос на создании позиции в складе", "");
        let response;

        let createStorageDTO = {
            product_id: product_id,
            amount: amount,
        };

        let body = {
            "storage": {
                "product_id": createStorageDTO.product_id,
                "amount": createStorageDTO.amount,
                "user_id": user?.id!,
                "min_limit": min_limit,
                "object_id": object_id,
            }
        };

        console.log("[CreateProductDTO] ", body)

        response = await CreateStorageItem(user?.token!, body);

        if (response) {
            successMessage("Позиция в складе успешно создана", "");
            // await this.getDirsList();
        } else {
            errorMessage("Произошла ошибка при создании позиции в складе", response.message);
        }
    }

    useEffect(() => {
        setisLoading(true);
        async function fetchMyAPI() {
            if (localStorage.hasOwnProperty("user")) {
                let user = JSON.parse(localStorage.getItem("user") || {} as any);
                setUser(user);
            } else {
                history.push('/login');
            }



            let resp = await GetStorageList(user?.token!);
            setResponse(resp)
            let products = await GetProductsList(user?.token!);
            setProducts(products);

            let objResp = await GetObjectList(user?.token!);
            setObjects(objResp);
            setisLoading(false);
        }

        fetchMyAPI()
    
    }, [])



    return (

        <div>
            {isLoading ? "loading" : (
                <div>
                    <Button type="primary" onClick={() => setVisible(true)}> Добавить позицию</Button>
                    <StorageFormModal objects={objects} products={products}  visible={visible} inputPlaceHolder="30" onConfirm={(product_id, number, min_limit, object_name) => createNewStorageItem(product_id, number, min_limit, object_name)} onCancel={() => setVisible(false)} title="Создание позиции в складе" okText={"Создать"} />

                    <div>
                        <Table dataSource={response} columns={columns} />;
                    </div>
                </div>
            )}

        </div>
    );
}

