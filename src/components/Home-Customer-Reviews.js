import React from "react";

function Reviews(props) {
    return (

        < div className = "col-md-4" >
            <div className="card border-0 shadow-sm h-100 text-center p-3">

                <img
                    src={props.rimage}
                    className="rounded-circle mx-auto mb-3"
                    style={{ width: '100px', height: '100px', objectFit: 'cover' }} 
                    alt=""
                />

                <h6 className="fw-bold">{props.rname}</h6>
                <p className="text-warning">{props.rratings}</p>

                <p className="text-muted small">
                   {props.rtext}
                </p>
            </div>
        </div >
           
    );
}

export default Reviews;