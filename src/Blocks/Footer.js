import './Footer.css'
import React from 'react';
import {Button, ButtonType} from '../components/button/Button';

function Footer(props) {

    const text = 'Задать вопрос'
    const type = ButtonType.PRIMARY

    return(
        <div className='footer-block'>
            <div className='footer-list'>
                <div className='footer-text2'>
                    Если вы хотите что-то узнать или спросить,
                    {"\n"}оставьте свой вопрос в форме обратной связи
                </div>
                <div className="button3-style">
                    <Button Type={ButtonType.PRIMARY} text={text} type={type}/>
                </div>
                <div className='footer-text2'>
                    © 2022 АО «СберТех» (является дочерним обществом ПАО «Сбербанк»)
                </div>
            </div>
            <div className='footer-list'>
                <div className='footer-text1'>Разделы</div>
                <div className='footer-text2'>Дизайн</div>
                <div className='footer-text2'>Компоненты</div>
                <div className='footer-text2'>Анонсы</div>
                <div className='footer-text2'>Вопрос-ответ</div>
            </div>
            <div className='footer-list'>
                    <div className='footer-text1'>Контакты</div>
                    <div className='footer-text2'>117105, Москва, 
                        {"\n"}Новоданиловская наб., д. 10</div>
                    <div className='footer-text2 color-design'>info.sbt@sberbank.ru
                        {"\n"}+7 495 669 08 08</div>
            </div>
        </div>
    )
}

export default Footer;