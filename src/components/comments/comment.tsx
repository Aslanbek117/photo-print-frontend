import * as React from "react";
import { SiteHeader } from "../headers/header";
import TopBar from "../headers/top-bar.js";
import { Nav } from "../material/nav";
import { Comment, GetComments } from "components/backend-api/api";
import { errorMessage, infoMessage } from "utils/Notifications";
import Loader from "components/loader/index";
import { CommentCard } from "./comment-card";
import { CommentsDTO } from "models/search/Search";
import "../../styles/app.css";

export const Comments = () => {

  const state = 1

  const [loading, setLoading] = React.useState(true);

  const [data, setData] = React.useState<CommentsDTO[]>([]);

  const [email, setEmail] = React.useState("");

  const [name, setName] = React.useState("");

  const [text, setText] = React.useState("");

  const [isAuthorized, setAuthorized] = React.useState(false);

  const [user, setUser] = React.useState();

  async function LeaveComment() {
    const response = await Comment("", email, name, text, state);
    if (response.status === true && response.message === "ok") {
      infoMessage(
        "Отзыв",
        "Отзыв успешно оставлен. Он появится в течении 1 часа"
      );
    } else {
      errorMessage("Отзыв-Ошибка", "Что-то пошло не так при записи отзыва");
    }
  }

  React.useEffect(() => {
    async function getComments() {
      const response = await GetComments("");

      if (response.status === true && response.message === "ok") {
      } else {
        errorMessage("Ошибка", "Что-то пошло не так при загрузке отзывов");
      }
      setData(response.result);
      setLoading(false);
    }

    let user = JSON.parse(localStorage.getItem("user")!);
    let user_id;
    if (user != null) {
      setAuthorized(true);
      setUser(user);
      setName(user.name)
      setEmail(user.email);
    } else {
      setAuthorized(false);
    }
    getComments();
  }, []);

  return (
    <>
      {loading ? (
        <>
          <Loader />
        </>
      ) : (
        <div className="wide">
          <TopBar />
          <SiteHeader ordersCount={0} />

          <section className="" style={{ backgroundColor: "white" }}>
            <section className="py-1">
              <div className="container py-1">
                <Nav
                  toShow={false}
                  title=""
                  firstTitle="Отзывы"
                  firstTitleHref="/comments"
                />
                <div className="row">
                  <div className="col-lg-9">
                    <div className="mb-1 border-top border-bottom">
                      <h4 className="text-uppercase mb-3">Отзывы</h4>
                      {data.map((c) => (
                        <CommentCard
                          loading={loading}
                          name={c.name}
                          text={c.text}
                          img={""}
                          created_at={c.created_at}
                        />
                      ))}

                      {isAuthorized ? (
                      <h4 className="text-uppercase mb-3">Оставить отзыв</h4>  
                      ) : (
                        <h4 className="text-uppercase mb-3">Оставить отзыв (Требуется зайти в аккаунт)</h4>
                      ) }
                      
                        {!isAuthorized ? (
                          <>
                          <div className="row">
                          <div className="col-md-6 mb-3">
                          <label className="form-label">
                            Имя
                            <sup className="required text-primary">
                              обязательно
                            </sup>
                          </label>
                          <input
                            className="form-control"
                            id="name"
                            type="text"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                        </div>
                        
                      </div>
                      <div className="row">
                      <div className="col-md-6 mb-3">
                          <label className="form-label">
                            Емейл
                            <sup className="required text-primary">
                              необязательно
                            </sup>
                          </label>
                          <input
                            className="form-control"
                            id="email"
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                      </div>
                          </>
                        ) : null}
                        
                      <div className="row">
                        <div className="col-12 mb-3">
                          <label className="form-label">
                            Отзыв{" "}
                            <sup className="required text-primary">
                              обязательно
                            </sup>
                          </label>
                          <textarea
                            className="form-control"
                            id="comment"
                            required
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                          ></textarea>
                        </div>
                        <div className="col-12 text-end">
                          <button
                            className="btn btn-outline-primary"
                            onClick={() => LeaveComment()}
                            disabled={!isAuthorized}
                          >
                            <i className="far fa-comment"></i>Оставить отзыв
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </section>
        </div>
      )}
    </>
  );
};
