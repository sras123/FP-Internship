import React from "react";
import "./App.css";
import { useState, useEffect, useRef, useReducer } from "react";
import UseMemo from "./components/UseMemo";
import UseCallback from "./components/UseCallback";

// const initialState = {
//   counter: 0,
// };

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "INCREMENT":
      return { counter: state.counter + 1 };
    default:
      return state;
  }
};

function App() {
  //color is a currect state and setColor is used to update the state
  const [color, setColor] = useState("green");
  //object
  const [info, setInfo] = useState({
    FirstName: "Srashta",
    lastName: "Acharya",
    age: 22,
  });
  //for useEffect
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [state, dispatch] = useReducer(reducer, { counter: 0 });

  console.log(inputRef);
  const onClick = () => {
    // console.log(inputRef.current?.value);
    if (inputRef.current) inputRef.current.value = "srashta";
  };
  useEffect(() => {
    // setTimeout(() => {
    //   setCount((count) => count + 1);
    // }, 1000);
    setCalculation(() => count * 2);
  }, [count]);

  const updateAge = () => {
    setInfo((perv) => {
      return { ...perv, age: 21 };
    });
  };

  return (
    <div className="App">
      <h1>
        Currect State:
        <br />
        {color}
      </h1>
      <button type="button" onClick={() => setColor("Blue")}>
        Blue
      </button>
      <p>
        Hello, I am {info.FirstName}
        {info.lastName}. I am {info.age} years old.
      </p>
      <button type="button" onClick={updateAge}>
        Age
      </button>
      <h1>useEffect</h1>
      <p>I have rendered {count} times. </p>
      Count
      <button onClick={() => setCount((c) => c + 1)}>+2</button>
      <h1>Calculation:{calculation}</h1>
      <h1>useRef</h1>
      <input type="text" placeholder="enter your name" ref={inputRef} />
      <button onClick={onClick}>Change name</button>
      <h1>useReducer</h1>
      <h1>{state.counter}</h1>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
        }}
      >
        Click here
      </button>
      <br />
      <UseMemo
        users={[{ name: "tilak" }, { name: "srastha" }, { name: "swastik" }]}
      />
      <UseCallback />
    </div>
  );
}

export default App;
