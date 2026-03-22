import React from 'react'

const Big_Banner = () => {
  return (
    <div className="card border-0 text-white">
        <img
          src="https://www.shutterstock.com/image-photo/banner-concept-minimalist-fashion-clothes-260nw-2150682299.jpg"
          className="card-img"
          alt=""
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center align-items-center text-center">
          <h2 className="fw-bold">Join the Zenvy Movement</h2>
          <p>Upgrade your wardrobe today</p>
          <button className="btn btn-light">Start Shopping</button>
        </div>
      </div>
  )
}

export default Big_Banner
