import { NavLink } from 'react-router-dom';
import './SliderbarMenu.css';

const SliderbarMenu = () => {
  return (
    <div>
      <div className="sidebar">
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="active-link">
              Componenets Overview
            </NavLink>
          </li>
          <li>
            <NavLink to="/button" activeClassName="active-link">
              Button
            </NavLink>
          </li>
          <li>
            <NavLink to="/checkbox" activeClassName="active-link">
              Checkbox
            </NavLink>
          </li>
          <li>
            <NavLink to="/switch" activeClassName="active-link">
              Switch
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SliderbarMenu;