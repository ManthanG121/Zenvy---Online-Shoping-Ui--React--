import React from 'react'

const Collection_Image = () => {
  return (
    <div className="row align-items-center mb-5">

        <div className="col-lg-6 order-lg-2 mb-4">
          <img
            src="https://img.freepik.com/free-photo/fashion-collection-design-shopping-graphic-words_53876-125567.jpg?semt=ais_rp_progressive&w=740&q=80"
            className="img-fluid rounded"
            alt=""
          />
        </div>

        <div className="col-lg-6 order-lg-1">
          <h3 className="fw-bold mb-3">Our Collection</h3>
          <p className="text-muted">
            From oversized tees to statement outfits, Zenvy offers a collection 
            that fits every mood and every moment.
          </p>
          <button className="btn btn-dark">Shop Now</button>
        </div>

      </div>
  )
}

export default Collection_Image
