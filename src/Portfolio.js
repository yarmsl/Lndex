import React, {useState, useEffect, useRef} from 'react';
import display from './img/display.png';
import phones from './img/phones.png';

function Portfolio() {
const card1 = useRef();
const card2 = useRef();

    function isFullVis(el) {
        let elBound = el.current.getBoundingClientRect(),
            top = elBound.top,
            bottom = elBound.bottom;
        return ((top >= 0) && (bottom <= window.innerHeight));
      }

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
            if (isPartVis(card1)) {
                card1.current.classList.add('activeVis');
            } else {
                card1.current.classList.remove('activeVis');
            }
            if (isPartVis(card2)) {
                card2.current.classList.add('activeVis');
            } else {
                card2.current.classList.remove('activeVis');
            }}
        return () =>
            window.removeEventListener('scroll', listenScroll);
    }, []);

    return (
        
        <section className="portfolio" id="portfolio">
            {}
            <div className="portfolio__container">
            <div className="portfolio__title title title_dark">Наши работы</div>
            
            <div className='card_01' ref={card1}>
                <div className="card_01__wrapper">
                    <div className="card_01__description">
                        <div className="card_01__title title title_card_01">
                            Разработка сервиса объявлений KVIK
                        </div>
                        <div className="card_01__text text text_portfolio">
                        Новый кроссплатформенный сервис KVIK помогает быстро и безопасно купить, продать, обменять или отдать даром практически любой товар.
                        </div>
                    </div>
                    <div className="card_01__image">
                        <img src={display} alt="KVIK" />
                    </div>

                </div>
            </div>
            <div className='card_02' ref={card2}>
                <div className="card_02__wrapper">
                    <div className="card_02__image">
                        <img src={phones} alt="KVIK" />
                    </div>
                    <div className="card_02__description">
                        <div className="card_02__title title title_card_02">
                        Мобильное приложение для сервиса KVIK
                        </div>
                        <div className="card_02__text text text_portfolio">
                        Удобное и функциональное приложение для продаж, коммуникации пользователей и продвижения бренда. Онлайн-сервис реализован в мобильной среде под iOS и Android. 
                        </div>
                    </div>

                </div>
            </div>
            </div>
        </section>
    )
}
export default Portfolio;