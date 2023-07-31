import './SecondBlock.css'
import React from 'react';
import {Button, ButtonType} from "../components/button/Button";
import Icon from '../images/Illustrations.svg'
import List1 from '../components/lists/listRow1/List1';
import { CardType, Card, CardWrapper } from '../components/cards/Card';
import Icon1 from '../images/card1/Frame 427318203.svg'
import Icon2 from '../images/card1/Frame 427318215.svg'
import Icon3 from '../images/card1/Button group Sets.svg'
import Icon4 from '../images/card1/Frame 427318215 (1).svg'
import Icon5 from '../images/card1/Frame 427318215 (2).svg'


function SecondBlock(props) {

  const text ='Все компоненты'
  const type = ButtonType.SECONDARY


  const elements = [
    {
      picture: <img src={Icon1}/>,
      title: 'Button',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit pellentesque eu eget.'
    },
    {
      picture: <img src={Icon2}/>,
      title: 'Alerts',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit pellentesque eu eget.'
    },
    {
      picture: <img src={Icon3}/>,
      title: 'Button group',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit pellentesque eu eget.'
    },
    {
      picture: <img src={Icon4}/>,
      title: 'Modal',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit pellentesque eu eget.'
    },
    {
      picture: <img src={Icon5}/>,
      title: 'Date picker',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit pellentesque eu eget.'
    }
]

  return(
    <div className="second-block">
      <div className='second-block__title'>Компоненты</div>
      <div className='second-block__text'>База компонентов для создания интерфейсов любой сложности</div>
      <CardWrapper className="second-block_cards">
        { elements.map((el, index) => {
            return(
            <Card key={index} title={el.title} text={el.text} picture={el.picture} cardType={CardType.FIRST}/>
            )
          })}
      </CardWrapper>
      <div className="second-block__button ">  
        <Button type={type} Type={ButtonType.SECONDARY} text={text}/> 
      </div>
      <div className='second-block__container'> 
            <img className='second-block__picture' src={Icon}/> 
            <div className="second-block__text__block">
                <div className='second-block__container__title'>Зачем вам дизайн система?</div>
                <div className='second-block__container__text'>Кнопки, иконки, списки, таблицы — основные 
                    {"\n"}элементы, из которых собирается интерфейс</div>
                <List1/>
            </div>
        </div>
    </div>

  );
  }
  
  export default SecondBlock;