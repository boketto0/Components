import './Home.css';
import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import SliderbarMenu from '../Documentation/SliderbarMenu/SliderbarMenu';
import Content from '../Documentation/Content/Content';

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
