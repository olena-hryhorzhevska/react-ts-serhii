import { useState } from "react";

export function Count() {
  const [count, setCount] = useState<number>(0);

  const incTwiceWrong = () => {
    setCount(count + 1);
    setCount(count + 1);
  }

  const incTwiceRight = () => {
    setCount(prevc => {
      return prevc + 1
    })
    setCount(prevc => prevc + 1);
  }
  return (
    <>
      <p>Count: {count}</p>
      <button onClick={incTwiceWrong}>+2 (wrong)</button>
      <button onClick={incTwiceRight}>+2 (right)</button>
    </>
  );
}