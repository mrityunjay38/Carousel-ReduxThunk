import React, { useEffect, useState } from "react";
import { ReactComponent as Play } from "../../assets/img/play.svg";
import { ReactComponent as Pause } from "../../assets/img/pause.svg";
import { ReactComponent as Next } from "../../assets/img/forward.svg";
import { ReactComponent as Prev } from "../../assets/img/backward.svg";
import { useDispatch, useSelector } from "react-redux";
import { spinner, nextPrev } from '../../redux/actions/player';
import "./index.css";

const Controls = () => {
  const dispatch = useDispatch();
  const { currentIndex } = useSelector(state => state.player);
  const slides = useSelector(state => state.slides);
  const [isPlaying, setIsPlaying] = useState(true);
  const [index, setIndex] = useState(currentIndex);

  const play = () => setIsPlaying(true);
  const pause = () => setIsPlaying(false);

  const next = () => {
    if(index === 0){
      dispatch(spinner({loading: false}));
      dispatch(nextPrev({currentIndex: 0}));
    }
    else if(index > slides.length - 1){
      dispatch(nextPrev({currentIndex: 0}));
      return setIndex(index => 1);
    }
    else {
      dispatch(nextPrev({currentIndex: index}));
    }
    setIndex(index => index + 1);
  }

  const prev = () => {
    pause();
    if(index - 2 < 0){
      dispatch(nextPrev({currentIndex: slides.length - 1}));
      setIndex(index => slides.length);
    }
    else {
      dispatch(nextPrev({currentIndex: index - 2}));
      setIndex(index => index - 1);
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if(isPlaying){
        next(); 
      }
    }, 3000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[index, slides, isPlaying]);

  return (
    <div className="controls">
      <div>
        <Prev onClick={prev}/>
      </div>
      <div>
        {!isPlaying ? (
          <Play onClick={play} />
        ) : (
          <Pause onClick={pause} />
        )}
      </div>
      <div>
        <Next onClick={next} />
      </div>
    </div>
  );
};

export default Controls;
