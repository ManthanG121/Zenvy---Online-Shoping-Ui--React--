import React from 'react'

const Product = (props) => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6">
          <div
            className="card border-0 shadow-sm"
            style={{ borderRadius: "10px" }}
          >

            <div className="position-relative">

              <img
                src={props.pimage}
                className="card-img-top"
                alt=""
              />

              {/* Remove Button */}
              <button
                className="btn btn-light position-absolute top-0 end-0 m-2"
                style={{ borderRadius: "50%" }}
              >
                ❌
              </button>

            </div>

            <div className="card-body text-center">
              <h6 className="fw-semibold">{props.pname}</h6>
              <p>
                ₹{props.pprice}{" "}
                <span className="text-muted text-decoration-line-through">
                  ₹1499
                </span>
              </p>

              <button className="btn btn-dark w-100 mb-2">
                Add to Cart
              </button>

              <button className="btn btn-outline-dark w-100">
                View Product
              </button>
            </div>

          </div>
        </div>
  )
}

export default Product
