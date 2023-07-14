import './Home.css';
import { CardWrapper } from './components/cards/CardWrapper';
import { Card, CardType } from './components/cards/Card';
import SliderbarMenu from './components/SliderbarMenu';

const Home = () => {

  return (
    <div className="home">
        <SliderbarMenu />
    </div>
  );
};

export default Home;