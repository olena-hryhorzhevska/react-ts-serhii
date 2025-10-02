import { useEffect, useState } from 'react';

export default function CounterWithEffects() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Рендер был!');
  });

  useEffect(() => {
    console.log('Компонент смонтирован');
  }, []);

  useEffect(() => {
    console.log('Count изменился:', count);
  }, [count]);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count => count + 1)}>+1</button>
      <button onClick={() => setCount(count => count - 1)}>-1</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
