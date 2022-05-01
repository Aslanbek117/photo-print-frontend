import * as React from "react";
import "../../styles//app.css";
import { Category } from "models/search/Search";
import { GetCategories } from "components/backend-api/api";
import Loader from "components/loader";
import { CommentCard } from "components/comments/comment-card";

interface Props {
  comments?: any[];
}

export const Categories = (props: Props) => {
  const host = window.location.protocol + "//" + window.location.host;

  const [data, setData] = React.useState<Category[]>([]);

  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetch() {
      const response = await GetCategories("some_token");
      setData(response.result);
      setLoading(false);
    }

    fetch();
  }, []);

  
  return (
    <>
    
        <div className="col-lg-3">
          <h3 className="h4 lined text-uppercase mb-4">Категории</h3>
          <ul className="nav flex-column nav-pills mb-4">
            {data.map((d) => (
              <li className="nav-item" key={d.name}>
                <a className="nav-link" href={host + "/?page=1&per_page=50&category=" + d.category_dir}>
                  <div className="d-flex align-items-center justify-content-between">
                    <span className="fw-bold text-uppercase">{d.name}</span>
                    <div className="badge bg-warning">{d.count}  </div>
                  </div>
                </a>
              </li>
            ))}
          </ul>

          <div className="comments d-none d-md-inline-block">
            <h3 className="h4 lined text-uppercase mb-4">Отзывы</h3>
            {props.comments && props.comments.map((c) => (
                        <CommentCard
                          loading={loading}
                          name={c.name}
                          text={c.text}
                          img={""}
                          created_at={c.created_at}
                          displayImg={false}
                        />
                      ))}
          </div>
        </div>
      
    </>
  );
};
