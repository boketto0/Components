import './Header.css';
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Header = (props) => {
  const navigate = useNavigate();

  const handleGoToMain = () => {
    navigate('/');
  };

  return (
    <div className='header-block'>
      <div className='a header-text'>
        <button className='header-text1 header-text__design' onClick={handleGoToMain}>
          Main
        </button>
      </div>
    </div>
  );
};

export default Header;