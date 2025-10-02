import { useState, useEffect } from "react"

export default function WindowSizeTracker() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    console.log('Effect started');

    const handleSizeChange = () => {
      setWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleSizeChange)
    
    return () => {
      console.log('Effect cleanup');
      window.removeEventListener('resize', handleSizeChange)
    }
  })
  return (
    <>
      <p>Текущая ширина окна: { width} px</p>
    </>
  )
}