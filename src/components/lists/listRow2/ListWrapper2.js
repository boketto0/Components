import "./ListWrapper2.css";

function ListWrapper2(props) {
    const classes = "list__wrapper2 "+ props.className; 
    
    return <div className={classes}>{props.children}</div>
}

export default ListWrapper2;