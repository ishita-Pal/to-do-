import React, { useRef, useEffect, useState } from 'react';
import './RangeSlider.css';

const RangeSlider = ({ min = 0, max = 100, step = 1, value = 0, onChange }) => {
  const [currentValue, setCurrentValue] = useState(value);
  const slideValue = useRef(null);
  const inputSlider = useRef(null);

  useEffect(() => {
    const updateSliderValue = () => {
      const value = inputSlider.current.value;
      setCurrentValue(value);
      slideValue.current.textContent = value;
      slideValue.current.style.left = (value / max) * 100 + "%";
    };

    const showSliderValue = () => {
      slideValue.current.classList.add("show");
    };

    const hideSliderValue = () => {
      slideValue.current.classList.remove("show");
    };

    inputSlider.current.addEventListener('input', updateSliderValue);
    inputSlider.current.addEventListener('mousedown', showSliderValue);
    inputSlider.current.addEventListener('touchstart', showSliderValue);
    inputSlider.current.addEventListener('mouseup', hideSliderValue);
    inputSlider.current.addEventListener('touchend', hideSliderValue);

    // Initial update to set the slider value and position correctly on load
    updateSliderValue();

    return () => {
      inputSlider.current.removeEventListener('input', updateSliderValue);
      inputSlider.current.removeEventListener('mousedown', showSliderValue);
      inputSlider.current.removeEventListener('touchstart', showSliderValue);
      inputSlider.current.removeEventListener('mouseup', hideSliderValue);
      inputSlider.current.removeEventListener('touchend', hideSliderValue);
    };
  }, [max]);

  return (
    <div className="range">
      {currentValue < max ? (
        <>
          <div className="sliderValue">
            <span ref={slideValue}>{value}</span>
          </div>
          <div className="field">
            <div className="value left">{min}</div>
            <input
              type="range"
              min={min}
              max={max}
              step={step}
              defaultValue={value}
              ref={inputSlider}
              onChange={onChange}
            />
            <div className="value right">{max}</div>
          </div>
        </>
      ) : (
        <div className="tick">✔</div>
      )}
    </div>
  );
};

export default RangeSlider;