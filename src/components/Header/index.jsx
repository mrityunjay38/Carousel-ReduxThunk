import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './index.css';

const Header  = () => {
    const { author } = useSelector(state => state.slide);

    useEffect(() => {},[author]);

    return(
        <div className="header">
            {author}
        </div>
    )
}

export default Header;