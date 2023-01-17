import React from "react";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };
  return (
    <div className="Counter__container">
      <button onClick={handleDecrement} className="btn">
        -
      </button>
      <h2>{count}</h2>
      <button onClick={handleIncrement} className="btn">
        +
      </button>
    </div>
  );
};

export default Counter;
