import { useState, useEffect } from 'react';

export default function Stopwatch() {
  const [seconds, setSeconds] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);

useEffect(() => {
  if (!isRunning) return;

  const intervalId = setInterval(() => {
    setSeconds(prev => prev + 1);
  }, 1000);

  return () => clearInterval(intervalId);
}, [isRunning]);

  return (
    <>
      <h1>Seconds: {seconds}</h1>
      <button onClick={() => setIsRunning(true)}>start</button>
      <button onClick={() => setIsRunning(false)}>stop</button>
      <button onClick={() => setSeconds(0)}>reset</button>
    </>
  );
}


// export default function Stopwatch() {
//   const [seconds, setSeconds] = useState<number>(0);
//   const [isRunning, setIsRunning] = useState<boolean>(false);

//   useEffect(() => {
//     let intervalId: number;
//     if (isRunning) {
//       intervalId = window.setInterval(() => {
//         setSeconds(prev => prev + 1);
//       }, 1000);
//     }

//     return () => {
//       if (intervalId !== undefined) {
//         clearInterval(intervalId);
//       }
//     };
//   }, [isRunning]);

//   return (
//     <>
//       <h1>Seconds: {seconds}</h1>
//       <button onClick={() => setIsRunning(true)}>start</button>
//       <button onClick={() => setIsRunning(false)}>stop</button>
//       <button onClick={() => setSeconds(0)}>reset</button>
//     </>
//   );
// }
