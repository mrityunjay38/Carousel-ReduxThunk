import React from 'react';
import Header from '../Header';
import Slide from '../Slide';
import Controls from '../Controls';
import './index.css';

const Slider = () => {

    return (
        <div className="carousel">
            <Header />
            <Slide />
            <Controls />
        </div>
    )
}

export default Slider;