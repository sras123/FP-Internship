import React from "react";
import useToggle from "../Hooks/useToggle";

// if value is true then show a button
// if value is false hide the button

// button -> toggle -> onclick => toggleValue ()
export default function Toggle() {
  const [toggle, setToggle] = useToggle(true);

  return (
    <div>
      <h2>Toggle </h2>
      <button onClick={setToggle}>Toggle</button>
      {toggle && (
        <div>
          <button>Hello</button>
        </div>
      )}
    </div>
  );
}
