import React from 'react'

const Hero = () => {
    return (
        <div className="card border-0 text-white mb-5">
            <img
                src="https://t3.ftcdn.net/jpg/04/35/47/02/360_F_435470205_Dhc0LMqxiSf4hrK8hQkHVrqrKzLFmuZq.jpg"
                className="card-img"
                alt=""
            />
            <div className="card-img-overlay d-flex flex-column justify-content-center align-items-center text-center">
                <h1 className="fw-bold display-5">Zenvy</h1>
                <p className="lead">Minimal. Modern. You.</p>
                <button className="btn btn-light">Explore Collection</button>
            </div>
        </div>
    )
}

export default Hero;
