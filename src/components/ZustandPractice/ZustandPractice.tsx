import { useCounterStore } from '../store/useCounterStore';
import { useShallow } from 'zustand/shallow';

export default function ZustandPractice() {
  // const country = useCounterStore(state => state.country); примитив

  const data = useCounterStore(
    useShallow(state => ({
      country: state.country,
      name: state.user.name,
    }))
  );

  return (
    <div>
      <h1>Country: {data.country}</h1>
      <h2>Name: {data.name}</h2>
    </div>
  );
}
