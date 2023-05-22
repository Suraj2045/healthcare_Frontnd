import React from "react";
import { Link } from "react-router-dom";

const ShopDetailsBanner = (result) => {
  console.log(result);
  return (
    <>
      <section className="shop-banner-area pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-xl-7">
              <div className="shop-thumb-tab mb-30">
                <ul className="nav" id="myTab2" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="home-tab"
                      data-bs-toggle="tab"
                      href="#home"
                      role="tab"
                      aria-selected="true"
                    >
                      <img src="img/shop/details/thumb1.jpg" alt="" />{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="profile-tab"
                      data-bs-toggle="tab"
                      href="#profile"
                      role="tab"
                      aria-selected="false"
                    >
                      <img src="img/shop/details/thumb2.jpg" alt="" />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="profile-tab2"
                      data-bs-toggle="tab"
                      href="#profile1"
                      role="tab"
                      aria-selected="false"
                    >
                      <img src="img/shop/details/thumb3.jpg" alt="" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="product-details-img mb-30">
                <div className="tab-content" id="myTabContent2">
                  <div
                    className="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                  >
                    <div className="product-large-img">
                      <img src="img/shop/details/large1.jpg" alt="" />
                    </div>
                  </div>
                  <div className="tab-pane fade" id="profile" role="tabpanel">
                    <div className="product-large-img">
                      <img src="img/shop/details/large2.jpg" alt="" />
                    </div>
                  </div>
                  <div className="tab-pane fade" id="profile1" role="tabpanel">
                    <div className="product-large-img">
                      <img src="img/shop/details/large3.jpg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-5">
              <div className="product-details mb-30">
                <div className="product-details-title">
                  <p>{result.result.procedure[0].speciality}</p>
                  <h1>{result.result.procedure[0].pname}</h1>
                  <div className="price details-price pb-30 mb-20">
                    <span>{result.result.procedure[0].price}</span>
                    <span className="old-price">
                      {result.result.procedure[0].discount}
                    </span>
                  </div>
                  <p> {result.result.procedure[0].description}</p>
                </div>
                {/* {result.result.procedure.map((procedure, index) => (
                  <div className="product-details-title" key={index}>
                    <p>{procedure.speciality}</p>
                    <h1>{procedure.pname}</h1>
                    <div className="price details-price pb-30 mb-20">
                      <span>{procedure.price}</span>
                      <span className="old-price">{procedure.discount}</span>
                    </div>
                    <p>{procedure.description}</p>
                  </div>
                ))} */}

                <div className="product-social mb-45">
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-behance"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
                <div className="product-details-action">
                  <form action="#">
                    <Link to="/register" className="primary_btn btn-icon ml-0">
                      <span>+</span> Add Procedure to Cart
                    </Link>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopDetailsBanner;
