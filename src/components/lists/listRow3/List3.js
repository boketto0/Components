import './List3.css';
import ListWrapper3 from './ListWrapper3';
// import Item from '../images/list3_images/◼️ Background.png'

function List3(props) {
  const listItems = [
    {
      // picture: <img src={Item}/>,
      text: 'Что такое дизайн-система?',
    },
    {
      // picture: <img src={Item}/>,
      text: 'Для каких задач подходит?',
    },
    {
      // picture: <img src={Item}/>,
      text: 'Как использовать дизайн-систему?',
    },
    {
      // picture: <img src={Item}/>,
      text: 'Что такое компонент?',
    },
    {
      // picture: <img src={Item}/>,
      text: 'Зачем нужна документация?',
    },
  ];

  return (
    <ListWrapper3 className="list2-block">

      { listItems.map((li) => (
        <div className="list3-item">
          <div className="list3-item__text">{li.text}</div>
          <div className="list3-item__picture">{li.picture}</div>
        </div>
      ))}
    </ListWrapper3>
  );
}

export default List3;
