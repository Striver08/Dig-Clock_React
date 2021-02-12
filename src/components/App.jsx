import React, { useState } from "react";

function App() {
  setInterval(timeUp, 1000);

  let time = new Date().toLocaleTimeString();

  const [tim, setTime] = useState(time);

  function timeUp() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
    console.log(newTime);
  }

  return (
    <div className="container">
      <h1>{tim}</h1>
      <button onClick={timeUp}>Get Time</button>
    </div>
  );
}

export default App;
