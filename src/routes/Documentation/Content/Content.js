import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { ComponenetsOverview } from './ComponentsOverwiew/ComponentsOverview';
import { SwitchStory } from '../../../components/switch/SwitchStoryContainer/SwitchStory';
import { ButtonStory } from '../../../components/button/ButtonStoryContainer/ButtonStory';
import { CheckboxStory } from '../../../components/checkbox/CheckboxStoryContainer/ChecboxStory';
import { CardsDisplay } from '../../../components/display/CardsDisplay';
import { buttonElements } from '../../../components/button/ButtonStoryContainer/ButtonStory';
import { switchElements } from '../../../components/switch/SwitchStoryContainer/SwitchStory';
import { checkboxElements } from '../../../components/checkbox/CheckboxStoryContainer/ChecboxStory';

/** TODO(Вынести COntent в папку components)
 * <Content>
 *  <div> ... дочерние компоненты 
 * </Content>
 */
const Content = () => {
  const location = useLocation();

  const storiesMap = {
    'button': {...buttonElements.reduce((acc, el) => {
        acc[el.id] = el;

        return acc;
      }, {}),
      cardType: "third"
    },
    'checkbox': {...checkboxElements.reduce((acc, el) => {
      acc[el.id] = el;

      return acc;
    }, {}),
    cardType: "first"
  },
    'switch': {...switchElements.reduce((acc, el) => {
      acc[el.id] = el;

      return acc;
    }, {}),
    cardType: "first"
  },
  };

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

export default Content;