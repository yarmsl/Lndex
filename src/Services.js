import React, {useState, useEffect} from 'react'

export const Services = () => {

    const [card_03, setCard_03] = useState("card_03");
    const [card_04, setCard_04] = useState("card_04");
    
    const listenScroll = (e) => {
        let viewHeight=window.innerHeight,
        scroll = window.scrollY;
        if (viewHeight > 1440) {
            viewHeight = 1440
        } else if (viewHeight < 974) {
            viewHeight = 974
        }
    
    // console.log('скролл: ',scroll,'окно: ',viewHeight)
    

        // if (scroll < (2*viewHeight + viewHeight/4 )) {
        //     setCard_03("card_03")
        //  } else if (scroll > (2*viewHeight + viewHeight/4)) {
        //      setTimeout(setCard_03("card_03 cardShifter"), 1000 ) 
        //  }
         
        //  if (scroll < (3 * viewHeight - viewHeight/2)) {
        //      setCard_04("card_04")
        //  } else if (scroll > (3 * viewHeight - viewHeight/2)) {
        //     setTimeout( setCard_04("card_04 cardShifter"),1000)
        //  }
        if (scroll < (viewHeight + viewHeight/4 )) {
            setCard_03("card_03")
         } else if (scroll > (viewHeight + viewHeight/4)) {
            setTimeout(setCard_03("card_03 cardShifter"),1000)
         }
         
         if (scroll < (1.5 * viewHeight)) {
             setCard_04("card_04")
         } else if (scroll > (1.5 * viewHeight)) {
             setTimeout(setCard_04("card_04 cardShifter"),1000)
         }
    }
    
    useEffect(() => {
        window.addEventListener('scroll', listenScroll);
        return () =>
        window.removeEventListener('scroll', listenScroll);
    }, []);

    return (
        <section className="services" id="services">
            <div className="services__container">
            <div className="services__title title title_light">Услуги</div>
            <div className={card_03}>
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
            <div className={card_04}>
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
