import React, { FunctionComponent, useState, useEffect } from 'react'
import { Table, Tag, Space } from 'antd';
import { Button } from 'antd';
import { infoMessage, successMessage, errorMessage } from '../../../utils/Notifications';
import { CreateProduct, GetProductsList } from '../../../actions/get';
import { ProductFormModal } from '../../modsls/ProductModal';
import { CreateProductDTO } from '../../../dto/CreateProductDTO';
import CheckOutlined, { DeleteOutlined, CheckCircleOutlined, DownCircleTwoTone, CloseCircleTwoTone } from '@ant-design/icons';


const columns = [
    {
        title: 'Наименование',
        dataIndex: 'title',
        key: 'title',
    },
    {
        title: 'Жидкость',
        dataIndex: 'isAqua',
        key: 'isAqua',
        render: res => (
            <>  
            
                {res === true ? (
                    <div>
                        
                        <DownCircleTwoTone style={{ fontSize: '24px', color: '#08c' }} />
                                            </div>
                ) : <div> 
                    <CloseCircleTwoTone style={{ fontSize: '24px', color: '#08c' }}/>
                     </div>} 
            </>
          )
    },
    {
        title: 'Пища',
        dataIndex: 'isEat',
        key: 'isEat',
        render: res => (
            <>  
                {res === true ? (
                    <div>
                        
                        <DownCircleTwoTone style={{ fontSize: '24px', color: '#08c' }} />
                                            </div>
                ) : <div> 
                    <CloseCircleTwoTone style={{ fontSize: '24px', color: '#08c' }} />
                </div>} 
            </>
          )
    },
    {
        title: 'Ед. измерения',
        dataIndex: 'unit',
        key: 'unit',
    },
];



interface ProductProps {
    isModalVisible: boolean;
}


export const Product: FunctionComponent<ProductProps> = (data: ProductProps) => {
    const [visible, setVisible] = useState(false);
    const [isLoading, setisLoading] = useState(true);
    const [response, setResponse] = useState<any>(null)



    const createNewProduct = async (productTitle: string, isAqua: boolean, isEat: boolean, unit: string) => {
        setVisible(false);
        infoMessage("Отправлен запрос на создании позиции", "");
        let response;

        let createProductDTO: CreateProductDTO = {
            title: productTitle,
            isAqua: isAqua,
            isEat: isEat,
            unit: unit,
        };

        let body = {
            "product": {
                "title": createProductDTO.title,
                "isAqua": createProductDTO.isAqua,
                "isEat": createProductDTO.isEat,
                "unit": createProductDTO.unit
            }
        };

        console.log("[CreateProductDTO] ", body)

        response = await CreateProduct(body);

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
            let resp = await GetProductsList();
            setResponse(resp)
            setisLoading(false);
        }

        fetchMyAPI()
    
    }, [])

    return (

        <div>
            {isLoading ? "loading" : (
                <div>

                    <Button type="primary" onClick={() => setVisible(true)}> Добавить позицию</Button>
                    <ProductFormModal visible={visible} inputPlaceHolder="Кола" onConfirm={(a, b, c, d) => createNewProduct(a, b, c, d)} onCancel={() => setVisible(false)} title="Создание позиции" okText={"Создать"} />

                    <div>
                        <Table dataSource={response} columns={columns} />;
                    </div>
                </div>
            )}

        </div>
    );
}

