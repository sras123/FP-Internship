import React from "react";
import { useLocalStorage, useSessionStorage } from "../Hooks/useStorage";

export const Storage = () => {
  const [name, setName, removeName] = useSessionStorage("name", "Srashta");
  const [age, setAge, removeAge] = useLocalStorage("age", 27);
  return (
    <div>
      <h2>Storage</h2>
      <div>
        {name} , {age}
      </div>
      <button onClick={() => setName("Sras")}>Set Name</button>
      <button onClick={() => setAge(22)}>Set Age</button>
      <button onClick={removeName}>Remove Name</button>
      <button onClick={removeAge}>Remove Age</button>
    </div>
  );
};
