import React from "react";
import "./App.css";
import Debounce from "./components/Debounce";
import Counter from "./components/Counter";
import Toggle from "./components/Toggle";
import Fetch from "./components/Fetch";
import { Timeout } from "./components/Timeout";
import { Storage } from "./components/Storage";

function App() {
  return (
    <div className="App">
      <h1>Custom Hooks</h1>
      <Debounce />
      <Counter />
      <Toggle />
      <Timeout />
      <Storage />
      <Fetch />
    </div>
  );
}

export default App;
