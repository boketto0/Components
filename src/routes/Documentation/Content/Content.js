import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { ComponenetsOverview } from './ComponentsOverwiew/ComponentsOverview';
import { SwitchStory } from '../../../components/switch/SwitchStoryContainer/SwitchStory';
import { ButtonStory } from '../../../components/button/ButtonStoryContainer/ButtonStory';
import { CheckboxStory } from '../../../components/checkbox/CheckboxStoryContainer/ChecboxStory';
import { CardsDisplay } from '../../../components/display/CardsDisplay';
import { buttonElements } from '../../../components/button/ButtonStoryContainer/ButtonStory';

const Content = () => {
  const location = useLocation();

  return (
    <div className="component-wrapper">
      <Routes>
        <Route path="/" element={<ComponenetsOverview />} />
        <Route path="/checkbox" element={<CheckboxStory />} />
        <Route path="/switch" element={<SwitchStory />} />
        <Route path="/button" element={<ButtonStory />} />
        <Route
          path="/:componentName/:id"
          element={
            <CardsDisplay
              elements={[
                ...buttonElements,
                // ...SwitchStoryElements,
                // ...CheckboxStoryElements,
              ]}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default Content;