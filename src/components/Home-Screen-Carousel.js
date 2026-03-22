import React from 'react'
import Carousel_Img from './Home-Screen-Carousel-Img';
import image from '../data/Home-Carousel.json'

const Carousel = () => {
    return (
        <div>
            <div
                id="carouselExampleSlidesOnly"
                className="carousel slide"
                data-bs-ride="carousel"
            >
                <div className="carousel-inner">

                    {image.map((img,index) => (
                        <Carousel_Img 
                        Cimg = {img.image}
                        active={index === 0}
                        />
                    ))}
                    
                </div>
            </div>
        </div>
    )
}

export default Carousel;
