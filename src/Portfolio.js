import React, {useState, useEffect} from 'react';
import display from './img/display.png';
import phones from './img/phones.png';


function Portfolio() {
    return (
        <section className="portfolio" id="portfolio">
            <div className="portfolio__container">
            <div className="portfolio__title title title_dark">Наши работы</div>
            
            <div className='card_01'>
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
            <div className='card_02'>
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