import React from 'react'

export const Product_Card = (props) => {
  return (
    <>
      <div className="col-md-4 col-sm-6">
        <div className="card border-0 shadow-sm">

          <img
            src={props.pimage}
            className="card-img-top"
            alt=""
          />

          <div className="card-body text-center">
            <h6 className="fw-semibold">{props.pname}</h6>
            <p>
              ₹{props.pprice}{" "}
              <span className="text-muted text-decoration-line-through">
                ₹{props.pop}
              </span>
            </p>
            <button className="btn btn-dark w-100">
              Add to Cart
            </button>
          </div>

        </div>
      </div>
      
    </>
  )
};



export const NProduct_Card = (props) => {
  return (
    <div className="col-md-4 col-sm-6">
        <div className="card border-0 shadow-sm">

          <img
            src={props.npimage}
            className="card-img-top"
            alt=""
          />

          <div className="card-body text-center">
            <h6 className="fw-semibold">{props.npname}</h6>
            <p>
              ₹{props.npprice}{" "}
              <span className="text-muted text-decoration-line-through">
                ₹1499
              </span>
            </p>
            <button className="btn btn-dark w-100">
              Add to Cart
            </button>
          </div>

        </div>
      </div>
  )
}


