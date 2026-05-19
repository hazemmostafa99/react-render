import { useState } from "react";
import ChildOne from "./ChildOne";

function ParentOne() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("hazem");
  console.log("ParentOne Render");

  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Count - {count}
      </button>
      <button onClick={() => setName("Darsh")}>ChangeName</button>
      <ChildOne name={name} />
    </div>
  );
}

export default ParentOne;
