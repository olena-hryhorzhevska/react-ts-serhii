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

export default function TestCode() {
  const [text, setText] = useState('hello');

  const makeRequest = useDebouncedCallback((value: string) => {
    console.log(`Make HTTP request with: ${value}`);
  }, 1000);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    setText(value); // сразу обновили input
    makeRequest(value); // запрос с задержкой
  };

  return (
    <>
      <input type="text" value={text} onChange={handleChange} />
      <p>Text value: {text}</p>
    </>
  );
}
