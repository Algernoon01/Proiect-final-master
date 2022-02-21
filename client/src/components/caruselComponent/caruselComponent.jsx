import React from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from '../../assets/images/newborn1.jpg';
import image2 from '../../assets/images/newborn2.jpg';
import image3 from '../../assets/images/newborn3.jpg';

const Carusel = () => {
    return (
        <Carousel>
            <Carousel.Item Interval={1000}>
                <img
                className="d-block w-100"
                src={image1}
                alt="first slide"
                />
                
            </Carousel.Item>
            <Carousel.Item Interval={1000}>
            <img
                className="d-block w-100"
                src={image2}
                alt="first slide"
                />
            
            </Carousel.Item>
            <Carousel.Item Interval={1000}>
            <img
                className="d-block w-100"
                src={image3}
                alt="first slide"
                />
            
                
            </Carousel.Item>
        </Carousel>
    )
}

export default Carusel;