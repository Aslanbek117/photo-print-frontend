import * as React from "react";
import Loader from "components/loader";
import "../../styles/app.css";

interface Props {
  img: string;
  name: string;
  created_at: string;
  text: string;
  loading: boolean;
  displayImg?: boolean;
}

export const CommentCard = (props: Props) => {
  return (
    <>
      {props.loading ? (
        <Loader />
      ) : (
        <>
          <div className="row gy-4 gx-xl-5 mb-5">
            {props.displayImg ? (
              <div className="col-sm-3 col-md-2 text-center text-sm-start">
                <img
                  className="avatar avatar-xl p-1"
                  src="img/blog-avatar2.jpg"
                  alt=""
                />
              </div>
            ) : null}

            <div className="col-sm-12 col-md-12">
              {/* <h5 className="text-uppercase mb-3">{props.name}</h5> */}

              <span className="small text-muted mb-3">
              <span className="text-uppercase" style={{color:'green'}}>{props.name}</span>
              

            {"  "} {props.created_at}
            <i className="far fa-clock me-2" style={{marginLeft: 5}}></i>
              </span>
              <p className="text-sm mb-3" style={{whiteSpace: 'initial'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed metus ante, fermentum eget cursus at, porttitor a metus. Nunc et enim dapibus, consectetur metus sed, rutrum justo. Integer non justo dui. Integer hendrerit imperdiet libero. Vestibulum facilisis nisl non efficitur congue. Sed non velit accumsan, venenatis nibh in, aliquet nisl. Quisque sit amet felis justo. Maecenas ac molestie nunc. Quisque sed ante vitae neque imperdiet blandit. In ultricies nunc a sapien accumsan egestas. Quisque vel accumsan lorem. Ut diam purus, mollis non risus eget, bibendum rhoncus mi.</p>
            </div>
          </div>
        </>
      )}
    </>
  );
};
