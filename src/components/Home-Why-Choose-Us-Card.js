import React from 'react'

const Card = (props) => {
  return (
    <div className="col-md-3 col-6">
          <div className="p-4 border rounded h-100">
            <h1>{props.femoji}</h1>
            <h6 className="fw-bold mt-3">{props.ftitle}</h6>
            <p className="text-muted small">
             {props.ftext}
            </p>
          </div>
        </div>
  )
}

export default Card
