import React, { useState, useEffect } from 'react';
import Slide from './Slide';
import '../css/Slider.css';

import Inicio1 from '../assets/inicio/inicio1.jpg';
import Inicio2 from '../assets/inicio/inicio2.jpg';
import Inicio3 from '../assets/inicio/inicio3.jpg';
import Inicio4 from '../assets/inicio/inicio4.jpg';

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    let interval = setInterval(() => {
      plusslide(1);
    }, 7000);

    return () => clearInterval(interval);
  });

  const plusslide = (index) => {
    let current = slideIndex + index;

    let slides = document.querySelector('.op-slider .op-slides');
    let slide = document.querySelectorAll('.op-slider .op-slide');
    let dots = document.querySelectorAll('.op-slider .op-dots span');

    if (current > slide.length) {
      setSlideIndex(1);
      current = 1;
    } else if (current < 1) {
      setSlideIndex(slide.length);
      current = slide.length;
    } else {
      setSlideIndex(current);
    }

    slides.style.left = `-${current - 1}00%`;

    dots.forEach((item, index) => {
      item.classList.remove('dot-active');
      if (index === current - 1) {
        item.classList.add('dot-active');
      }
    });
  };
  const currentSlider = (index) => {
    let slides = document.querySelector('.op-slider .op-slides');
    let slide = document.querySelectorAll('.op-slider .op-slide');
    let dots = document.querySelectorAll('.op-slider .op-dots span');
    if (index > slide.length) {
      setSlideIndex(1);
    } else if (index < 1) {
      setSlideIndex(slide.length);
    }

    dots.forEach((item, i) => {
      item.classList.remove('dot-active');
      if (index - 1 === i) {
        item.classList.add('dot-active');
      }
    });

    slides.style.left = `-${index - 1}00%`;
  };

  return (
    <div className="op-slider">
      <div className="op-slides">
        <Slide title='"Lazos que construyen"' image={Inicio1} />
        <Slide title='"Producci&oacute;n"' image={Inicio2} />
        <Slide title='"Post cosecha"' image={Inicio3} />
        <Slide title='"Comercializaci&oacute;n"' image={Inicio4} />
      </div>
      {/* <button className="op-arrows prev" onClick={() => plusslide(-1)}>
        <span>
          <i className="fa fa-angle-left fa-4x" aria-hidden="true"></i>
        </span>
      </button>
      <button className="op-arrows next" onClick={() => plusslide(1)}>
        <span>
          <i className="fa fa-angle-right fa-4x" aria-hidden="true"></i>
        </span>
      </button> */}
      <div className="op-dots">
        <span className="dot-active" onClick={() => currentSlider(1)}></span>
        <span onClick={() => currentSlider(2)}></span>
        <span onClick={() => currentSlider(3)}></span>
        <span onClick={() => currentSlider(4)}></span>
      </div>
    </div>
  );
};

export default Slider;
