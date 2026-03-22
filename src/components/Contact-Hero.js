import React from 'react'

const Hero = () => {
  return (
    <div
        className="card border-0 text-white mb-5"
        style={{
          background:
            "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://c8.alamy.com/comp/T3HX3B/warm-knitted-autumn-winter-clothes-hanging-on-a-rack-trending-conceptpastel-colorscopy-space-banner-size-T3HX3B.jpg') center/cover no-repeat",
          height: "350px",
        }}
      >
        <div className="d-flex flex-column justify-content-center align-items-center text-center h-100">
          <h1 className="fw-bold display-5">Contact Zenvy</h1>
          <p className="lead">We’d love to hear from you</p>
        </div>
      </div>
  )
}

export default Hero
