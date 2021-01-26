import React, { useState, useEffect } from 'react';

import './article.css';
import { Conditions } from '../conditions/Conditions';
import { Process } from '../process/Process';
import { GetArticleInfo } from '../backend-api/api';
import { Article as ArticleModel } from '../../models/search/Search';
import Text from '../text';

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
                    <Text type="subtitle2">
                    {articleInfo?.title}
                    </Text>
                    
                    <Text type='article-breadcrumb'>
                        {props.path}
                    </Text>

                    <div dangerouslySetInnerHTML={{ __html: articleInfo!.description }} />


                    <div className="button-group">
                        <button className={conditionClicked ? "button-clicked" : "button"} onClick={() => {
                            setProcessClicked(false);
                            setConditionClicked(true);
                        }}>
                            Условия
                </button>

                        <button className={processClicked ? "button-clicked" : "button"} style={{ marginLeft: 20 }} onClick={() => {
                            setConditionClicked(false);
                            setProcessClicked(true);
                        }}>
                            Процессы
                </button>
                    </div>

                    {conditionClicked ? (
                        <Conditions data={articleInfo?.conditions} />
                    ) : (<Process data={articleInfo?.processes} />)}
                </>

            )}



        </>

    )
}

