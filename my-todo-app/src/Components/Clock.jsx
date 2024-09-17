import React, { useEffect, useState } from 'react';
import './main.css';
import './rating.css';
import './clock.css';

const Clock = () => {
  const [time, setTime] = useState({
    hrs: '00',
    min: '00',
    sec: '00'
  });

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const hrs = String(now.getHours()).padStart(2, '0');
      const min = String(now.getMinutes()).padStart(2, '0');
      const sec = String(now.getSeconds()).padStart(2, '0');
      setTime({ hrs, min, sec });
    };

    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero">
      <div className="container">
        <div className="clock">
          <span id="hrs">{time.hrs}</span>
          <span>:</span>
          <span id="min">{time.min}</span>
          <span>:</span>
          <span id="sec">{time.sec}</span>
        </div>
      </div>
    </div>
  );
};

export default Clock;
