// export interface OrderFormProps {
//   onSubmit: (username: string) => void;
// }

// export default function OrderForm({ onSubmit }: OrderFormProps) {
//   const handleAction = (formData: FormData) => {
//     const username = formData.get('username') as string;
//     onSubmit(username);
//   }

//   return (
//     <div>
//       <form action={handleAction}>
//         <label>
//           Your name:
//           <input type="text" name="username" placeholder="Serhii" />
//         </label>
//         <button type="submit">Place your Order</button>
//       </form>
//     </div>
//   );
// }

// import { useId } from 'react';
// export default function OrderForm() {
//   const formId = useId();

//   return (
//     <form>
//       <label htmlFor={`${formId}-name`}>Name</label>
//       <input type="text" name="name" id={`${formId}-name`} />
//       <label htmlFor={`${formId}-email`}>Email</label>
//       <input type="email" name="email" id={`${formId}-email`} />
//     </form>
//   );
// }



// export default function OrderForm() {
//   const handleOrder = (formData: FormData): void => {
//     const deliveryMethod = formData.get('delivery');
//     console.log('Selected delivery method:', deliveryMethod);
//   }
//   return (
//     <form action={handleOrder}>
//       <fieldset>
//         <legend>Delivery Method</legend>
//         <label>
//           <input type="radio" name="delivery" value="pickup" defaultChecked />
//           Pickup
//         </label>

//         <label>
//           <input type="radio" name="delivery" value="courier" />
//           Courier
//         </label>
//       </fieldset>
//       <button type="submit">Place Order</button>
//     </form>
//   );
// }


export default function OrderForm() {

  const handleOrder = (formData: FormData): void => {
    const restrictions = formData.getAll('restrictions');
    console.log('Selected dietary restrictions:', restrictions);
  }
  return (
    <form action={handleOrder}>
      <fieldset>
        <legend>Dietary restrictions</legend>
        <label>
          <input type="checkbox" name="restrictions" value="vegan" />
          Vegan
        </label>
        <label>
          <input type="checkbox" name="restrictions" value="gluten-free" />
          Gluten-Free
        </label>
        <label>
          <input type="checkbox" name="restrictions" value="nut-free" />
          Nut-Free
        </label>
      </fieldset>
      <button type="submit">Submit</button>
    </form>
  );
}