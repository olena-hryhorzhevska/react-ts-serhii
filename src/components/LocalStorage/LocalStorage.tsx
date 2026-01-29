import { useEffect, useState } from "react";

export default function LocalStorage() {
  const [clicks, setClicks] = useState(() => {
    const savedClicks = window.localStorage.getItem('clicks');
    if (savedClicks !== null) {
      return JSON.parse(savedClicks);
    }
    return 0;
  });

  useEffect(() => {
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