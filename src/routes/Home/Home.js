import './Home.css';
import SliderbarMenu from "../Documentation/SliderbarMenu/SliderbarMenu"
import { BrowserRouter as Router } from 'react-router-dom';
import Content from "../Documentation/Content/Content"
import React from 'react';
import Header from '../../Blocks/Header';
import { useLocation } from 'react-router-dom';

const Home = () => {

  return (
    <div className="home">
        <Router>
            <Header />
            <SliderbarMenu />
            <Content />
        </Router>
    </div>
  );
};

export default Home;