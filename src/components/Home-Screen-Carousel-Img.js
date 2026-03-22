import React from 'react'

const Carousel_Img = (props) => {
    return (
        <div className={`carousel-item ${props.active ? "active" : ""}`} style={{ height: "100vh" }}>
            <img
                src={props.Cimg}
                className="d-block w-100"
                style={{
                    height: "100%",
                    objectFit: "cover"
                }}
                alt="carousel"
            />
        </div>
    )
}

export default Carousel_Img