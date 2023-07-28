import React, { useState, useMemo } from "react";

const UseMemo = (props: { users: { name: string }[] }) => {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  const incrementOne = () => {
    setCountOne(countOne + 1);
  };

  const incrementTwo = () => {
    setCountTwo(countTwo + 1);
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 300000000) i++;
    return countOne % 2 === 0;
  }, [countOne]);

  return (
    <div>
      <div>
        <h1>UseMemo</h1>
        <button onClick={incrementOne}>Count one- {countOne}</button>
        <span>{isEven ? "Even" : "Odd"}</span>
      </div>
      <div>
        <button onClick={incrementTwo}>Count two- {countTwo}</button>
      </div>
    </div>
  );
};

export default UseMemo;
