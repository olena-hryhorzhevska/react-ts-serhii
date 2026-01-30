import { useEffect, useState } from "react";

export default function LocalStorage() {
  const [clicks, setClicks] = useState(() => {
    const savedClicks = window.localStorage.getItem('clicks');
    if (savedClicks !== null) {
      return JSON.parse(savedClicks);
    }
    return 0;
  });

  // console.log(typeof JSON.stringify({ a: 10 }));
  // console.log(typeof JSON.parse('{"a":10}'));
  
  

  useEffect(() => {
    if (clicks === 0) {
      window.localStorage.removeItem('clicks');
      return;
    }
    window.localStorage.setItem('clicks', JSON.stringify(clicks));
  }, [clicks])

  const handleClick = () => {
    setClicks(clicks + 1);
  }
  const handleReset = () => {
    setClicks(0);
  }

  return (
    <div>
      <button onClick={handleClick}>You clicked {clicks} times</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}