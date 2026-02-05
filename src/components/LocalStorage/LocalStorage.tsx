import { useEffect, useState } from "react";

export default function LocalStorage() {
  const [clicks, setClicks] = useState(() => {
    const savedClicks = window.localStorage.getItem('clicks');
    if (savedClicks !== null) {
      return JSON.parse(savedClicks);
    }
    return 0;
  });

  // console.log(typeof JSON.stringify({ a: 10 }));
  // console.log(typeof JSON.parse('{"a":10}'));
  
  

  useEffect(() => {
    if (clicks === 0) {
      window.localStorage.removeItem('clicks');
      return;
    }
    window.localStorage.setItem('clicks', JSON.stringify(clicks));
  }, [clicks])

  const handleClick = () => {
    setClicks(clicks + 1);
  }
  const handleReset = () => {
    setClicks(0);
  }

  return (
    <div>
      <button onClick={handleClick}>You clicked {clicks} times</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}






// import { useEffect, useState } from 'react';

// const STORAGE_KEY = 'catalog-filters';

// const PRODUCTS = [
//   { id: '1', name: 'iPhone Case', price: 20, inStock: true },
//   { id: '2', name: 'Mouse', price: 35, inStock: false },
//   { id: '3', name: 'Keyboard', price: 100, inStock: true },
//   { id: '4', name: 'Cable', price: 10, inStock: true },
//   { id: '5', name: 'Laptop Stand', price: 50, inStock: false },
// ];

// export default function LocalStorage() {
//   const [filters, setFilters] = useState(() => {
//     const saved = window.localStorage.getItem(STORAGE_KEY);

//     if (saved !== null) {
//       return JSON.parse(saved);
//     }

//     return {
//       query: '',
//       onlyInStock: false,
//       sort: 'default',
//     };
//   });

//   useEffect(() => {
//     const isDefault =
//       filters.query === '' && filters.onlyInStock === false && filters.sort === 'default';

//     if (isDefault) {
//       window.localStorage.removeItem(STORAGE_KEY);
//       return;
//     }

//     window.localStorage.setItem(STORAGE_KEY, JSON.stringify(filters));
//   }, [filters]);

//   const handleQueryChange = e => {
//     setFilters({
//       ...filters,
//       query: e.target.value,
//     });
//   };

//   const handleStockChange = e => {
//     setFilters({
//       ...filters,
//       onlyInStock: e.target.checked,
//     });
//   };

//   const handleSortChange = e => {
//     setFilters({
//       ...filters,
//       sort: e.target.value,
//     });
//   };

//   const handleReset = () => {
//     setFilters({
//       query: '',
//       onlyInStock: false,
//       sort: 'default',
//     });
//   };

//   // Фильтрация товаров
//   let visibleProducts = PRODUCTS;

//   if (filters.query.trim() !== '') {
//     visibleProducts = visibleProducts.filter(p =>
//       p.name.toLowerCase().includes(filters.query.toLowerCase())
//     );
//   }

//   if (filters.onlyInStock) {
//     visibleProducts = visibleProducts.filter(p => p.inStock);
//   }

//   if (filters.sort === 'price-asc') {
//     visibleProducts = [...visibleProducts].sort((a, b) => a.price - b.price);
//   }

//   if (filters.sort === 'price-desc') {
//     visibleProducts = [...visibleProducts].sort((a, b) => b.price - a.price);
//   }

//   return (
//     <div>
//       <h1>Catalog</h1>

//       <div>
//         <input placeholder="Search product" value={filters.query} onChange={handleQueryChange} />
//       </div>

//       <div>
//         <label>
//           <input type="checkbox" checked={filters.onlyInStock} onChange={handleStockChange} />
//           Only in stock
//         </label>
//       </div>

//       <div>
//         <select value={filters.sort} onChange={handleSortChange}>
//           <option value="default">Default</option>
//           <option value="price-asc">Price: Low to High</option>
//           <option value="price-desc">Price: High to Low</option>
//         </select>
//       </div>

//       <button onClick={handleReset}>Reset Filters</button>

//       <ul>
//         {visibleProducts.map(p => (
//           <li key={p.id}>
//             {p.name} | ${p.price} | {p.inStock ? 'In stock' : 'Out of stock'}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }