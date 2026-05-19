import { memo } from "react";

const ChildOne = memo(function ({ children }: { children: React.ReactNode }) {
  console.log("ChildOne Render");
  return <div>{children}</div>;
});

export default ChildOne;
