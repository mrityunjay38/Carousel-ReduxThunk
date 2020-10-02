import React from "react";
import { useSelector } from "react-redux";
import { ReactComponent as Spinner } from "../../assets/img/spinner.svg";
import Indicator from '../Indicator';
import "./index.css";

const Slide = () => {
  const slides = useSelector((state) => state.slides);
  const { loading } = useSelector(state => state.player);

  return (
    <div className="slide">
      {
        !loading ? slides.map((slide) => (
          <img
            className={slide.visibility ? "show" : undefined}
            src={slide.download_url}
            alt={slide.author}
            key={slide.id}
          />
        )) : <Spinner className="spinner" />
      }

      {
        !loading ? <Indicator position={'bottom-right'} /> : null
      }
    </div>
  );
};

export default Slide;
