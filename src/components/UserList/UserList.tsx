import { useState, useEffect } from "react"

const URL = 'https://jsonplaceholder.typicode.com/users'

export default function UserList() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch(URL).then(res => res.json()).then(data => {
      console.log('данные получены успешно');
      setUsers(data)
    })
  }, [])

  return (
    <>
      <h2>Our Users:</h2>
      <ul>
        {users.map((user: any) => (
          <li key={user.id}>
            {user.id}  {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </>
  );
}