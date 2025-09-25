// const Assertion

import { useState } from "react"

const Keys = {
  X: 'x',
  Y: 'y',
} as const;

type Key = typeof Keys[keyof typeof Keys]; // "x" | "y"

interface Values {
  x: number,
  y: number,
}

export default function Assertion() {
  const [values, setValues] = useState<Values>({
    x: 0,
    y: 0,
  })
  
  const updateValue = (key: Key) => {
    setValues({
      ...values,
      [key]: values[key] +1,
    })
  }
  return (
    <div>
      <p>
        x: {values.x}, y: {values.y}
      </p>
      <button onClick={() => updateValue(Keys.X)}>Update X</button>
      <button onClick={() => updateValue(Keys.Y)}>Update Y</button>
    </div>
  );
}