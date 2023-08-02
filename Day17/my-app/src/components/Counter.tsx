import React from "react";
import useCounter from "../Hooks/useCounter";

function Counter() {
  const { count, increment, decrement, reset } = useCounter();

  return (
    <div>
      <h2>Counter</h2>
      {/* <button onClick={() => setCount(count + 1)}>Count {count}</button>
      <br /> */}
      <button onClick={increment}>Increment</button>
      <br />
      <button onClick={decrement}>Decrement</button>
      <br />
      <button onClick={reset}>Reset</button>
      <br />
      {count}
    </div>
  );
}

export default Counter;
