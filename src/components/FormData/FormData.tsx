import { useState } from "react";

export default function FormDataa() {
  const [username, setUsername] = useState('Lena');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    // const form = event.currentTarget as HTMLFormElement;
    // const formData = new FormData(form);
    // const username = formData.get('username') as string;
    console.log('Username:', username);
}
  return (
    <>
      <h1>Classic onSubmit + FormData</h1>

      <form onSubmit={handleSubmit}>
        <label>Username:
          <input type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Type your name"
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}
