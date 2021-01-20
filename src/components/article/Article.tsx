import React, { useState, useEffect } from 'react';

import { SearchTop } from '../search/Search';
import { Category } from '../category/Category';

import { Typography, Breadcrumb, List, Pagination } from 'antd';
import Title from 'antd/lib/typography/Title';
import './article.css';
import { Conditions } from '../conditions/Conditions';
import { Process } from '../process/Process';
import { GetArticleInfo } from '../backend-api/api';
import { Article as ArticleModel } from '../../models/search/Search';

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

interface ArticleProps {
    article_id: number;
    path: string;
}

export const Article = (props: ArticleProps) => {

    const [conditionClicked, setConditionClicked] = useState(false);
    const [processClicked, setProcessClicked] = useState(false);

    const [articleLoadind, setArticleLoading] = useState(true);

    const [articleInfo, setArticleInfo] = useState<ArticleModel>();
    

    const getArticleInfo = async () => {
        let response = await GetArticleInfo("", props.article_id);
        setArticleInfo(response.result);
        setArticleLoading(false)

    }
    useEffect(() => {
        getArticleInfo();
    }, [])

    return (
        <>
        {articleLoadind ? 'loading' : (
            <>
            <div className="title">
                <span>
                    {articleInfo?.title}
                </span>

                {/* <Breadcrumb style={{paddingTop: 10}}>
                    <Breadcrumb.Item>Кредиты</Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <a href="">Кредитные карты</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <a href="">Кредитные карты 2</a>
                    </Breadcrumb.Item>
                </Breadcrumb> */}
                <div className="breadcumb">
                    {props.path}
                </div>
            </div>

            <div className="short-description">
                <span>
                {articleInfo?.description}
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
                <Conditions data={articleInfo!.conditions}/>
            ) : (<Process  data={articleInfo!.processes} />)}
            </>
            
        )}
        
            

        </>

    )
}

