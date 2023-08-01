import './Header.css';
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Button, ButtonSize, ButtonType } from '../components/button';
import { RegistrationModal } from '../components/registrationModal/RegistrationModal';

const Header = (props) => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleGoToMain = () => {
    navigate('/');
  };

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div className='header-block'>
      <div className='a header-text'>
        <div className='header-text1 header-text__design' onClick={handleGoToMain}>
          Main
        </div>
        <Button 
            type={ButtonType.PRIMARY} 
            text={"Вход/Регистрация"} 
            round 
            onClick={handleOpenModal}
            colored={"pressed"}
        />
        <RegistrationModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal}/>
      </div>
    </div>
  );
};

export default Header;