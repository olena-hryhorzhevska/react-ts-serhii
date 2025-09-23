export function TodoList() {
  const todos: string[] = ['Learn React', 'Learn Next.js', 'Build a website']

  return (
    <ul>
      {todos.map((todo, index) => {
        return <li key={index}>{todo}</li>
      })}
    </ul>
  )
}