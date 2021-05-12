import React, { useState, useEffect } from 'react';
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

    // запуск анимации с привязкой к значению scroll

    let startHeight = window.innerHeight;


    const [scale, setScale] = useState(1);
    const [top, setTop] = useState((startHeight / 2) - 100);
    const [opacity, setOpacity] = useState(1);

    const [nbTheme, setNbTheme] = useState(dark);
    const [showLogo, setShowLogo] = useState("navbar__logo title title_logo");

    const listenScroll = (e) => {
        let viewHeight = window.innerHeight,
            realHeight = window.innerHeight,
            scroll = window.scrollY;
        if (viewHeight > 1440) {
            viewHeight = 1440;
        } else if (viewHeight < 974) {
            viewHeight = 974;
        }

        if (scroll < realHeight - 50) {
            setTop(top + scroll / 3);
            setScale((realHeight - scroll) / realHeight);
            setOpacity((realHeight - 1.3 * scroll) / realHeight)

        }

        if (scroll < (realHeight - 400)) {
            setShowLogo("navbar__logo title title_logo");
        }
        else if (scroll > (realHeight - 400) && scroll < (realHeight - 300)) {
            setShowLogo("navbar__logo title title_logo show");
        }

        else if (scroll > (realHeight - 300) && scroll < (realHeight - 50)) {
            setNbTheme(dark);
            setShowLogo("navbar__logo title title_logo show showLogo");
        }

        else if (scroll > (realHeight - 50) && scroll < ((realHeight + viewHeight) - 50)) {
            setNbTheme(light);


        }
        else if (scroll > ((realHeight + viewHeight) - 50) && scroll < ((realHeight + (2 * viewHeight)) - 50)) {
            setNbTheme(dark);
        }
        else if (scroll > ((realHeight + (2 * viewHeight)) - 50) && scroll < ((realHeight + (3 * viewHeight)) - 50)) {
            setNbTheme(light);
        }
        else {
            setNbTheme(dark);
        }
    };

    const styles = {
        logoST: {
            transform: `scale(${scale})`,
            top: top,
            opacity: opacity,
        },
    };


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
                    <a href="#portfolio" className="navbar__button button_navbar" style={nbTheme.nbButton} >Портфолио</a>
                    <a href="#services" className="navbar__button button_navbar" style={nbTheme.nbButton} >Услуги</a>
                    {/* <a href="#contacts" className="navbar__button button_navbar" style={nbTheme.nbButton} >Контакты</a> */}
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
