// import { Formik, Form, Field, FormikHelpers } from 'formik';

// interface OrderFormValues {
//   restrictions: string[];
// }

// const initialValues: OrderFormValues = {
//   restrictions: [],
// };

// export default function FormikTest() {
//   // const fieldId = useId();

//   const handleSubmit = (
//     values: OrderFormValues,
//     actions: FormikHelpers<OrderFormValues>
//   ) => {
//     console.log('Order placed with restrictions:', values.restrictions);
//     actions.resetForm();
//   };

//   return (
//     <Formik initialValues={initialValues} onSubmit={handleSubmit}>
//       <Form>
//         <label>
//           <Field type="checkbox" name="restrictions" value="vegan" />
//           Vegan
//         </label>

//         <label>
//           <Field type="checkbox" name="restrictions" value="gluten-free" />
//           Gluten-free
//         </label>

//         <label>
//           <Field type="checkbox" name="restrictions" value="nut-free" />
//           Nut-free
//         </label>

//         <button type="submit">Place your order</button>
//       </Form>
//     </Formik>
//   );
// }


import { Formik, Form, Field, FormikHelpers } from 'formik';

interface OrderFormValues {
  message: string;
}

const initialValues: OrderFormValues = {
  message: '',
};

export default function FormikTest() {
  // const fieldId = useId();

  const handleSubmit = (values: OrderFormValues, actions: FormikHelpers<OrderFormValues>) => {
    console.log('Order placed with message:', values.message);
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <label htmlFor="message">Comment or instructions</label>
        <Field as="textarea" name="message" id="message" rows={5} />

        <button type="submit">Place your order</button>
      </Form>
    </Formik>
  );
}

// formik.bag = {
// values: {
//   username: 'akr',
//   email: '',
//   }
// handleSubmit = (values) => {
//   preventDefault()
//   onsubmit();
// }
// }
