import React from 'react';
import { useSelector } from 'react-redux';
import './index.css';

const SlideIndicator  = ({position}) => {
    const { currentIndex } = useSelector(state => state.player);
    return(
        <div className={'indicator ' + position}>
            {currentIndex + 1}
        </div>
    )
}

export default SlideIndicator;