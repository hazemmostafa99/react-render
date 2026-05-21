import { useContext } from "react";
import { CountContext } from "./ContextParent";

function ChildA() {
  console.log("Child A Render");
  return (
    <div>
      Child A
      <ChildB />
    </div>
  );
}
export function ChildB() {
  console.log("Child B Render");
  return (
    <div>
      Child B
      <ChildC />
    </div>
  );
}

export function ChildC() {
  const count = useContext(CountContext);
  console.log("Child C Render");
  return <div>Child C count: {count}</div>;
}

export default ChildA;
