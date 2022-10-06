import React, { useState } from "react";

function test() {
  const [count, setCount] = useState(0);
  const Addition = () => {
    setCount(count + 1);
  };

  const subtraction = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <button onClick={Addition}>Click to add</button>
      <button onClick={subtraction}> Click to subtract</button>
      <div>{count}</div>
    </div>
  );
}

export default test;
