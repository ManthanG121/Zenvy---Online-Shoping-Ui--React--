import React from 'react'

const Right = () => {
  return (
    <div className="col-lg-4">

          <div
            className="card border-0 shadow-sm p-4"
            style={{ borderRadius: "10px" }}
          >

            <h5 className="fw-bold mb-4">Order Summary</h5>

            <div className="d-flex justify-content-between mb-2">
              <span>Subtotal</span>
              <span>₹2998</span>
            </div>

            <div className="d-flex justify-content-between mb-2">
              <span>Shipping</span>
              <span className="text-success">Free</span>
            </div>

            <hr />

            <div className="d-flex justify-content-between fw-bold mb-4">
              <span>Total</span>
              <span>₹2998</span>
            </div>

            <button
              className="btn btn-dark w-100 mb-2"
              style={{ padding: "12px", fontWeight: "600" }}
            >
              Proceed to Checkout
            </button>

            <button className="btn btn-outline-dark w-100">
              Continue Shopping
            </button>

          </div>

        </div>
  )
}

export default Right
