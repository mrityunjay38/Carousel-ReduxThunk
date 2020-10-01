import React, {useEffect} from 'react';
import Slider from './components/Slider';
import {fetchSlides} from './redux/actions/slides';
import {useDispatch} from 'react-redux';
import './assets/css/App.css';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSlides());
  },[dispatch])

  return(
    <div className="app">
      <Slider />
    </div>
  )  
}

export default App;
