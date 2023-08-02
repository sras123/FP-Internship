import React, { ChangeEvent, useState } from "react";
import useDebounce from "../Hooks/useDebounce";

function Counter() {
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce<string>(value, 500);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  useDebounce(value);
  return (
    <div>
      <h2>Debounce</h2>
      {/* <button onClick={() => setCount(count + 1)}>Count {count}</button> */}
      <p>Value real-time: {value}</p>
      <p>Debounced value (delayed): {debouncedValue}</p>

      <input type="text" value={value} onChange={handleChange} />
    </div>
  );
}

export default Counter;
