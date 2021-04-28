import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';


function Contacts() {

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [message, setMessage] = useState('');

    const [nameDirty, setNameDirty] = useState('');
    const [numberDirty, setNumberDirty] = useState('');
    const [messageDirty, setMessageDirty] = useState('');

    const [nameError, setNameError] = useState('Введите имя');
    const [numberError, setNumberError] = useState('Введите телефон');
    const [messageError, setMessageError] = useState('Сообщение должно быть не короче 10 символов');

    const [formValid, setFormValid] = useState(false);
    const [sendResult, setSendResult] = useState('');
    const [sendError, setSendError] = useState('');
    const [hideForm, setHideForm] = useState('form__hide')
    // const [formData, setFormData] = useState([]);

    const submitHandler = (e) => {
        e.preventDefault();
        emailjs.sendForm('gmail', 'template_2o1lunz', e.target, 'user_gA4mJT01dIZlfSXzraUHT')
            .then((result) => {
                setSendResult(result.text);
                setHideForm('form__hide hide_form')
            }, (error) => {
                setSendError(error.text);
            });
    }


    useEffect(() => {
        if (nameError || numberError || messageError) {
            setFormValid(false);
        } else {
            setFormValid(true);
        }
    }, [nameError, numberError, messageError]);



    const nameHandler = (e) => {
        setName(e.target.value);

        if (!e.target.value.trim()) {
            setNameError('Введите имя');
        } else {
            setNameError('');
        }
    }

    const numberHandler = (e) => {
        var output,
            phoneNumber = e.target.value;
        phoneNumber = phoneNumber.replace(/[^0-9]/g, '');
        var code = "+7",
            area = phoneNumber.substr(1, 3),
            pre = phoneNumber.substr(4, 3),
            tel = phoneNumber.substr(7, 4);

        if (area.length === 0) {
            output = code;
        } else if ((area.length < 3) || pre.length === 0) {
            output = code + " (" + area;
        } else if ((area.length === 3 && pre.length < 3) || tel.length === 0) {
            output = code + " (" + area + ") " + pre;
        } else if (area.length === 3 && pre.length === 3) {
            output = code + " (" + area + ") " + pre + " - " + tel;
        }
        setNumber(output)
        if (output.length < 19) {
            setNumberError('Введите номер');
        } else {
            setNumberError('');
        }
    }

    const messageHandler = (e) => {
        setMessage(e.target.value);
        if (e.target.value.length < 10) {
            setMessageError('Сообщение должно быть не короче 10 символов')
        } else {
            setMessageError('');
        }
    }

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'name':
                setNameDirty(true);
                break
            case 'phonenumber':
                setNumberDirty(true);
                break
            case 'message':
                setMessageDirty(true);
                break
        }
    };


    return (
        <section className="contacts" id="contacts">
            <div className="contacts__container">
                <form onSubmit={submitHandler} className="form__container">
                    <div className="form__title title title_form">
                        {(sendResult && <div>Сообщение отправлено</div>) || (sendError && <div>Ошибка</div>) || <div>Напишите нам</div>}
                    </div>
                    <div className="form__description text">
                        {(sendResult && <div>Мы скоро с Вами свяжемся!</div>) || (sendError && <div>{sendError}</div>) || <div>Есть идея? Расскажите о своем проекте, укажите контакты, и мы свяжемся с Вами, чтобы все обсудить.</div>}
                    </div>
                    <div className={hideForm}>
                        <div className="form__userName input_f">
                            <input
                                onBlur={e => blurHandler(e)}
                                value={name}
                                onChange={e => nameHandler(e)}
                                name="name"
                                className="form__input input_name"
                                id="userName" type="text"
                                maxLength="50"
                                placeholder="Ваше имя" />
                            <div className="form__info text text_form">
                                {((nameDirty && nameError) && <p>{nameError}</p>)}
                            </div>
                        </div>
                        <div className="form__userPhone input_f">
                            <input
                                onBlur={e => blurHandler(e)}
                                value={number}
                                onChange={e => numberHandler(e)}
                                name="phonenumber"
                                className="form__input input_phone"
                                id="userPhone" type="tel"
                                maxLength="20"
                                placeholder="Телефон" />
                            <div className="form__info text text_form">
                                {((numberDirty && numberError) && <p>{numberError}</p>)}
                            </div>
                        </div>
                        <div className="form__userMessage input_f">
                            <input
                                onBlur={e => blurHandler(e)}
                                value={message}
                                onChange={e => messageHandler(e)}
                                name="message"
                                className="form__input input_message"
                                id="userMessage"
                                type="text"
                                maxLength="200"
                                placeholder="Сообщение" />
                            <div className="form__info text text_form">
                                {((messageDirty && messageError) && <p>{messageError}</p>)}
                            </div>
                        </div>
                        <div className="form__info text_form form__policy">
                            Нажимая кнопку ниже, я соглашаюсь с <a href="#">Политикой конфиденциальности</a>
                        </div>
                        <button
                            className="form__button button button_form"
                            disabled={!formValid}
                        >
                            Связаться с нами
                    </button>
                    </div>
                </form>
                <div className="contacts__field">
                    <div className="field__title text text_field">
                        Студия цифрового опыта INDEX
                    </div>

                    <a href="tel:89191232395" className="field__contact text text_contact contact_phone">
                        8 (919) 123 - 23 - 95
                    </a>
                    <a href="tel:83512232395" className="field__contact text text_contact contact_phone">
                        8 (351) 223 - 23 - 95
                    </a>

                    <a href="mailto:guru-grupp@mail.ru" className="field__contact text text_contact contact_mail">
                        guru-grupp@mail.ru
                    </a>
                    <a href="#" className="field__contact text text_contact">
                        Молодогвардейцев 60в, офис 505<br />
                    Челябинск, Россия, 454021
                    </a>
                </div>
            </div>
        </section>
    )
}
export default Contacts;