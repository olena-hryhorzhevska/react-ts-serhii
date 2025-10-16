import { useState } from 'react';

export default function Example1() {
  const [name, setName] = useState('Olena');

  function reset() {
    setName(''); // очищаем state
  }

  return (
    <>
      <p>Value: {name}</p>

      <input
        type="text"
        value={name} // контролируемое поле
        onChange={e => setName(e.target.value)}
      />

      <input
        type="text"
        defaultValue={name} // неконтролируемое поле
        // onChange={e => setName(e.target.value)}
      />

      <button type="button" onClick={reset}>
        Reset
      </button>
    </>
  );
}

// import { useState } from 'react';

// export default function NewForm() {
//   const [value, setValue] = useState('');
//   return (
//     <form>
//       <p>{ value}</p>
//       <input
//         type="text"
//         name="firstName"
//         placeholder="First Name"
//         defaultValue={value}
//         onChange={(event) => setValue(event.target.value)}
//       />
//     </form>
//   );
// }




// import { useState } from 'react';

// function NewForm() {
//   const [name, setName] = useState('Olena');

//   function handleSubmit(e) {
//     e.preventDefault();
//     const data = new FormData(e.target);    
//     // console.log([...data.entries()]);
//     console.log('Form Data:', Object.fromEntries(data.entries()));
//   }

//   function handleChangeName() {
//     const names = ['Anna', 'Mark', 'Olena', 'Liam'];
//     const randomName = names[Math.floor(Math.random() * names.length)];
//     setName(randomName);
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Interactive Profile Form</h2>

//       <label>
//         Controlled input (value):
//         <input name="name" value={name} onChange={e => setName(e.target.value)} />
//       </label>

//       <br />

//       <label>
//         Uncontrolled input (defaultValue):
//         <input name="city" defaultValue="Toronto" />
//       </label>

//       <br />

//       <button type="button" onClick={handleChangeName}>
//         Change Name
//       </button>

//       <button type="submit">Show Form Data</button>
//     </form>
//   );
// }

// export default NewForm;