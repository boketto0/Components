import './ButtonTime.css'
import {useState} from "react";
import React from 'react';

export default function ButtonTime() {

    const [time, setTime] = useState(0);
    const [records, setRecords] = useState([]);
  
    let timerId;
  
    function handleMouseDown() {
      timerId = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
  
    function handleMouseUp() {
      clearInterval(timerId);
      setRecords((prevRecords) => [...prevRecords, time]);
      setTime(0);
    }
  
    return (
      <div className="block1">
        <div className="btn" onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
          {!time ? "Кнопка" : `Загрузка ${time} сек`}
        </div>
        <table className='table'>
          <thead>
            <tr>
              <th>Время загрузки</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record, index) => (
              <tr key={index}>
                <td>{record} сек</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
}

// Задача 2

// При нажатии на кнопку показывать время в секундах, 
// сколько кнопка нажата, при отпускании кнопки 
// добавлять время в список с результатами. 
// (Есть таблица с результатами, зажимаю кнопку 
// начинает идти секундомер, при отпускании кнопки, 
// результат фиксируется и добавляется в таблицу)