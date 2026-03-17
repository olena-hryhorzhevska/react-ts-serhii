import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './FormikTestt.module.css';

interface FormValues {
  email: string;
  password: string;
}

const initialValues: FormValues = {
  email: '',
  password: '',
};

const validationSchema = Yup.object({
  email: Yup.string().email('Enter a valid Email').required('Email is required'),
  password: Yup.string().min(6, 'Minimum 6 characters').required('Password is required'),
});

export default function FormikTestt() {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={values => console.log(values)}
    >
      {({ touched, errors }) => {
        const emailState =
          touched.email && errors.email
            ? styles.inputError
            : touched.email && !errors.email
            ? styles.inputOkay
            : '';

        const passwordState =
          touched.password && errors.password
            ? styles.inputError
            : touched.password && !errors.password
            ? styles.inputOkay
            : '';

        return (
          <Form className={styles.form}>
            <div className={styles.fieldGroup}>
              <Field
                name="email"
                type="email"
                placeholder="Email"
                className={`${styles.input} ${emailState}`}
              />
              <ErrorMessage name="email" component="div" className={styles.error} />
            </div>

            <div className={styles.fieldGroup}>
              <Field
                name="password"
                type="password"
                placeholder="Password"
                className={`${styles.input} ${passwordState}`}
              />
              <ErrorMessage name="password" component="div" className={styles.error} />
            </div>

            <button type="submit" className={styles.submitBtn}>
              LOG IN
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}
