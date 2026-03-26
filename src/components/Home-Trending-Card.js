import React from 'react'
import { useNavigate } from 'react-router-dom'

const Trending_Card = (props) => {
  const navigate = useNavigate();
    return (

        <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
          <div className="card border-0 shadow-sm product-card">
            <div className="position-relative overflow-hidden">
              <img
                src={props.pimage}
                className="card-img-top img-main"
                alt="" onClick={()=> navigate(`/Singlepage/${props.id}`)}
              />
              <span className="badge bg-danger position-absolute top-0 start-0 m-2">
                SALE
              </span>
            </div>

            <div className="card-body text-center">
              <h6 className="fw-semibold">{props.pname}</h6>
              <p className="mb-1">
                ₹{props.pofferprice}{" "}
                <span className="text-muted text-decoration-line-through">
                  ₹{props.porignalprice}
                </span>
              </p>
              <button className="btn btn-dark w-100 mt-2">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
    )
}

export default Trending_Card
