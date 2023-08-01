import { NavLink } from 'react-router-dom';
import './SliderbarMenu.css';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SliderbarMenu = () => {

  const location = useLocation();

  useEffect(() => {
    console.log('pathname', location.pathname)
  }, [location.pathname])
  
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