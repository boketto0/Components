import './CardWrapper.css'

export function CardWrapper(props) {
    
    const classes = `card ${props.className}`; 
    
    return <div className={classes}>{props.children}</div>;
}