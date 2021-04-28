import React, {useState, useEffect, useRef} from 'react'

function Services() {
    const card3 = useRef();
    const card4 = useRef();
    
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
                if (isPartVis(card3)) {
                    card3.current.classList.add('activeVis');
                } else {
                    card3.current.classList.remove('activeVis');
                }
                if (isPartVis(card4)) {
                    card4.current.classList.add('activeVis');
                } else {
                    card4.current.classList.remove('activeVis');
                }}
            return () =>
                window.removeEventListener('scroll', listenScroll);
        }, []);
    return (
        <section className="services" id="services">
            <div className="services__container">
            <div className="services__title title title_light">Услуги</div>
            <div className='card_03' ref={card3}>
                <div className="card_03__wrapper">
                    <div className="card_03__description">
                        <div className="card_03__title title title_card_03">
                            Разработка сайтов
                        </div>
                        <div className="card_03__text text text_services text_services_03">
                            <p>Корпоративные сайты, промосайты</p>
                            <p>Интернет-Магазины</p>
                            <p>Высоконагруженные проекты</p>
                            <p>Создание веб-сервисов</p>
                            <p>Frontend и Backend разработка</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='card_04' ref={card4}>
                <div className="card_04__wrapper">
                    <div className="card_04__description">
                        <div className="card_04__title title title_card_04">
                        Мобильная разработка
                        </div>
                        <div className="card_04__text text text_services text_services_04">
                            <p>Проектирование архитектуры и интерфейсов</p>
                            <p>Мобильные приложения</p>
                            <p>Концепция дизайна, анимации</p>
                            <p>Адаптивная верстка</p>
                            <p>Тестирование </p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </section>
    )
}
export default Services;