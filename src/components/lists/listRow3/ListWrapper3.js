import "./ListWrapper3.css";

function ListWrapper3(props) {
    const classes = "list__wrapper3 "+ props.className; 
    
    return <div className={classes}>{props.children}</div>
}

export default ListWrapper3;