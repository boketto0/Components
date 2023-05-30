import './Card.css'

export const CardType = {
  FIRST: "first", 
  SECOND: "second", 
  THIRD: "third"
};

// TODO(Bekmina): стили CardWrapper подгонять 
// к типом карточек(как в компоненте Button)

export function CardWrapper(props) {
    
  const classes = "card "+ props.className; 
  
  return <div className={classes}>{props.children}</div>
}

export const Card = (props) => {

  // прост card, отсылка в типе, map, elements снаружи
  // 1 компонент карточек

    return(
        <div>
            <div className={`card-${props.cardType}`}>
            {props.cardType === CardType.FIRST && (
                <div>
                    <div className='card-circle'></div>
                    <div className='card-content'>
                        <div>{props.picture}</div>
                        <div className="card-title">{props.title}</div>
                        <div className="card-text">{props.text}</div>
                    </div>
                </div>
            )}
            {props.cardType === CardType.SECOND && (
                <div>
                    <div className='card-content'>
                        <div className='card-picture'>{props.picture}</div>
                        <div className="card2-title">{props.title}</div>
                    </div>
                </div>
            )}
            {props.cardType === CardType.THIRD && (
                <div>
                    <div className='card-content'>
                        <div className='card2-picture'>{props.picture}</div>
                        <div className='card3-textblock'>
                            <div className="card-title">{props.title}</div>
                            <div className="card3-subtitle">{props.subtitle}</div>
                            <div className="card3-text">{props.text}</div>
                        </div>
                    </div>
                </div>
            )}
            </div>
        </div>
    )
}
