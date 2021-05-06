import React from 'react';
import { ReactSVG } from 'react-svg'
import instagram from './icons/instagram.svg';
import facebook from './icons/facebook.svg';
import vk from './icons/vk.svg';
import linkedin from './icons/linkedin.svg';

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__info">
                    <p>Студия цифрового опыта INDEX</p>
                    <a href="tel:8000000000">8(000)-000-00-00</a>
                    <a href="mailto:mail@mail.ru">mail@mail.ru</a>
                </div>
                <div className="footer__adress">
                    <p>Адрес</p>
                    <p>Челябинск, Россия, 454100</p>
                </div>
                <div className="footer__social">
                    <a href="">
                        <ReactSVG src={instagram} />
                    </a>
                    <a href="">
                        <ReactSVG src={facebook} />
                    </a>
                    <a href="">
                        <ReactSVG src={vk} />
                    </a>
                    <a href="">
                        <ReactSVG src={linkedin} />
                    </a>
                </div>
            </div>
        </footer>
    )
}
