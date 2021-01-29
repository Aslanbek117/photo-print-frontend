import React, { useState, useEffect } from 'react';

import { Divider } from 'antd';
import { Conditions } from '../conditions/Conditions';
import { Process } from '../process/Process';
import { GetArticleInfo } from '../backend-api/api';
import { Article as ArticleModel } from '../../models/search/Search';
import Loader from '../loader';
import Text from '../text';
import './article.css';
interface ArticleProps {
  article_id: number;
  path: string;
}

export const Article = (props: ArticleProps) => {
  const [conditionClicked, setConditionClicked] = useState(false);
  const [processClicked, setProcessClicked] = useState(false);

  const [articleLoadind, setArticleLoading] = useState(true);

  const [articleInfo, setArticleInfo] = useState<ArticleModel>();

  useEffect(() => {
    const getArticleInfo = async () => {
      let response = await GetArticleInfo('', props.article_id);
      setArticleInfo(response.result);
      setArticleLoading(false);
    };

    getArticleInfo();
  }, [props.article_id]);

  return (
    <>
      {articleLoadind ? (
        <Loader />
      ) : (
        <>
          <Text type="subtitle1">{articleInfo?.title}</Text>
          <Text>{props.path}</Text>
          {articleInfo?.description && (
            <div
              style={{ marginTop: 10 }}
              dangerouslySetInnerHTML={{ __html: articleInfo?.description }}
            />
          )}

          <Divider type="horizontal" />

          <div className="button-group">
            <button
              className={conditionClicked ? 'button-clicked' : 'button'}
              onClick={() => {
                setProcessClicked(false);
                setConditionClicked(true);
              }}
            >
              <Text type="subtitle3">Условия</Text>
            </button>

            <button
              className={processClicked ? 'button-clicked' : 'button'}
              style={{ marginLeft: 20 }}
              onClick={() => {
                setConditionClicked(false);
                setProcessClicked(true);
              }}
            >
              <Text type="subtitle3">Процессы</Text>
            </button>
          </div>

          {conditionClicked ? (
            <Conditions data={articleInfo?.conditions} />
          ) : (
            <Process data={articleInfo?.processes} />
          )}
        </>
      )}
    </>
  );
};
