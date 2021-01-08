import React, { useState } from 'react';
import { Button, Modal, Form, Input, Radio } from 'antd';
import { DatePicker, Space } from 'antd';

// import 'moment/locale/ru';
import locale from 'antd/es/date-picker/locale/ru_RU';
import moment from 'moment';

import { Select } from 'antd';

const { Option } = Select;

const dateFormat = 'YYYY/MM/DD';



interface Values {
    title: string;
    description: string;
    modifier: string;
}

interface IncomeFormModalProps {
    visible: boolean;
    title: string;
    // isAqua: boolean;
    // isEat: boolean;
    // unit: string;
    inputPlaceHolder: string;
    okText: string;
    products: any;
    //   onConfirm: (values: Values) => void;
    onConfirm: (product_title: string, amount: number) => void;
    onCancel: () => void;
}

export const IncomeModal: React.FC<IncomeFormModalProps> = ({
    visible,
    onConfirm,
    onCancel,
    title,
    inputPlaceHolder,
    okText, 
    products
}) => {
    const [form] = Form.useForm();

    function onChangeAqua(e) {
        setIsAqua(e.target.checked);
        
    }

    function onChangeEat(e) {
        setIsEat(e.target.checked);
    }

    function handleChange(value) {
        setProductTitle(value);
    }

    const [isAqua, setIsAqua] = useState(false);
    const [isEat, setIsEat] = useState(false);

    const [productTitle, setProductTitle] = useState("");
    const [productId, setProductid] = useState(0);

    function onChange(date, dateString) {
        console.log(date, dateString);
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
                        onConfirm(productTitle, values.amount);
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
                >
                    <Input placeholder={inputPlaceHolder} />

                </Form.Item>

                <Form.Item 
                name="date"
                label="Дата"
                
                >
                <DatePicker 
                 defaultValue={moment('2015/01/01')} format={dateFormat}
                onChange={onChange} picker="week" locale={locale} size={'middle'}/>
                </Form.Item>

              
            </Form>


        </Modal>
    );
};