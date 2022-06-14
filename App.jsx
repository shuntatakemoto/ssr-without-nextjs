import React, { useState } from "https://jspm.dev/react@17.0.2";

export function App() {
  const [count, setCount] = useState(0);

  const onClick = () => {
    setCount((currentCount) => currentCount + 1);
  };

  return (
    <div>
      {count}
      <br />
      <button type="button" onClick={onClick}>
        count up
      </button>
    </div>
  );
}