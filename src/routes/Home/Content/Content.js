import { Routes, Route } from 'react-router-dom';
import { ComponenetsOverview } from './ComponentsOverwiew/ComponentsOverview';
import { SwitchStory } from '../../../components/switch/SwitchStoryContainer/SwitchStory';
import { ButtonStory } from '../../../components/button/ButtonStory';
import { CheckboxStory } from '../../../components/checkbox/CheckboxStoryContainer/ChecboxStory';

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