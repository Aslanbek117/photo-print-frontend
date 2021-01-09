import React, { FunctionComponent, useState, useEffect } from 'react'
import { Table, Tag, Space } from 'antd';
import { Button } from 'antd';
import { infoMessage, successMessage, errorMessage } from '../../utils/Notifications';
import { GetObjectList, CreateObject } from '../../actions/get';
import { CreateObjectDTO, ObjectEntity } from '../../entities/Object';
import { User } from '../../entities/User';
import { useLocation, useHistory } from 'react-router';
import { ObjectModal } from '../modsls/ObjectModal';

const columns = [
    {
        title: 'Наименование',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Создано',
        // dataIndex: "created",
        key: 'created',
        render: (res: ObjectEntity) => (new Date(res.created).toISOString().split('T')[0]
        )
    } 
];



interface ObjectProps {
    isModalVisible: boolean;
}


export const ObjectComponent: FunctionComponent<ObjectProps> = (data: ObjectProps) => {
    const [visible, setVisible] = useState(false);
    const [isLoading, setisLoading] = useState(true);
    const [response, setResponse] = useState<any>(null)


    const [user, setUser] = useState<User>();
    let history = useHistory();
    let location = useLocation();




    const createNewObject = async (name: string) => {

        let product_id;

        setVisible(false);
        infoMessage("Отправлен запрос на создании позиции", "");
        let response;



        let body = {
            "object": {
                "name": name,
                "user_id": user?.id,
            }
        };

        console.log("[CreateObjectDTO] ", body)

        response = await CreateObject(user?.token!, body);

        if (response) {
            successMessage("Позиция успешно создана", "");
            // await this.getDirsList();
        } else {
            errorMessage("Произошла ошибка при создании позиции", response.message);
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

            let resp = await GetObjectList(user?.token!);
            setResponse(resp)
            setisLoading(false);
        }

        fetchMyAPI()
    
    }, [])

    return (

        <div>
            {isLoading ? "loading" : (
                <div>

                    <Button type="primary" onClick={() => setVisible(true)}> Добавить точку</Button>
                    <ObjectModal visible={visible} inputPlaceHolder="Кола" onConfirm={(name) => createNewObject(name)} onCancel={() => setVisible(false)} title="Создание точки" okText={"Создать"} />

                    <div>
                        <Table dataSource={response} columns={columns} />;
                    </div>
                </div>
            )}

        </div>
    );
}

