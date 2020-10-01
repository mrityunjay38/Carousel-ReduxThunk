import React, { useEffect } from 'react';
import Header from '../Header';
import Slide from '../Slide';
import Player from '../Player';
import './index.css';

const Slider = () => {
    return (
        <div className="carousel">
            <Header />
            <Slide />
            <Player />
        </div>
    )
}

export default Slider;