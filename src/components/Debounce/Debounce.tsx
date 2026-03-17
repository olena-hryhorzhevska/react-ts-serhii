// import { useState, useEffect } from 'react';
// import { useDebouncedCallback } from 'use-debounce';

// export default function Debounce() {
//   const [text, setText] = useState('hello');

//   const handleChange = useDebouncedCallback(
//     (event: React.ChangeEvent<HTMLInputElement>) => setText(event.target.value),
//     1000
//   );

//   useEffect(() => {
//     console.log(`Make HTTP request with: ${text}`);
//   }, [text]);

//   return (
//     <>
//       <input type="text" defaultValue={text} onChange={handleChange} />
//       <p>Text value: {text}</p>
//     </>
//   );
// }



import { useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import axios from 'axios';
import { useQuery, keepPreviousData } from '@tanstack/react-query';

interface Post {
  id: number;
  title: string;
  body: string;
}

interface FetchPostsResponse {
  posts: Post[];
}

const fetchPosts = async (searchText: string) => {
  const res = await axios.get<FetchPostsResponse>('https://dummyjson.com/posts/search', {
    params: {
      q: searchText,
    },
  });
  return res.data.posts;
};

export default function TestCode() {
  const [inputValue, setInputValue] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const { data: posts, isFetching } = useQuery({
    queryKey: ['posts', searchQuery],
    queryFn: () => fetchPosts(searchQuery),
    placeholderData: keepPreviousData,
  });

  const updateSearchQuery = useDebouncedCallback((value: string) => setSearchQuery(value), 300);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setInputValue(value); // обновляем input сразу
    updateSearchQuery(value); // searchQuery обновится через 300мс
  };

  return (
    <>
      <input type="text" value={inputValue} onChange={handleChange} placeholder="Search posts" />

      {isFetching && <div>Loading posts...</div>}

      {posts && (
        <ul>
          {posts.map(post => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )}
    </>
  );
}







// import { useState } from 'react';
// import { useDebouncedCallback } from 'use-debounce';

// export default function TestCode() {
//   const [text, setText] = useState('hello');

//   const makeRequest = useDebouncedCallback((value: string) => {
//     console.log(`Make HTTP request with: ${value}`);
//   }, 1000);

//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const value = event.target.value;

//     setText(value); // сразу обновили input
//     makeRequest(value); // запрос с задержкой
//   };

//   return (
//     <>
//       <input type="text" value={text} onChange={handleChange} />
//       <p>Text value: {text}</p>
//     </>
//   );
// }
