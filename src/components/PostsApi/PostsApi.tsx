import { useEffect, useState } from "react";
import axios from "axios";

export default function PostsApi() {

  interface IPosts {
    userId: number;
    id: number;
    title: string;
  }
  const [userId, setUserId] = useState<number>(1);
  const [posts, setPosts] = useState<IPosts[]>([]);

  useEffect(() => {
    console.log('fetching data...');
    axios.get(`https://jsonplaceholder.typicode.com/posts/posts?userId=${userId}`).then(res => {
      setPosts(res.data);
    });
    
  }, [userId])

  return (
    <>
      <h2>Posts by User: {userId}</h2>
      <button type="button" onClick={() => setUserId((id) => id + 1)}>Next User</button>
      
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            {post.userId } - {post.title}
          </li>
        ))}
      </ul>
    </>
  )
}