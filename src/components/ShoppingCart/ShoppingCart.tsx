import { useState } from 'react';

interface ShoppingCartI {
  id: number;
  name: string;
  qty: number;
}

export default function ShoppingCart() {
  const [cart, setCart] = useState<ShoppingCartI[]>([
    {
      id: 1,
      name: 'Apple',
      qty: 1,
    },
    {
      id: 2,
      name: 'Banana',
      qty: 3,
    },
  ]);

  // const increaseQty = (id: number) => {
  //   setCart(prev =>
  //     prev.map(item =>
  //       item.id === id
  //         ? {
  //             ...item,
  //             qty: item.qty + 1,
  //           }
  //         : item
  //     )
  //   );
  // };

  const increaseQty = (id: number) => {
    setCart(prev => {
      return prev.map(item => {
        if (item.id === id) {
          return {
            ...item,
            qty: item.qty + 1,
          }
        }
        return item;
      })
    }
    )
  }

  return (
    <div>
      <h1>Shopping Cart</h1>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            {item.name} - {item.qty}
            <button onClick={() => increaseQty(item.id)}>Increase Quantity</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
