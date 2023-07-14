import './SliderbarMenu.css';
import { CheckboxStory } from './checkbox/ChecboxStory';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ComponenetsOverview } from './ComponentsOverview';
import { SwitchStory } from './switch/SwitchStory';

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
          <Route path="/switch" element={<SwitchStory/>}/>
        </Routes>
      </Router>
    </div>
  );
};

export default SliderbarMenu;