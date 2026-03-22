import React from 'react'

const Sidebar = () => {
    return (
        
            <div className="col-lg-3 mb-4">
                <h5 className="fw-bold mb-3">Filters</h5>

                {/* Category */}
                <div className="mb-4">
                    <h6 className="fw-bold">Category</h6>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" />
                        <label className="form-check-label">Men</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" />
                        <label className="form-check-label">Women</label>
                    </div>
                </div>

                {/* Price */}
                <div className="mb-4">
                    <h6 className="fw-bold">Price</h6>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" />
                        <label className="form-check-label">Under ₹1000</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" />
                        <label className="form-check-label">₹1000 - ₹2000</label>
                    </div>
                </div>

                {/* Size */}
                <div className="mb-4">
                    <h6 className="fw-bold">Size</h6>
                    <button className="btn btn-outline-dark btn-sm me-2 mb-2">S</button>
                    <button className="btn btn-outline-dark btn-sm me-2 mb-2">M</button>
                    <button className="btn btn-outline-dark btn-sm me-2 mb-2">L</button>
                    <button className="btn btn-outline-dark btn-sm mb-2">XL</button>
                </div>
            </div>

       
    )
}

export default Sidebar;
