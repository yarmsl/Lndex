import React, {useEffect, useRef} from 'react';
import { CarouselAbout } from './CarouselAbout';

function About() {
    const a_card1 = useRef(),
            a_card2 = useRef(),
            a_card3 = useRef(),
            a_card4 = useRef(),
            a_card5 = useRef(),
            a_card6 = useRef(),
            a_text = useRef();

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
                    if (isPartVis(a_card1)) {
                        a_card1.current.classList.add('activeVis');
                    } else {
                        a_card1.current.classList.remove('activeVis');
                    }
                    if (isPartVis(a_card2)) {
                        a_card2.current.classList.add('activeVis');
                    } else {
                        a_card2.current.classList.remove('activeVis');
                    }
                    if (isPartVis(a_card3)) {
                        a_card3.current.classList.add('activeVis');
                    } else {
                        a_card3.current.classList.remove('activeVis');
                    }
                    if (isPartVis(a_card4)) {
                        a_card4.current.classList.add('activeVis');
                    } else {
                        a_card4.current.classList.remove('activeVis');
                    }
                    if (isPartVis(a_card5)) {
                        a_card5.current.classList.add('activeVis');
                    } else {
                        a_card5.current.classList.remove('activeVis');
                    }
                    if (isPartVis(a_card6)) {
                        a_card6.current.classList.add('activeVis');
                    } else {
                        a_card6.current.classList.remove('activeVis');
                    }
                    if (isPartVis(a_text)) {
                        a_text.current.classList.add('activeVis');
                    } else {
                        a_text.current.classList.remove('activeVis');
                    }
                }
                return () =>
                    window.removeEventListener('scroll', listenScroll);
            }, []);

    return (
        <section className="about" id="about">
            <div className="about__wrapper">
                <div className="about__container">
                    <div className="about__title title title_light">
                        Digital-???????????? INDEX ??????????????????????
                </div>
                    <div className="about__content">
                        <div className="about__column_1">
                            <div className="about__card card" ref={a_card1}>
                                <p>????????????????????????????</p>
                                <span>???? ???????????????? ?????????????????? ?????????? ?? ????????.</span>
                            </div>
                            <div className="about__card card" ref={a_card2}>
                                <p>??????????????????????????????</p>
                                <span>???? ?????????????????? ???????? ????????????????.
                        ?? ?????????? ???????????????????????? ??????????????????.</span>
                            </div>
                            <div className="about__card card" ref={a_card3}>
                                <p>??????????????????????????</p>
                                <span>???? ?????????????? ???????? ???????????? ??????????????????????, ?????????????????????????? ?? ?? ???????????? ??????????????.</span>
                            </div>
                        </div>
                        <div className="about__column_2">
                            <div className="about__card card" ref={a_card4}>
                                <p>????????????????????????????????????</p>
                                <span>
                                    ???? ?????????? ?????? ???????? ???????????????? ?? ?????????????????? ?? ?????????????????? ?? ??????????????.
                                    ?? ?????????????????? ?????????????????????? ?????????????? ?????? ????????????????????????.
                        </span>
                            </div>
                            <div className="about__card card" ref={a_card5}>
                                <p>????????????????</p>
                                <span>???????????? ?????? ???????? ???? ???? ??????????.
                        ???? ??????????????. ???? ?????????? ???????????? ??????????????????????????????.</span>
                            </div>
                            <div className="about__card card" ref={a_card6}>
                                <p>??????????????????????????????</p>
                                <span>?????????????????? ?????????????????????????????????? ?????????????? ?? ?????????????????????????? ??????????????.
                                ?????????????????????? ???????????????????????????? ??????????????????????. ?????? ???? ???????????? ??????????.
                        ???? ???????? ?????????? ?????? ???????????? ????????.</span>
                            </div>
                        </div>
                    </div>
                    <div className="about__text text text_about" ref={a_text}>
                        ?????? ?????????? ?????? ??????????????????. ???? ???????? ???? ?????????? ??????????, ?????????????? ???? ?????????????? ?????????????? ???????????????????????????? ?? ???????????? ???????? ???????????? ?????????? ?? ?? ????????. ?????? ??????. ???????????? ??????????????????.
                </div>
                </div>
            </div>
            <CarouselAbout/>
        </section>

    )
}
export default About
