import { createContext, useState } from "react";
import ChildA, { MemoizedChildA } from "./ContextChild";

export const CountContext = createContext(0);
const CountProvider = CountContext.Provider;

function ContextParent() {
  const [count, setCount] = useState(0);
  console.log("ContextParent Render");

  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Count - {count}
      </button>
      <CountProvider value={count}>
        <MemoizedChildA />
      </CountProvider>
    </div>
  );
}

export default ContextParent;
