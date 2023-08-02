import React, { useState } from "react";
import useTimeout from "../Hooks/useTimeout";

export const Timeout = () => {
  const [text, setText] = useState(false);

  useTimeout(() => {
    setText(true);
  }, 2000);
  return (
    <div>
      <h2>Timeout</h2>
      {text ? "HELLO" : "HI..."}
    </div>
  );
};
