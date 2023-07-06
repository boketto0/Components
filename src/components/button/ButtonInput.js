import './ButtonInput.css'
import {useState} from "react";

export default function ButtonInput() {

    const [isFocus, setFocus] = useState(false);

    function handleIsFocused() {
        setFocus(true);
    }

    function handleIsBlur() {
        setFocus(false);
    }

    function handleAlert() {
        alert("Вы не заполнили поле!");
    }


    return(
        <div className="block2">
            <div className='btn2' id='btn' onFocus={handleIsFocused} onBlur={handleIsBlur}>
                <input type={"text"} name="key" placeholder="Заполните поле"/>
                {!isFocus ? <input className='input' type={"button"}/> : handleAlert()}
            </div>
        </div>
    )
}

// При фокусе на поле ввода (например, инпут) 
// показывать браузерное предупреждение с каким-ниюудь текстом

// Задача 1
