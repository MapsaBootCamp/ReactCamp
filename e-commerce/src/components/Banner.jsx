import React from "react";

export default function Banner() {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src="./assets/banner.jpg"
            alt="IMG"
            style={{height: "400px"}}
          />
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container">
              <h5 className="card-title fs-1 text">TRY HARD</h5>
              <p className="card-text fs-5 text-light fw-bold d-none d-sm-block ">
                It is better to fail in originality than to succeed in
                imitation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
