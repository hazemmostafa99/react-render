import { useState } from "react";
import ChildOne from "./ChildOne";

function ParentOne() {
  const [count, setCount] = useState(0);
  // const [name, setName] = useState("hazem");
  console.log("ParentOne Render");

  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Count - {count}
      </button>
      <ChildOne>
        {/* when the state change it's create a new refrence for the children props */}
        <strong>Hello</strong>
      </ChildOne>
    </div>
  );
}

export default ParentOne;
