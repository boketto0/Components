import './Header.css';
import React, { useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { Button, ButtonSize, ButtonType } from '../components/button';
import { RegistrationModal } from '../components/registrationModal/RegistrationModal';

const Header = (props) => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { id } = useParams
  const location = useLocation

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
        {id && <span>История: {id}</span>}
        <div className='header-text1 header-text__design' onClick={handleGoToMain}>
          Main
        </div>
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