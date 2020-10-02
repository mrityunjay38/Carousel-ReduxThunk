import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './index.css';

const ProgressBar  = () => {
    const slides = useSelector(state => state.slides);
    const {currentIndex, loading} = useSelector(state => state.player);
    const [bar, setBar] = useState(0);

    useEffect(() => {
        if(!loading)
        slides.length ? setBar((currentIndex + 1)/slides.length * 100) : setBar(0);
    },[bar, currentIndex, slides, loading])

    return(
        <div className="progress-bar">
            <div className="bar" style={{width: (currentIndex + 1)/slides.length * 100 + '%'}}>{Math.floor(bar) + '%'}</div>
        </div>
    )
}

export default ProgressBar;