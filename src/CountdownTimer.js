// CountdownTimer.js
import React, { useState, useEffect } from "react";

function CountdownTimer({ targetDate }) {
  // Helper function to calculate time left
  const calculateTimeLeft = () => {
    // If targetDate is null or undefined, return zeros
    if (!targetDate) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isOver: false };
    }

    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isOver: true };
    }

    return {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((distance % (1000 * 60)) / 1000),
      isOver: false,
    };
  };

  const [timer, setTimer] = useState(calculateTimeLeft());

  useEffect(() => {
    // If targetDate is not set, no need to run the countdown
    if (!targetDate) {
      return;
    }

    const interval = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimer(newTimeLeft);
    }, 1000);

    // Clear the interval on component unmount
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div>
      {timer.isOver ? (
        <p className="message">
          🎉 The countdown is over. What's next on your adventure? 🎉
        </p>
      ) : (
        <div>
          <div className="time-card">
            <h2>Days</h2>
            <p>{timer.days}</p>
          </div>
          <div className="time-card">
            <h2>Hours</h2>
            <p>{timer.hours}</p>
          </div>
          <div className="time-card">
            <h2>Minutes</h2>
            <p>{timer.minutes}</p>
          </div>
          <div className="time-card">
            <h2>Seconds</h2>
            <p>{timer.seconds}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default CountdownTimer;
