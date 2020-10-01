import React, { useState } from "react";
import { ReactComponent as Play } from "../../assets/img/play.svg";
import { ReactComponent as Pause } from "../../assets/img/pause.svg";
import { ReactComponent as Next } from "../../assets/img/forward.svg";
import { ReactComponent as Prev } from "../../assets/img/backward.svg";
import "./index.css";

const Controls = () => {
    const [playing, setPlaying] = useState(false);
  return (
    <div className="controls">
      <div>
        <Prev />
      </div>
      <div>
        {!playing ? (
          <Play />
        ) : (
          <Pause />
        )}
      </div>
      <div>
        <Next />
      </div>
    </div>
  );
};

export default Controls;
