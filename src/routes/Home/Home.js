import './Home.css';
import SliderbarMenu from "../Documentation/SliderbarMenu/SliderbarMenu";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import React from 'react';
import Header from '../../Blocks/Header';
import { Content } from '../../components/content/Content'
import { CheckboxStory } from '../../components/checkbox/CheckboxStoryContainer/ChecboxStory';
import { SwitchStory } from '../../components/switch/SwitchStoryContainer/SwitchStory';
import { ButtonStory } from '../../components/button/ButtonStoryContainer/ButtonStory';
import { buttonElements } from '../../components/button/ButtonStoryContainer/ButtonStory';
import { checkboxElements } from '../../components/checkbox/CheckboxStoryContainer/ChecboxStory'
import { switchElements } from '../../components/switch/SwitchStoryContainer/SwitchStory';

export const Home = () => {

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
    cardType: "first"},
  };

  const menuItems = [
    { to: "/", label: "Componenets Overview" },
    { to: "/button", label: "Button" },
    { to: "/checkbox", label: "Checkbox" },
    { to: "/switch", label: "Switch" },
  ];

  return (
    <div className="home">
        <Router>
            <Header />
            <SliderbarMenu menuItems={menuItems}/>
            <Content storiesMap={storiesMap}>
              <Route path="/checkbox" element={<CheckboxStory />} />
              <Route path="/switch" element={<SwitchStory />} />
              <Route path="/button" element={<ButtonStory />} />
            </Content>
        </Router>
    </div>
  );
};
