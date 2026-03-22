import React from 'react'

const Cart_Product = (props) => {
  return (
    <div
            className="card mb-4 border-0 shadow-sm"
            style={{ borderRadius: "10px" }}
          >
            <div className="row g-0 align-items-center">

              <div className="col-md-3">
                <img
                  src={props.pimage}
                  className="img-fluid rounded-start"
                  style={{ height: '160px', objectFit: 'cover' }}
                  alt=""
                />
              </div>

              <div className="col-md-5">
                <div className="card-body">
                  <h6 className="fw-bold">{props.pname}</h6>
                  <p className="text-muted mb-1">Size: M</p>
                  <p className="mb-0">₹{props.pOffer_price}</p>
                </div>
              </div>

              <div className="col-md-4 text-center">

                {/* Quantity */}
                <div className="d-flex justify-content-center align-items-center mb-3">
                  <button className="btn btn-outline-dark btn-sm">-</button>
                  <span className="mx-3 fw-bold">1</span>
                  <button className="btn btn-outline-dark btn-sm">+</button>
                </div>

                <button className="btn btn-link text-danger p-0">
                  Remove
                </button>

              </div>

            </div>
          </div>
  )
}

export default Cart_Product
