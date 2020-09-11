import React, { useState } from "react";

function App() {
  //for continous time
  //setInterval(getTime, 1000);

  const now = new Date().toLocaleTimeString();

  var [Time, setTime] = useState(now);

  function getTime() {
    const now = new Date().toLocaleTimeString();
    setTime(now);
  }

  return (
    <div className="container">
      <h2>{Time}</h2>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
