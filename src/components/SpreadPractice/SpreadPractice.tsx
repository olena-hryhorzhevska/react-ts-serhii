import { useState } from 'react';
enum Keys {
  X = 'x',
  Y = 'y',
}

interface Values {
  x: number;
  y: number;
}

export default function SpreadPractice() {
  const [values, setValues] = useState<Values>({ x: 0, y: 0 });

  const updateValue = (key: Keys) => {
    setValues({
      ...values,
      [key]: values[key] + 1,
    });
  };

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
