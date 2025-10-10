export default function Form() {

  const handleSubmit = (formData: FormData) => {
    const username = formData.get('username');
    const email = formData.get('email');

    console.log({ username, email });
  }
    


 
  return (
      <form action={handleSubmit}>
        <input type="text" name="username" placeholder="Enter your name" />
        <input type="email" name="email" placeholder="Enter your email" />
        <button type="submit">Send</button>
      </form>
    )

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();

  //   const formData = new FormData(e.target as HTMLFormElement); // {{username: '...}, {email: '...'}}
  //   const username = formData.get('username');
  //   const email = formData.get('email');

  //   console.log({ username, email });
  // }

  // return (
  //   <form onSubmit={handleSubmit}>
  //     <input type="text" name="username" placeholder="Enter your name" />
  //     <input type="email" name="email" placeholder="Enter your email" />
  //     <button type="submit">Send</button>
  //   </form>
  // )
}