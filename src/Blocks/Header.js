import './Header.css';
import React, { useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { Button, ButtonSize, ButtonType } from '../components/button';
import { RegistrationModal } from '../components/registrationModal/RegistrationModal';

const Header = ( ) => {
  const navigate1 = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { componentName, id } = useParams();
  const navigate2 = useNavigate();

  console.log(`Component Name - ${componentName}`);
  console.log(`Id - ${id}`);

  const handleGoToMain = () => {
    navigate1('/');
  };

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  const handleBackClick = () => {
    navigate2(`/${componentName}`);
  };


  return (
    <div className='header-block'>
        <Button
          type={ButtonType.LINK}
          text={"Main"}
          onClick={handleGoToMain}
        />
        <div className='button-design'>
          <Button 
              type={ButtonType.PRIMARY} 
              text={"Вход/Регистрация"} 
              round 
              onClick={handleOpenModal}
              colored={"pressed"}
              size={ButtonSize.MEDIUM}
          />
        </div>
        <RegistrationModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal}/>
    </div>
  );
};

export default Header;

/* eslint react/prop-types: 0 */