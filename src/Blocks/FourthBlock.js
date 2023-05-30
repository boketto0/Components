import './FourthBlock.css'
import List3 from '../components/lists/listRow3/List3';
import {Card, CardType, CardWrapper} from '../components/cards/Card'
import Icon1 from '../images/card3/Card header-4.svg'
import Icon2 from '../images/card3/Card header-4.svg'
import Icon3 from '../images/card3/0 9.svg'

function FourthBlock() {

    const elements = [
        {
          picture: <img src={Icon1}/>,
          title: 'Версия 2.0',
          text: "14 мая 2022"
        },
        {
          picture: <img src={Icon2}/>,
          title: 'Версия 2.0',
          text: "14 мая 2022"       
        },
        {
          picture: <img src={Icon3}/>,
          title: 'Версия 1.0',
          subtitle: "Следующее обновление •  нет даты",
          text: "Доработка и улучшение документа"
        }
    ]        

    return(
        <div className='fourth-block'>
            <div className='fourth-block__color-container'>
            <div className='fourth-block__title'>Анонсы и релизы</div>
            <div className='fourth-block__text'>Будьте вкурсе всех последних
                {"\n"}изменений и доработок в нашей дизайн системе
            <CardWrapper className="fourth-block__cards">
                { elements.map((el) => {
                    return(
                    <Card picture={el.picture} title={el.title} text={el.text} subtitle={el.subtitle} cardType={CardType.THIRD}/>
                    )
                })}
            </CardWrapper>
            </div>
            </div>
                <div className='fourth-block__container'>
                <div className='fourth-block__container__title'>Часто задаваемые вопросы</div>
                <div className='fourth-block__container__subtitle'>Мы ответили на самые популярные 
                    {"\n"}вопросы, чтобы вы могли понять и решить 
                    {"\n"}свою возникшую проблему
            </div>
            <List3/>
            </div>
        </div>
    )
}

export default FourthBlock;