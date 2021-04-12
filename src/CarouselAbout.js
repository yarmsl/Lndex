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
        speed: 750,
        slidesToShow: 5,
        slidesToScroll: 1,
        // autoplay: true,
        // centerMode: true,
        // autoplaySpeed: 10000,
        // responsive: [
        //     {
        //         breakpoint: 9999,
        //         settings: {
        //             slidesToShow: 5,
        //         }
        //     },
        //     {
        //         breakpoint: 1640,
        //         settings: {
        //             slidesToShow: 4,
        //         }
        //     },
        //     {
        //         breakpoint: 1280,
        //         settings: {
        //             slidesToShow: 3,
        //             slidesToScroll: 1
        //         }
        //     },
        //     {
        //         breakpoint: 856,
        //         settings: {
        //             slidesToShow: 2,
        //             slidesToScroll: 1
        //         }
        //     },
        //     {
        //         breakpoint: 600,
        //         settings: {
        //             slidesToShow: 1,
        //             slidesToScroll: 1
        //         }
        //     }
        // ]
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

