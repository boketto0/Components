import './SliderbarMenu.css';
import Home from '../Home';
import { CheckboxStory } from './checkbox/ChecboxStory';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ComponenetsOverview } from './ComponentsOverview';

const SliderbarMenu = () => {
  return (
    <div className='sidebar'>
      <Router>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/button">Button</a>
          </li>
          <li>
            <a href="/checkbox">Checkbox</a>
          </li>
          <li>
            <a href="/switch">Switch</a>
          </li>
        </ul>
        <Routes>
          <Route className='wrapper' path="/" element={<ComponenetsOverview/>} />
          <Route className='wrapper' path="/checkbox" element={<CheckboxStory />} />
        </Routes>
      </Router>
    </div>
  );
};

export default SliderbarMenu;