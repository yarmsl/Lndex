import React, {useState, useEffect} from 'react';
import display from './img/display.png';
import phones from './img/phones.png';




export const Portfolio = () => {

const [card_01, setCard_01] = useState("card_01");
const [card_02, setCard_02] = useState("card_02");

const listenScroll = (e) => {
    let viewHeight = window.innerHeight,
    // fixHeight = window.innerHeight,
    scroll = window.scrollY;
    if (viewHeight > 1440) {
        viewHeight = 1440
    } else if (viewHeight < 974) {
        viewHeight = 974
    }

// console.log('скролл: ',scroll,'окно: ',viewHeight,'IH: ',fixHeight)

     if (scroll < (viewHeight + viewHeight/4 )) {
        setCard_01("card_01")
     } else if (scroll > (viewHeight + viewHeight/4)) {
        setTimeout(setCard_01("card_01 cardShifter"),1000)
     }
     
     if (scroll < (1.5 * viewHeight)) {
         setCard_02("card_02")
     } else if (scroll > (1.5 * viewHeight)) {
         setTimeout(setCard_02("card_02 cardShifter"),1000)
     }
    
    
}

useEffect(() => {
    window.addEventListener('scroll', listenScroll);
    return () =>
    window.removeEventListener('scroll', listenScroll);
}, []);


    return (
        <section className="portfolio" id="portfolio">
            <div className="portfolio__container">
            <div className="portfolio__title title title_dark">Наши работы</div>
            
            <div className={card_01}>
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
            <div className={card_02}>
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
