import React, { useState, useCallback } from "react";
import List from "./List";

const UseCallback = () => {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  const getItems = useCallback(() => {
    return [number, number + 1, number + 2];
  }, [number]);

  const theme = {
    backgroundColor: dark ? "#333" : "#FFF",
    color: dark ? "#fff" : "#333",
  };
  return (
    <div style={theme}>
      <h1>UseCallback</h1>
      <div>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value))}
        />
        <button onClick={() => setDark((prevDark) => !prevDark)}>
          Toogle Theme
        </button>
        <List getItems={getItems} />
      </div>
    </div>
  );
};

export default UseCallback;
