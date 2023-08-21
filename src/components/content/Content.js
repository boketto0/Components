import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { ComponenetsOverview } from '../../routes/Documentation/ComponentsOverwiew/ComponentsOverview';
import { SwitchStory } from '../switch/SwitchStoryContainer/SwitchStory';
import { ButtonStory } from '../button/ButtonStoryContainer/ButtonStory';
import { CheckboxStory } from '../checkbox/CheckboxStoryContainer/ChecboxStory';
import { CardsDisplay } from '../display/CardsDisplay';
import { buttonElements } from '../button/ButtonStoryContainer/ButtonStory';
import { switchElements } from '../switch/SwitchStoryContainer/SwitchStory';
import { checkboxElements } from '../checkbox/CheckboxStoryContainer/ChecboxStory';

/** TODO(Вынести COntent в папку components)
 * <Content>
 *  <div> ... дочерние компоненты 
 * </Content>
 */
export const Content = ({ storiesMap, children }) => {
  const location = useLocation();

  return (
    <div className="component-wrapper">
      <Routes>
        <Route path="/" element={<ComponenetsOverview />} />
        {children}
        <Route
          path="/:componentName/:id"
          element={
            <CardsDisplay
              componentName={location.pathname.split('/')[1]}
              id={location.pathname.split('/')[2]}
              elements={storiesMap}
            />
          }
        />
      </Routes>
    </div>
  );
};

/* eslint react/prop-types: 0 */