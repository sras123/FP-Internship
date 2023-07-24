import { useDispatch, useSelector } from "react-redux";
import { increment, incrementBy } from "./store/counter-slice";
import { setUsers } from "./store/another-slice";
import RenderNumber from "./RenderNumber";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const initialCount = useSelector((state: any) => state.counter?.initialCount);

  const handleIncrement = () => {
    dispatch(increment());
  };

  useEffect(() => {
    setTimeout(() => {
      const data = [
        {
          name: "tilak",
        },
        {
          name: "srastha",
        },
        {
          name: "kamal",
        },
      ];
      handleSetUsers(data);
    }, 10000);
  }, []);

  const handleSetUsers = (data: any) => {
    dispatch(setUsers(data));
  };

  const handleIncrementByFive = () => {
    dispatch(incrementBy(5));
  };

  // const increment = () => {
  //   dispatch(actions.increment);
  // };
  // const decrement = () => {
  //   dispatch(actions.decrement);
  // };
  // const addBy = () => {
  //   dispatch(actions.addBY(10));
  // };

  // const subtractBy = () => {
  //   dispatch(actions.subtractBy(20));
  // };
  return (
    <div>
      {initialCount}
      <button onClick={handleIncrement}> Increment</button>
      <button onClick={handleIncrementByFive}> Increment By Five</button>

      <RenderNumber />

      {/* <h1>Counter</h1>
      <h1>{counter}</h1>
      <button onClick={decrement}> Decrement</button>
      <button onClick={addBy}>Add By 10</button>
      <button onClick={subtractBy}>Subtract By 10</button> */}
    </div>
  );
}

export default App;
