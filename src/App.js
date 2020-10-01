import React, {useEffect} from 'react';
import {fetchSlides} from './redux/actions/slides';
import {useDispatch, useSelector} from 'react-redux';
import './assets/css/App.css';

const App = () => {
  const dispatch = useDispatch();
  const slides = useSelector(state => state.slides);

  useEffect(() => {
    dispatch(fetchSlides());
  },[])

  console.log(slides);
  
  return(
    <div className="app">
    </div>
  )  
}

export default App;
