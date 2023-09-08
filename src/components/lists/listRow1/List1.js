import './List1.css';
import ListWrapper1 from './ListWrapper1';

function List1(props) {
  const listItems = [
    {
      // icon: <img src={Icon1}/>,
      text: 'Запускать продукты быстрее и дешевле',
    },
    {
      // icon: <img src={Icon2}/>,
      text: 'Просто проверять гипотезы',
    },
    {
      // icon: <img src={Icon3}/>,
      text: 'Только лучшие практики',
    },
    {
      // icon: <img src={Icon4}/>,
      text: 'Довольные пользователи',
    },
  ];

  return (
    <ListWrapper1 className="list1-block">

      { listItems.map((li) => (
        <div className="list1-item">
          <div className="list1-item__picture">
            <div className="list1-item__icon">{li.icon}</div>
          </div>
          <div className="list1-item__text">{li.text}</div>
        </div>
      ))}
    </ListWrapper1>
  );
}

export default List1;
