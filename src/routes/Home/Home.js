import './Home.css';
import SliderbarMenu from "../Documentation/SliderbarMenu/SliderbarMenu"
import { BrowserRouter as Router } from 'react-router-dom';
import Content from "../Documentation/Content/Content"
import React from 'react';

const Home = () => {

  return (
    <div className="home">
        <Router>
            <SliderbarMenu/>
            <Content/>
        </Router>
    </div>
  );
};

export default Home;