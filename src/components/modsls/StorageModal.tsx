import React, { useState } from 'react';
import { Button, Modal, Form, Input, Radio } from 'antd';
import { Checkbox } from 'antd';
import { ProductEntity } from '../../entities/Product';
import { Select } from 'antd';
import { ObjectEntity } from '../../entities/Object';

const { Option } = Select;


interface Values {
    title: string;
    description: string;
    modifier: string;
}

interface StorageFormModalProps {
    visible: boolean;
    title: string;
    // isAqua: boolean;
    // isEat: boolean;
    // unit: string;
    inputPlaceHolder: string;
    okText: string;
    products: ProductEntity[];
    objects: ObjectEntity[];
    //   onConfirm: (values: Values) => void;
    onConfirm: (product_title: string, amount: number, min_limit: number, object_name: string) => void;
    onCancel: () => void;
}

export const StorageFormModal: React.FC<StorageFormModalProps> = ({
    visible,
    onConfirm,
    onCancel,
    title,
    inputPlaceHolder,
    okText,
    products,
    objects
}) => {
    const [form] = Form.useForm();
    const [productTitle, setProductTitle] = useState("");
    const [objectName, setObjectName] = useState("");

    function handleChange(value) {
        setProductTitle(value);
    }

    function handleChangeObject(value) {
        setObjectName(value);
    }


    return (
        <Modal
            visible={visible}
            title={title}
            okText={okText}
            cancelText="Отменить"
            onCancel={onCancel}
            onOk={() => {

                form
                    .validateFields()
                    .then((values) => {
                        form.resetFields();
                        console.log(values);
                        onConfirm(productTitle, values.amount, values.min_limit,  objectName);
                    })
                    .catch(info => {
                    });
            }}
        >
            <Form
                form={form}
                layout="vertical"
                name="form_in_modal"
                initialValues={{ modifier: 'public' }}
            >
                <Form.Item
                    name="product"
                    label="Продукт"
                >
                    <Select style={{ width: 120 }} onChange={handleChange}>
                        {products.map(p => (
                            <Option value={p.title} > {p.title} </Option>
                        ))}
                    </Select>
                </Form.Item>

                <Form.Item
                    name="amount"
                    label="Количество"
                    rules={[
                        { required: true, type: 'string' }]}
                >
                    <Input placeholder={inputPlaceHolder} />
                </Form.Item>

                <Form.Item
                    name="min_limit"
                    label="Минимальный лимит"
                    rules={[
                        { required: true, type: 'string' }]}
                >
                    <Input placeholder={inputPlaceHolder} />
                </Form.Item>



                <Form.Item
                name="object"
                label="Точка"
                >

                    
                 <Select style={{ width: 120 }} onChange={handleChangeObject}>
                        {objects.map(p => (
                            <Option value={p.name} > {p.name} </Option>
                        ))}
                    </Select>
                </Form.Item>

            </Form>


        </Modal>
    );
};