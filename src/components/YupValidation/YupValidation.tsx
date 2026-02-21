import * as Yup from 'yup';
import { Formik, Form, Field, FormikHelpers, ErrorMessage } from 'formik';

interface OrderFormValues {
  username: string;
  email: string;
}

const initialValues: OrderFormValues = {
  username: '',
  email: '',
};

const OrderFormSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .max(10, 'Name must be at most 10 characters')
    .required('Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
});

export default function YupValidation() {
  const handleSubmit = (values: OrderFormValues, actions: FormikHelpers<OrderFormValues>) => {
    console.log('Order data: ', values);
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={OrderFormSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <Field type="text" name="username" />
        <ErrorMessage name="username" component="span" />
        <Field type="email" name="email" />
        <ErrorMessage name="email" component="span" />
        <button type="submit">Place order</button>
      </Form>
    </Formik>
  );
}
