import { useReducer } from "react";

const initialState = 0;
type Action = "increment" | "decrement" | "reset";

const reducer = (state: number, action: Action): number => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;

    case "reset":
      return initialState;
    default:
      return state;
  }
};

function UseReducer() {
  const [count, dispatch] = useReducer(reducer, initialState);
  console.log("UseReducer Render");

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </div>
  );
}

export default UseReducer;
