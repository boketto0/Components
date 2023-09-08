import './Home.css';
import SliderbarMenu from '../Documentation/SliderbarMenu/SliderbarMenu';
import { BrowserRouter as Router } from 'react-router-dom';
import Content from './Content/Content';
import React from 'react';

function Home() {
  return (
    <div className="home">
      <Router>
        <SliderbarMenu />
        <Content />
      </Router>
    </div>
  );
}

export default Home;
