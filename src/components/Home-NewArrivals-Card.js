import React from 'react'
import { useNavigate } from 'react-router-dom';

const NewArrivals_Card = (props) => {
    const navigate = useNavigate();
    return (
       
            <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
                <div className="card border-1 shadow-sm  product-card">
                    <div className="position-relative overflow-hidden">
                        <img
                            src={props.nproduct_image}
                            className="card-img-top"
                            alt="" onClick={()=>navigate(`/Singlepage2/${props.id}`)}
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
