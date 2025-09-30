import { useEffect, useState } from "react"


export default function Effect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`❌ Без массива`);
  })

    useEffect(() => {
      console.log(`✅ Пустой массив`);
    }, []);
  
  
    useEffect(() => {
      console.log(`📌С зависимостью`);
    }, [count]);

  console.log(`Рендер происходит каждый раз`);
  
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={()=> setCount(count + 1)}>Increase</button>
    </>
  )
}