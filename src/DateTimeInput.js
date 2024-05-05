import React, { useState } from "react";

function DateTimeInput({ onDateTimeSet }) {
  const [dateTime, setDateTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onDateTimeSet(new Date(dateTime));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="datetime-local"
        value={dateTime}
        onChange={(e) => setDateTime(e.target.value)}
        required
      />
      <button type="submit">Set Countdown</button>
    </form>
  );
}

export default DateTimeInput;
