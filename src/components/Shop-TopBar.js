import React from 'react'

const TopBar = () => {
    return (

        <div className="d-flex justify-content-between align-items-center mb-4">
            <h5 className="fw-bold">All Products</h5>

            <select className="form-select w-auto">
                <option>Sort by</option>
                <option>Price Low to High</option>
                <option>Price High to Low</option>
                <option>Newest</option>
            </select>
        </div>
    )
}

export default TopBar;
