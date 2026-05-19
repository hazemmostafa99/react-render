import { memo } from "react";

const ChildOne = memo(function () {
  console.log("ChildOne Render");
  return <div>ChildOne Compoenet</div>;
});

export default ChildOne;
