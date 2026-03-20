// persist - localStorage/sessionStorage

import { useTodoStore } from '../store/useCounterStore';

export default function ZustandPractice() {
  const inputValue = useTodoStore(state => state.inputValue);
  const todos = useTodoStore(state => state.todos);
  const setInputValue = useTodoStore(state => state.setInputValue);
  const addTodo = useTodoStore(state => state.addTodo);
  const removeTodo = useTodoStore(state => state.removeTodo);

  return (
    <div>
      <h1>Todo without persist</h1>
      <input
        type="text"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        placeholder="Enter todo"
      />
      <button onClick={addTodo}>Add todo</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.title}
            <button onClick={() => removeTodo(todo.id)}>Delete todo</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// import { useCounterStore } from '../store/useCounterStore';
// import { useShallow } from 'zustand/shallow';

// export default function ZustandPractice() {
//   // const country = useCounterStore(state => state.country); примитив

//   const data = useCounterStore(
//     useShallow(state => ({
//       country: state.country,
//       name: state.user.name,
//     }))
//   );

//   return (
//     <div>
//       <h1>Country: {data.country}</h1>
//       <h2>Name: {data.name}</h2>
//     </div>
//   );
// }
