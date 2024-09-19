import { useState, useEffect } from "react";
import "./Counter.css";

export const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;

    return () => {
      document.title = "Vite + React";
    };
  });

  return (
    <>
      <h1>Counter</h1>
      <div className="counter-container">
        <div className="counter">
          <button onClick={() => setCount(count - 1)}>Dec</button>
          <h3>{count}</h3>
          <button onClick={() => setCount(count + 1)}>Inc</button>
        </div>
      </div>
    </>
  );
};
