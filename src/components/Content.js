import { Routes, Route } from 'react-router-dom';
import { ComponenetsOverview } from './ComponentsOverview';
import { SwitchStory } from './switch/SwitchStory';
import { ButtonStory } from './button/ButtonStory';
import { CheckboxStory } from './checkbox/ChecboxStory';

const Content = () => {
  return (
    <div className="component-wrapper">
      <Routes>
        <Route path="/" element={<ComponenetsOverview />} />
        <Route path="/checkbox" element={<CheckboxStory />} />
        <Route path="/switch" element={<SwitchStory />} />
        <Route path="/button" element={<ButtonStory />} />
      </Routes>
    </div>
  );
};

export default Content;