import React from "react";
import { useSelector } from "react-redux";

export default function RenderNumber() {
  const initialCount = useSelector((state: any) => state.counter?.initialCount);
  return (
    <div>
      RenderNumber
      <p>Current Count is {initialCount}</p>
    </div>
  );
}
