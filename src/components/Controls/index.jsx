import React, { useState } from "react";
import { ReactComponent as Play } from "../../assets/img/play.svg";
import { ReactComponent as Pause } from "../../assets/img/pause.svg";
import { ReactComponent as Next } from "../../assets/img/forward.svg";
import { ReactComponent as Prev } from "../../assets/img/backward.svg";
import "./index.css";

const Controls = () => {
    const [isPlaying, setIsPlaying] = useState(true);

    const play = () => setIsPlaying(true);
    const pause = () => setIsPlaying(false);

  return (
    <div className="controls">
      <div>
        <Prev />
      </div>
      <div>
        {!isPlaying ? (
          <Play onClick={play} />
        ) : (
          <Pause onClick={pause} />
        )}
      </div>
      <div>
        <Next />
      </div>
    </div>
  );
};

export default Controls;
