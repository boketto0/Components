import { NavLink } from 'react-router-dom';
import './SliderbarMenu.css';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/** TODO(Вынести SliderbarMenu в папку components) */
const SliderbarMenu = ({ menuItems }) => {
  const location = useLocation();

  useEffect(() => {
    console.log('pathname', location.pathname);
  }, [location.pathname]);

  return (
    <div>
      <div className="sidebar">
        <ul>
          {menuItems.map((item) => (
            <li key={item.to}>
              <NavLink to={item.to} activeClassName="active-link">
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SliderbarMenu;

/* eslint react/prop-types: 0 */