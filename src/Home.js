import './Home.css';
import SliderbarMenu from './components/SliderbarMenu';
import { BrowserRouter as Router } from 'react-router-dom';
import Content from './components/Content';

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