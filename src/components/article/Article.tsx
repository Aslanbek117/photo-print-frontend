import React, { useState } from 'react';

import { SearchTop } from '../search/Search';
import { Category } from '../category/Category';

import { Typography, Breadcrumb, List, Pagination } from 'antd';
import Title from 'antd/lib/typography/Title';
import './article.css';
import { Conditions } from '../conditions/Conditions';
import { Process } from '../process/Process';

const listData: any[] = [];
for (let i = 0; i < 23; i++) {
    listData.push({
        // href: 'https://ant.design',
        title: `Заголовок 1 ${i}`,
        description:
            'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content:
            'Разнообразный и богатый опыт укрепление и развитие структуры способствует подготовки и реализации соответст...',
    });

}

export const Article = (props: any) => {

    const [conditionClicked, setConditionClicked] = useState(false);
    const [processClicked, setProcessClicked] = useState(false);

    return (
        <>
            <div className="title">
                <span>
                    Комиссия за организацию заема
                </span>

                <Breadcrumb style={{paddingTop: 10}}>
                    <Breadcrumb.Item>Кредиты</Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <a href="">Кредитные карты</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <a href="">Кредитные карты 2</a>
                    </Breadcrumb.Item>
                </Breadcrumb>
            </div>

            <div className="short-description">
                <span>
                Идейные соображения высшего порядка, а также сложившаяся структура организации обеспечивает широкому кругу (специалистов) участие в формировании систем массового участия. Повседневная практика показывает, что начало повседневной работы по формированию позиции требуют от нас анализа модели развития.
                </span>
            </div>

            <div className="button-group">
                <button className={conditionClicked ? "button-clicked" : "button"} onClick={() => {
                    setProcessClicked(false);
                    setConditionClicked(true);
                }}>
                    Условия
                </button>

                <button className={processClicked ? "button-clicked" : "button"} style={{marginLeft: 20}} onClick={() => {
                     setConditionClicked(false);
                     setProcessClicked(true);
                }}>
                    Процессы
                </button>
            </div>

            {conditionClicked ? (
                <Conditions />
            ) : (<Process />)}
            

        </>

    )
}

