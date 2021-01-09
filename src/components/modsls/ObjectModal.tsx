import React, { useState } from 'react';
import { Button, Modal, Form, Input, Radio } from 'antd';
import { Checkbox } from 'antd';

import { Select } from 'antd';

const { Option } = Select;


interface Values {
    title: string;
    description: string;
    modifier: string;
}

interface ProductFormModalProps {
    visible: boolean;
    title: string;
    // isAqua: boolean;
    // isEat: boolean;
    // unit: string;
    inputPlaceHolder: string;
    okText: string;
    //   onConfirm: (values: Values) => void;
    onConfirm: (name: string) => void;
    onCancel: () => void;
}

export const ObjectModal: React.FC<ProductFormModalProps> = ({
    visible,
    onConfirm,
    onCancel,
    title,
    inputPlaceHolder,
    okText
}) => {
    const [form] = Form.useForm();

    function handleChange(value) {
        
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
                        onConfirm(values.title);
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
                    name="title"
                    label="Название"
                >
                    <Input placeholder={inputPlaceHolder} />
                </Form.Item>
              
            </Form>


        </Modal>
    );
};