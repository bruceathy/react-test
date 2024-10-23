import { useState } from "react";
import "./CountBtn.css";

export default function CountBtn() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount((count) => count + 1)}>
      count is {count}
    </button>
  );
}
