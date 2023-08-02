import { useState } from "react";

function useToggle(defaultValue: any) {
  const [toggleValue, setToggleValue] = useState(defaultValue);

  function toggledButton() {
    setToggleValue(!toggleValue);
  }
  return [toggleValue, toggledButton];
}

export default useToggle;
