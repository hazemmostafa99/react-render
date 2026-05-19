import { useState } from "react";

function ParentOne({ children }: { children: React.ReactNode }) {
  const [count, setCount] = useState(0);
  // const [name, setName] = useState("hazem");
  console.log("ParentOne Render");

  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Count - {count}
      </button>
      {children}
    </div>
  );
}

export default ParentOne;
