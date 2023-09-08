import './FirstBlock.css';
import Icon1 from '../images/Main_panel 3 (1).svg';
import Icon2 from '../images/ДС изо 2.svg';
import Icon3 from '../images/Main_panel 5.svg';

function FirstBlock() {
  return (
    <div>
      <div className="first-block ">
        <div className="first-block__textblock">
          <div className="first-block__title">Дизайн-система</div>
          <div className="first-block__subtitle">Sber tech</div>
          <div className="first-block__text">Библиотека компонентов и документация</div>
        </div>
        <div className="first-block__picture__block">
          <img className="first-block__picture1" src={Icon1} />
          <img className="first-block__picture2" src={Icon2} />
          <img className="first-block__picture3" src={Icon3} />
        </div>
      </div>
    </div>
  );
}

export default FirstBlock;

// footer, картинки, Button с props текста и иконки, шрифт
