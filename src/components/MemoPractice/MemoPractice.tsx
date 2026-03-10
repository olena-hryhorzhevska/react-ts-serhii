// useMemo - хук для оптимизации производительности, который позволяет запоминать результат функции и возвращать его при последующих вызовах, если входные данные не изменились. Это может быть полезно для предотвращения повторных вычислений, которые могут быть дорогими по времени или ресурсам.
// import { useState, useMemo } from 'react';

// const products = [
//   { id: 1, name: 'Product A', price: 900 },
//   { id: 2, name: 'Product B', price: 30 },
//   { id: 3, name: 'Product C', price: 1200 },
//   { id: 4, name: 'Product D', price: 60 },
//   { id: 5, name: 'Product E', price: 400 },
// ];

// export default function MemoPractice() {
//   const [count, setCount] = useState(0);
//   const [minPrice, setMinPrice] = useState(100);

//   console.log('App render');

//   const expensiveProducts = useMemo(() => {
//     console.log('Фильтрация выпоняется снова');
//     return products.filter(product => product.price >= minPrice);
//   }, [minPrice]);

//   return (
//     <>
//       <h1>Без useMemo</h1>
//       <button type="button" onClick={() => setCount(count + 1)}>
//         Увеличить count: {count}
//       </button>

//       <label>
//         <input type="number" value={minPrice} onChange={e => setMinPrice(Number(e.target.value))} />
//       </label>
//       <h2>Дорогие товары</h2>
//       <ul>
//         {expensiveProducts.map(product => (
//           <li key={product.id}>
//             {product.name} - ${product.price}
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }

import { useState, useEffect, useMemo } from 'react';

// { } === { } // false, так как это разные объекты в памяти
// [] === []

// useState => хранит
// useEffect => выполняет побочные эффекты
// useMemo => запоминает результат функции, если входные данные не изменились

export default function MemoPractice() {
  const [query, setQuery] = useState('');
  const [count, setCount] = useState(0);

  const options = useMemo(() => {
    return {
      query,
      limit: 10,
    };
  }, [query]);

  useEffect(() => {
    console.log('Эффект сработал из-за изменения options');
  }, [options]);

  return (
    <>
      <h1>Без useMemo</h1>
      <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search" />
      <button onClick={() => setCount(count + 1)}>Count {count}</button>
    </>
  );
}
