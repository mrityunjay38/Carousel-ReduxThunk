import React from 'react';
import Header from '../Header';
import Slide from '../Slide';
import Player from '../Player';
import ProgressBar from '../ProgressBar';
import './index.css';

const Slider = () => {
    return (
        <div className="carousel">
            <Header />
            <Slide />
            <ProgressBar />
            <Player />
        </div>
    )
}

export default Slider;