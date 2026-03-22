import React from 'react'

const Cta = () => {
  return (
    <div
        className="text-center text-white mt-5"
        style={{
          background: "#000",
          padding: "40px",
          borderRadius: "10px",
        }}
      >
        <h3 className="fw-bold">Let’s Build Something Stylish Together</h3>
        <p className="text-muted">
          Reach out to us anytime — we’re here for you
        </p>
        <button className="btn btn-light mt-2">Explore Collection</button>
      </div>
  )
}

export default Cta
