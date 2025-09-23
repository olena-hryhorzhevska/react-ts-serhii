export function ButtonEvent() {

  const handleClick = () => {
    alert('Button clicked!');
  }

  return (
    <button onClick={handleClick}>Click me!</button>
  )
}