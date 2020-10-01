import React, {useEffect} from 'react';
import Slider from './components/Slider';
import {fetchSlides} from './redux/actions/slides';
import {useDispatch, useSelector} from 'react-redux';
import './assets/css/App.css';

const App = () => {
  const dispatch = useDispatch();
  const slides = useSelector(state => state.slides);

  useEffect(() => {
    dispatch(fetchSlides());
  },[dispatch])

  console.log(slides);
  
  return(
    <div className="app">
      <Slider />
    </div>
  )  
}

export default App;
