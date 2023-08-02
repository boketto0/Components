import { Routes, Route, useLocation } from 'react-router-dom';
import { ComponenetsOverview } from '../Content/ComponentsOverwiew/ComponentsOverview'
import { SwitchStory } from '../../../components/switch/SwitchStoryContainer/SwitchStory';
import { ButtonStory } from '../../../components/button/ButtonStoryContainer/ButtonStory';
import { CheckboxStory } from '../../../components/checkbox/CheckboxStoryContainer/ChecboxStory';
import React from 'react';

const Content = () => {
  const location = useLocation()
  
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