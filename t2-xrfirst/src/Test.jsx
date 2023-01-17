import React, { useState } from "react";
import { useNavigate } from "react-router-dom/dist";

const Test = () => {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  const counter = () => {
    setCount(count + 1);
    navigate("/?name=amrit", {
      state: { count },
    });
  };
  return (
    <div style={{ background: "red" }}>
      <button onClick={counter}>TEST</button>
    </div>
  );
};

export default Test;
