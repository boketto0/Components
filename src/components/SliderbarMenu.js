import './SliderbarMenu.css';
import { CheckboxStory } from './checkbox/ChecboxStory';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ComponenetsOverview } from './ComponentsOverview';
import { SwitchStory } from './switch/SwitchStory';
import { ButtonStory } from './button/ButtonStory';

const SliderbarMenu = () => {
  return (
    <div>
      <Router>
          <div className='sidebar'>
            <ul>
                <li>
                    <a href="/">Componenets Overview</a>
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
          </div>

        <div className="component-wrapper">
            <Routes>
            <Route className='wrapper' path="/" element={<ComponenetsOverview/>} />
            <Route className='wrapper' path="/checkbox" element={<CheckboxStory />} />
            <Route path="/switch" element={<SwitchStory/>}/>
            <Route path="/button" element={<ButtonStory/>}/>
            </Routes>
        </div>
      </Router>
    </div>
  );
};

export default SliderbarMenu;