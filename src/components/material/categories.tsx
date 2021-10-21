import * as React from "react";
import "./app.css";
import { Category } from "models/search/Search";
import { GetCategories } from "components/backend-api/api";

interface CardProps {
  title: string;
  src: string;
  price: number;
}

export const Categories = (props?: any) => {
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
      {loading ? (
        "xui"
      ) : (
        <div className="col-lg-3">
          <h3 className="h4 lined text-uppercase mb-4">Категории</h3>
          <ul className="nav flex-column nav-pills mb-4">
            {data.map((d) => (
              <li className="nav-item">
                <a className="nav-link" href="shop-category.html">
                  <div className="d-flex align-items-center justify-content-between">
                    <span className="fw-bold text-uppercase">{d.name}</span>
                    <div className="badge bg-secondary">{d.count}  </div>
                  </div>
                </a>
              </li>
            ))}
          
            {/* <li className="nav-item">
              <a className="nav-link active" href="shop-category.html">
                <div className="d-flex align-items-center justify-content-between">
                  <span className="fw-bold text-uppercase">Ladies</span>
                  <div className="badge bg-white text-primary">123</div>
                </div>
              </a>
              <ul className="list-unstyled text-sm text-muted mb-0">
                <li>
                  <a
                    className="nav-link ps-4 text-muted letter-spacing-1"
                    href="shop-category.html"
                  >
                    {" "}
                    <span className="ps-2">T-shirts</span>
                  </a>
                </li>
                <li>
                  <a
                    className="nav-link ps-4 text-muted letter-spacing-1"
                    href="shop-category.html"
                  >
                    {" "}
                    <span className="ps-2">Shirts</span>
                  </a>
                </li>
                <li>
                  <a
                    className="nav-link ps-4 text-muted letter-spacing-1"
                    href="shop-category.html"
                  >
                    {" "}
                    <span className="ps-2">Pants</span>
                  </a>
                </li>
                <li>
                  <a
                    className="nav-link ps-4 text-muted letter-spacing-1"
                    href="shop-category.html"
                  >
                    {" "}
                    <span className="ps-2">Accessories</span>
                  </a>
                </li>
              </ul>
            </li> */}
            {/* <li className="nav-item">
              <a className="nav-link" href="shop-category.html">
                <div className="d-flex align-items-center justify-content-between">
                  <span className="fw-bold text-uppercase">Kds</span>
                  <div className="badge bg-secondary">11</div>
                </div>
              </a>
              <ul className="list-unstyled text-sm text-muted mb-0">
                <li>
                  <a
                    className="nav-link ps-4 text-muted letter-spacing-1"
                    href="shop-category.html"
                  >
                    {" "}
                    <span className="ps-2">T-shirts</span>
                  </a>
                </li>
                <li>
                  <a
                    className="nav-link ps-4 text-muted letter-spacing-1"
                    href="shop-category.html"
                  >
                    {" "}
                    <span className="ps-2">Shirts</span>
                  </a>
                </li>
                <li>
                  <a
                    className="nav-link ps-4 text-muted letter-spacing-1"
                    href="shop-category.html"
                  >
                    {" "}
                    <span className="ps-2">Pants</span>
                  </a>
                </li>
                <li>
                  <a
                    className="nav-link ps-4 text-muted letter-spacing-1"
                    href="shop-category.html"
                  >
                    {" "}
                    <span className="ps-2">Accessories</span>
                  </a>
                </li>
              </ul>
            </li> */}
          </ul>
        </div>
      )}
    </>
  );
};
