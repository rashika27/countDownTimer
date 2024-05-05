// App.js
import React, { useState } from "react";
import CountdownTimer from "./CountdownTimer";
import "./App.css";

function App() {
  const [targetDate, setTargetDate] = useState(null);
  const [dateInput, setDateInput] = useState("");
  const [timerActive, setTimerActive] = useState(false);
  const [message, setMessage] = useState("");

  const handleDateChange = (event) => {
    setDateInput(event.target.value);
  };

  const startCountdown = () => {
    const selectedDate = new Date(dateInput);
    const now = new Date();
    const timeDiff = selectedDate - now;

    if (timeDiff > 8640000000) {
      // 100 days in milliseconds
      setMessage("Selected time is more than 100 days");
    } else if (timeDiff < 0) {
      setMessage("Please choose a future date and time.");
    } else {
      setMessage("");
      setTargetDate(selectedDate.getTime());
      setTimerActive(true);
    }
  };

  const cancelTimer = () => {
    setTimerActive(false);
    setTargetDate(null);
    setMessage("");
  };

  return (
    <div className="container">
      <h1 className="heading">Countdown Timer</h1>
      <input
        type="datetime-local"
        value={dateInput}
        onChange={handleDateChange}
        disabled={timerActive}
      />
      <button
        className="timer-button"
        onClick={timerActive ? cancelTimer : startCountdown}
        style={{
          border: "1px solid white",
          color: "white",
          backgroundColor: "transparent",
          padding: "10px 20px",
          cursor: "pointer",
        }}
      >
        {timerActive ? "Cancel Timer" : "Start Timer"}
      </button>
      {targetDate && timerActive && <CountdownTimer targetDate={targetDate} />}
      {message && <p className="message">{message}</p>}
    </div>
  );
}

export default App;
