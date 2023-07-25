import './Home.css';
import SliderbarMenu from './SliderbarMenu/SliderbarMenu';
import { BrowserRouter as Router } from 'react-router-dom';
import Content from './Content/Content';

const Home = () => {

  return (
    <div className="home">
        <Router>
            <SliderbarMenu/>
            <Content/>
        </Router>
    </div>
  );
};

export default Home;