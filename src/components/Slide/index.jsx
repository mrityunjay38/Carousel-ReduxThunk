import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './index.css';

const Slide = () => {
    const slides = useSelector(state => state.slides);

    useEffect(() => {
        console.log('Slide');
    },[slides]);

    return(
        <div className="slide">
            {
                slides.map(slide => <img className={slide.visibility ? 'show' : 'hide'} src={slide.download_url} alt={slide.author} key={slide.id} />)
            }
        </div>
    )
}

export default Slide;