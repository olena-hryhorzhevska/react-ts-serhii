interface ClickCounterProps {
  value: number;
  onUpdate: () => void;
}

export function ClickCounter({ value, onUpdate }: ClickCounterProps) {

  return (
    <button onClick={onUpdate}>
      Clicked { value} times!
    </button>
  )
}