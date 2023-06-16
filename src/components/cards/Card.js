import React, { useState } from 'react';
import './Card.css';

export const CardType = {
  FIRST: "first",
  SECOND: "second",
  THIRD: "third"
};

export const Card = (props) => {

    const defaultCardType = CardType.FIRST

    return(
        <div>
            <div className={`card-${props.cardType || defaultCardType}`}>
                {props.cardType === CardType.FIRST && (
                    <div>
                        <div>{props.cell}</div>
                        <div className="card-title">{props.title}</div>
                        <div className="card-text">{props.text}</div>
                    </div>
                )}
            </div>
        </div>
    )
}