import React from 'react'

const NewArrivals_Card = (props) => {
    return (
       
            <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
                <div className="card border-1 shadow-sm  product-card">
                    <div className="position-relative overflow-hidden">
                        <img
                            src={props.nproduct_image}
                            className="card-img-top"
                            alt=""
                        />
                        <span className="badge bg-success position-absolute top-0 start-0 m-2">
                            NEW
                        </span>
                    </div>

                    <div className="card-body text-center">
                        <h6 className="fw-semibold">{props.nproduct_name}</h6>
                        <p>₹{props.nproduct_price}</p>
                        <button className="btn btn-outline-dark w-100">
                            View Product
                        </button>
                    </div>
                </div>
            </div>
        
    )
}

export default NewArrivals_Card;
