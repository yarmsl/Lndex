import React from 'react';
import { CarouselAbout } from './CarouselAbout';


function About() {
    return (
        <section className="about" id="about">
            <div className="about__wrapper">
                <div className="about__container">
                    <div className="about__title title title_light">
                        Digital-студия INDEX гарантирует
                </div>
                    <div className="about__content">
                        <div className="about__column_1">
                            <div className="about__card card">
                                <p>Пунктуальность</p>
                                <span>Вы получите результат точно в срок.</span>
                            </div>
                            <div className="about__card card">
                                <p>Ответственность</p>
                                <span>Мы выполняем свои обещания.
                        И ценим долгосрочные отношения.</span>
                            </div>
                            <div className="about__card card">
                                <p>Эффективность</p>
                                <span>Мы сделаем свою работу качественно, результативно и с полной отдачей.</span>
                            </div>
                        </div>
                        <div className="about__column_2">
                            <div className="about__card card">
                                <p>Заинтересованность</p>
                                <span>
                                    Мы учтём все ваши интересы и пожелания с вниманием и заботой.
                                    И предложим объективное решение или альтернативу.
                        </span>
                            </div>
                            <div className="about__card card">
                                <p>Гибкость</p>
                                <span>Иногда все идёт не по плану.
                        Не страшно. Мы умеем быстро перестраиваться.</span>
                            </div>
                            <div className="about__card card">
                                <p>Профессионализм</p>
                                <span>Реализуем высоконагруженные проекты и многозадачные сервисы.
                                Проектируем масштабируемую архитектуру. Это не просто слова.
                        За этим стоит наш личный опыт.</span>
                            </div>
                        </div>
                    </div>
                    <div className="about__text text text_about">
                        Нам важен ваш результат. Мы были на вашем месте, поэтому мы собрали команду профессионалов и делаем свою работу круто и в срок. Для вас. Просто проверьте.
                </div>
                </div>
            </div>
            <CarouselAbout />
        </section>

    )
}
export default About
