import "./ListWrapper1.css";

function ListWrapper1(props) {
    const classes = "list__wrapper1 "+ props.className; 
    
    return <div className={classes}>{props.children}</div>
}

export default ListWrapper1;