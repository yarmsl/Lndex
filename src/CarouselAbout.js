import React, {useEffect, useRef} from 'react';
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
const a_carousel = useRef();
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
    useEffect(() => {
        window.addEventListener('scroll', listenScroll);
        function isPartVis(el) {
            let elBound = el.current.getBoundingClientRect(),
                top = elBound.top,
                bottom = elBound.bottom,
                height = elBound.height;
            return ((top + height >= 0) && (height + window.innerHeight >= bottom));
        }
        function listenScroll() {
            if (isPartVis(a_carousel)) {
                a_carousel.current.classList.add('activeVis');
            } else {
                a_carousel.current.classList.remove('activeVis');
            }}
        return () =>
            window.removeEventListener('scroll', listenScroll);
    }, []);
    return (
        <div className="about__images" ref={a_carousel}>
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

