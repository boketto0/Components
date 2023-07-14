import './Home.css';
import { CardWrapper } from './components/cards/CardWrapper';
import { Card, CardType } from './components/cards/Card';
import SliderbarMenu from './components/SliderbarMenu';

const Home = () => {
  const componentsStory = [
    {
      title: 'Button'
    },
    {
      title: 'Switch'
    },
    {
      title: 'Checkbox'
    }
  ];

  return (
    <div className="home">
      <div className="home-wrapper">
        <SliderbarMenu />
        <div className="home-list">
          <div className="par-1">Components Overview</div>
          <div className="par-2">Components</div>
          <CardWrapper>
            {componentsStory.map((el) => {
              return (
                <div>
                  <Card cardType={CardType.SECOND} title={el.title} />
                </div>
              );
            })}
          </CardWrapper>
        </div>
      </div>
    </div>
  );
};

export default Home;