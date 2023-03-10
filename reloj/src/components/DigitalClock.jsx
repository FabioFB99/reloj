import React, { useEffect, useState } from "react";
import "./DigitalClock.css";
const DigitalClock = () => {
  const [clockState, setClokState] = useState();
  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClokState(date.toLocaleTimeString(), 1000);
    }, []);
  });
  return (
    <div className="digital-clock">
      <h2>{clockState}</h2>
    </div>
  );
};

export default DigitalClock;
