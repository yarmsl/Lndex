import React from 'react';
import Laptop from './img/laptop.svg';
import iPad from './img/ipad.svg';
import iPhone from './img/iphone.svg';
import destkop from './img/tv.svg';
import page from './img/page.svg';
import smartphone from './img/smartphone.svg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



export const CarouselAbout = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 350,
        slidesToShow: 5,
        slidesToScroll: 2,
        // autoplay: true,
        // centerMode: true,
        // autoplaySpeed: 100
    };

    return (
        <div className="about__images">
            <Slider {...settings}>
                <div className="about__image"><img src={smartphone} alt="smartphone" /></div>
                <div className="about__image"><img src={page} alt="page" /></div>
                <div className="about__image"><img src={iPad} alt="iPad" /></div>
                <div className="about__image"><img src={Laptop} alt="Laptop" /></div>
                <div className="about__image"><img src={iPhone} alt="iPhone" /></div>
                <div className="about__image"><img src={destkop} alt="Destkop" /></div>
            </Slider>
        </div>
    )
}

