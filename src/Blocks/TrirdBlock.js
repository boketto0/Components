import './TrirdBlock.css';
import { Button, ButtonType } from '../components/button/Button';
import List2 from '../components/lists/listRow2/List2';
import { Card, CardType, CardWrapper } from '../components/cards/Card';
import Icon from '../images/ДС2 1.svg';
import Icon1 from '../images/card2/Card header.svg';
import Icon2 from '../images/card2/Card header-2.svg';
import Icon3 from '../images/card2/Card header-3.svg';

function ThirdBlock(props) {
  const text = 'Все компоненты';
  const type = ButtonType.LINE;

  const elements = [
    {
      picture: <img src={Icon1} />,
      title: 'Справочники',
    },
    {
      picture: <img src={Icon2} />,
      title: 'Интерактивная документация',
    },
    {
      picture: <img src={Icon3} />,
      title: 'Панель центра уведомлений',
    },
  ];

  return (
    <div className="third-block">
      <div className="third-block__textblock">
        <div className="third-block__title">Выполненные проекты</div>
        <div className="third-block__text">
          Проекты собранные на основе нашей дизайн
          {'\n'}
          {' '}
          системы для решения любых поставленных задач
        </div>
      </div>
      <CardWrapper className="second-block_cards">
        { elements.map((el) => (
          <Card title={el.title} text={el.text} picture={el.picture} cardType={CardType.SECOND} />
        ))}
      </CardWrapper>
      <div className="button3-position">
        <Button text={text} type={type} Type={ButtonType.LINE} />
      </div>
      <div className="third-block__container">
        <img src={Icon} className="third-block__picture" />
        <div>
          <div className="third-block__container__title">
            Что такое дизайн‑система
            {'\n'}
            и зачем она нужна?
          </div>
          <div className="text__block-text">
            Дизайн-система — это набор компонентов, правил, предписаний
            {'\n'}
            и инструментов для повышения качества и скорости разработки
            {'\n'}
            продуктов, а также эффективной поддержки существующих
          </div>
          <List2 />
        </div>
      </div>
    </div>
  );
}

export default ThirdBlock;
