import { useEffect, useState } from "react";

export default function Timer() {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    console.log(`Timer has been started`);

    const interval = setInterval(() => {
      setSeconds((prev)=> prev + 1)
    }, 1000)

    return () => {
      clearInterval(interval);
      console.log(`Cleanup done ✅`);
    }
  }, [])

  return (
    <h2>There are: { seconds}</h2>
  )
}