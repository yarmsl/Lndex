import React, { useState, useEffect } from 'react'
import shape_1 from './img/shape_1.svg';
import shape_2 from './img/shape_2.svg';


const dark = {
    nbLogo: {
        color: '#FFFFFF',
        textShadow: '0px 0px 20px #c1c8ff80',
    },
    nbButton: {
        color: '#FFFFFF',
        textShadow: '0px 0px 20px #c1c8ff80',
    },
    nbWrapper: {
        backgroundColor: '#000638',
    }
}

const light = {
    nbLogo: {
        color: '#000638',
        textShadow: '0px 0px 20px #C1C8FF',
    },
    nbButton: {
        color: '#000638',
        textShadow: '0px 4px 20px #C1C8FF',
    },
    nbWrapper: {
        backgroundColor: '#FFFFFF',

    }
}

export const Header = () => {

    // const [navbar, setNavbar] = useState("navbar");

    // const [nblogo, setNblogo] = useState("navbar__logo logoReplace");

    // const [nbTitle, setNbTitle] = useState("navbar__title hideTitles");
    // const [nbShape1, setNbShape1] = useState("navbar__shape_1 hideShapes");
    // const [nbShape2, setNbShape2] = useState("navbar__shape_2 hideShapes");
    {/* <div className="navbar__shapes">
                <div className={nbShape1}><img src={shape_1} alt="Фигура"/></div>
                <div className={nbShape2}><img src={shape_2} alt="Фигура"/></div>
                </div> */}
    // const [logo, setLogo] = useState("logo");
    // const [title, setTitle] = useState("header__title");
    // const [shapesNB, setShapesNB] = useState("navbar__shapes");
    // const [replaceLogo, setReplaceLogo] = useState(false);

    // Запуск анимации по достижении определенного значения Scroll

    // const listenScroll = (e) => {
    //     if(window.scrollY < 180) {
    //         return setNavbar("navbar")
    //     } else if (window.scrollY > 180 && window.scrollY < 280) {
    //         return setNavbar("navbar hideNav"),
    //         setLogo("logo")
    //     } else if (window.scrollY > 280 && window.scrollY < 580) {
    //         return setLogo("logo scaleLogo")
    //     } else if (window.scrollY > 500) {
    //         return setLogo("logo scaleLogo hideLogo")
    //     }
    // }

    // const listenScroll = (e) => {
    //     if (window.scrollY < 120) {
    //         return setNblogo("navbar__logo"),
    //         setNbSubtitle("navbar__logo_subtitle"),
    //         setNbTitle("navbar__title"),
    //         setNbShape1("navbar__shape_1"),
    //         setNbShape2("navbar__shape_2")
    //     } else if (window.scrollY > 80) {
    //         return setNblogo("navbar__logo logoReplace"),
    //         setNbSubtitle("navbar__logo_subtitle hideTitles"),
    //         setNbTitle("navbar__title hideTitles"),
    //         setNbShape1("navbar__shape_1 hideShapes"),
    //         setNbShape2("navbar__shape_2 hideShapes")
    //     } 
    // }



    // запуск анимации с привязкой к значению scroll

    let startHeight = window.innerHeight;
    // if (startHeight > 1440) {
    //     startHeight = 1440
    // } else if (startHeight < 974) {
    //     startHeight = 974
    // }

    const [scale, setScale] = useState(1);
    // const [rotate1, setRotate1] = useState(0);
    // const [rotate2, setRotate2] = useState(0);
    const [top, setTop] = useState((startHeight / 2) - 100);
    const [opacity, setOpacity] = useState(1);

    const [nbTheme, setNbTheme] = useState(dark);
    const [showLogo, setShowLogo] = useState("navbar__logo title title_logo");

    const listenScroll = (e) => {
        let viewHeight = window.innerHeight,
            realHeight = window.innerHeight,
            scroll = window.scrollY;
        if (viewHeight > 1440) {
            viewHeight = 1440
        } else if (viewHeight < 974) {
            viewHeight = 974
        }
        // console.log(viewHeight, '-', scroll, "-", realHeight)

        if (scroll < realHeight - 50) {
            setTop(top + scroll / 3);
            setScale((realHeight - scroll) / realHeight);
            // setRotate1(scroll / 5);
            // setRotate2(-scroll / 5);
            setOpacity((realHeight - 1.3 * scroll) / realHeight)

        }

        if (scroll < (realHeight - 400)) {
            setShowLogo("navbar__logo title title_logo");
            // setScale((scale) - ((((viewHeight / 1000) / 2) /(300 * (viewHeight / 1000)) ) * scroll));

            // setOpacity(opacity - scroll/500);
        }
        else if (scroll > (realHeight - 400) && scroll < (realHeight - 300)) {
            setShowLogo("navbar__logo title title_logo show");
            // setScale((scale) - ((((viewHeight / 1000) / 2) /(300 * (viewHeight / 1000)) ) * scroll));

            // setOpacity(opacity - scroll/500);

        }

        else if (scroll > (realHeight - 300) && scroll < (realHeight - 50)) {
            setNbTheme(dark);
            setShowLogo("navbar__logo title title_logo show showLogo");
            // setScale(0);
        }

        else if (scroll > (realHeight - 50) && scroll < ((realHeight + viewHeight) - 50)) {
            setNbTheme(light);


        }
        else if (scroll > ((realHeight + viewHeight) - 50) && scroll < ((realHeight + (2 * viewHeight)) - 50)) {
            setNbTheme(light);
        }
        else if (scroll > ((realHeight + (2 * viewHeight)) - 50) && scroll < ((realHeight + (3 * viewHeight)) - 50)) {
            setNbTheme(dark);
        }
        else {
            setNbTheme(dark);
        }
    }

    // console.log('координаты скролла', window.scrollY);
    // console.log('высота вьюпорта',window.innerHeight);

    const styles = {
        logoST: {
            transform: `scale(${scale})`,
            top: top,
            opacity: opacity,
        },
        // shape1: {
        //     transform: `rotate(${rotate1}deg)`
        // },
        // shape2: {
        //     transform: `rotate(${rotate2}deg)`
        // }
    }


    useEffect(() => {
        window.addEventListener('scroll', listenScroll);
        return () =>
            window.removeEventListener('scroll', listenScroll);
    }, []);


    return (
        <header className="header">
            <div className="navbar_wrapper" style={nbTheme.nbWrapper}>
                <nav className="navbar">
                    <a className={showLogo} style={nbTheme.nbLogo} href="#">IND<span>E</span>X</a>
                    <a href="#about" className="navbar__button button_navbar" style={nbTheme.nbButton} >О компании</a>
                    {/* <a href="#portfolio" className="navbar__button button_navbar" style={nbTheme.nbButton} >Портфолио</a> */}
                    <a href="#services" className="navbar__button button_navbar" style={nbTheme.nbButton} >Услуги</a>
                    <a href="#contacts" className="navbar__button button_navbar" style={nbTheme.nbButton} >Контакты</a>
                </nav>
            </div>
            <div className="logo" style={styles.logoST} >

                <div className="shape_1" ><img src={shape_1} alt="Фигура" /></div>
                <div className="shape_2" ><img src={shape_2} alt="Фигура" /></div>
                <div className="logo__title">
                    <h1>IND<span>E</span>X</h1>
                </div>
                <div className="logo__subtitle">
                    Introduction Digital Experience
                </div>
                <div className="header__title">Студия цифрового опыта</div>
            </div>
        </header>
    )
}
