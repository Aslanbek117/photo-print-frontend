import * as React from "react";
import Loader from "components/loader";
import "../../styles/app.css";

interface Props {
  img: string;
  name: string;
  created_at: string;
  text: string;
  loading: boolean;
}

export const CommentCard = (props: Props) => {
  return (
    <>
    {props.loading ? <Loader /> : (
        <>
        <div className="row gy-4 gx-xl-5 mb-5">
        <div className="col-sm-3 col-md-2 text-center text-sm-start">
          <img
            className="avatar avatar-xl p-1"
            src="img/blog-avatar2.jpg"
            alt=""
          />
        </div>
        <div className="col-sm-9 col-md-10">
    <h5 className="text-uppercase mb-3">{props.name}</h5>
          <p className="posted small text-muted mb-3">
            <i className="far fa-clock me-2"></i>{props.created_at}
          </p>
          <p className="text-sm mb-3">
            {props.text}
          </p>
        </div>
        </div>
        </>
    )}
    </>
  );
};
