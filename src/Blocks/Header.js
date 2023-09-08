import './Header.css';
import Icon from '../images/Logo.svg';
import { Button, ButtonType } from '../components/button/Button';

function Header(props) {
  const icon = '';
  const text = 'Задать вопрос';
  const type = ButtonType.PRIMARY;

  return (
    <div className="header-block">
      <img className="header-icon" src={Icon} />
      <div className="a header-text">
        <div className="header-text1 header-text__design">
          <a href="#">Дизайн</a>
        </div>
        <div className="header-text2 header-text__design">
          <a href="#">Разработка</a>
        </div>
      </div>
      <Button type={type} text={text} Type={ButtonType.PRIMARY} icon={icon} />
    </div>
  );
}

export default Header;
