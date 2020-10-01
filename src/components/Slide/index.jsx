import React from "react";
import { useSelector } from "react-redux";
import "./index.css";
import { ReactComponent as Spinner } from "../../assets/img/spinner.svg";

const Slide = () => {
  const slides = useSelector((state) => state.slides);

  return (
    <div className="slide">
      {/* {loading ? <Spinner className="spinner" /> : null} */}
      {slides.map((slide) => (
        <img
          className={slide.visibility ? "show" : undefined}
          src={slide.download_url}
          alt={slide.author}
          key={slide.id}
        />
      ))}
    </div>
  );
};

export default Slide;
