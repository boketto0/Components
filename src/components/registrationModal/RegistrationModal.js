import './RegistrationModal.css'
import React, { useState } from 'react';
import { PropTypes } from 'prop-types'

export const RegistrationModal = (props) => {
    const { isOpen, onClose } = props;
    const [phoneNumber, setPhoneNumber] = useState('');
    const [fullName, setFullName] = useState('');

    const handlePhoneNumberChange = (event) => {
        setPhoneNumber(event.target.value);
    };

    const handleFullNameChange = (event) => {
        setFullName(event.target.value);
    };

    const handleSubmit = () => {
        console.log('Номер телефона:', phoneNumber);
        console.log('Имя и фамилия:', fullName);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="modal">
        <div className="modal-content">
            <h2>Регистрация</h2>
            <input
            type="text"
            placeholder="Номер телефона"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            />
            <input
            type="text"
            placeholder="Имя и фамилия"
            value={fullName}
            onChange={handleFullNameChange}
            />
            <button onClick={handleSubmit}>Зарегистрироваться</button>
            <button onClick={onClose}>Закрыть</button>
        </div>
        </div>
    );
};


RegistrationModal.propTypes = {
    isOpen: PropTypes.bool,
    onClose: PropTypes.func.isRequered
}