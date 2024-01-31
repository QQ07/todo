import React, { useState, useEffect } from "react";

function IntervalExample() {
  // Declare a state variable for a counter
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // Function to update the counter at intervals
    const updateCounter = () => {
      setCounter((prevCounter) => prevCounter + 1);
    };

    // Set up an interval to update the counter every second
    const intervalId = setInterval(updateCounter, 1000);

    // Clean-up function: Clear the interval when the component is unmounted
    return () => {
      console.log("Cleared interval");
      clearInterval(intervalId);
    };
  }, []); // Empty dependency array means the effect runs once after the initial render

  return (
    <div>
      <h2>Interval Example</h2>
      <p>Counter: {counter}</p>
    </div>
  );
}

export default IntervalExample;
