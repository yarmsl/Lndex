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
                    <a href="tel:89191232395">8(919)-123-23-95</a>
                    <a href="mailto:guru-grupp@mail.ru">guru-grupp@mail.ru</a>
                </div>
                <div className="footer__adress">
                    <p>Молодогвардейцев 60в, офис 505</p>
                    <p>Челябинск, Россия, 454021</p>
                </div>
                <div className="footer__social">
                    <a href="https://www.instagram.com/index.ds/">
                        <ReactSVG src={instagram} />
                    </a>
                    <a href="https://www.facebook.com/INDEX-103634548475412/?refid=52&__tn__=C-R">
                        <ReactSVG src={facebook} />
                    </a>
                    <a href="https://vk.com/index_ds">
                        <ReactSVG src={vk} />
                    </a>
                    <a href="https://www.linkedin.com/company/index-digital-studio">
                        <ReactSVG src={linkedin} />
                    </a>
                </div>
            </div>
        </footer>
    )
}
