import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import styles from './SearchUsersWithReactPaginate.module.css';

type User = {
  id: number;
  name: string;
  city: 'Toronto' | 'Kyiv' | 'New York' | 'Warsaw';
};

const USERS: User[] = [
  { id: 1, name: 'Olena Hryhorzhevska', city: 'Toronto' },
  { id: 2, name: 'Nikita Bondarenko', city: 'Toronto' },
  { id: 3, name: 'Anna Shevchenko', city: 'Kyiv' },
  { id: 4, name: 'Dmytro Kovalenko', city: 'Kyiv' },
  { id: 5, name: 'Kate Williams', city: 'New York' },
  { id: 6, name: 'John Miller', city: 'New York' },
  { id: 7, name: 'Marta Nowak', city: 'Warsaw' },
  { id: 8, name: 'Piotr Zielinski', city: 'Warsaw' },
  { id: 9, name: 'Sofia Petrova', city: 'Toronto' },
  { id: 10, name: 'Maxim Ivanov', city: 'Kyiv' },
  { id: 11, name: 'Emily Clark', city: 'New York' },
  { id: 12, name: 'Oleh Tarasenko', city: 'Kyiv' },
  { id: 13, name: 'Iryna Melnyk', city: 'Toronto' },
  { id: 14, name: 'Andrii Bondar', city: 'Kyiv' },
  { id: 15, name: 'Natalie Brooks', city: 'New York' },
  { id: 16, name: 'James Carter', city: 'New York' },
  { id: 17, name: 'Alicja Kowalska', city: 'Warsaw' },
  { id: 18, name: 'Krzysztof Wójcik', city: 'Warsaw' },
  { id: 19, name: 'Yulia Romanenko', city: 'Toronto' },
  { id: 20, name: 'Denys Savchenko', city: 'Kyiv' },
  { id: 21, name: 'Sarah Johnson', city: 'New York' },
  { id: 22, name: 'Michael Brown', city: 'New York' },
  { id: 23, name: 'Zofia Kaczmarek', city: 'Warsaw' },
  { id: 24, name: 'Anton Koval', city: 'Kyiv' },
  { id: 25, name: 'Lina Marchenko', city: 'Toronto' },
  { id: 26, name: 'Victoria Lee', city: 'New York' },
  { id: 27, name: 'Taras Hnatiuk', city: 'Kyiv' },
  { id: 28, name: 'Oksana Dovhan', city: 'Toronto' },
];

interface FormValues {
  query: string;
  city: '' | User['city'];
  pageSize: '5' | '10';
}

const initialValues: FormValues = {
  query: '',
  city: '',
  pageSize: '5',
};

const Schema = Yup.object().shape({
  query: Yup.string()
    .max(30, 'Максимум 30 символов')
    .test('query-min-if-not-empty', 'Если вводишь текст, то минимум 2 символа', value => {
      const v = (value ?? '').trim();
      if (v.length === 0) return true;
      return v.length >= 2;
    }),
  city: Yup.string().oneOf(['', 'Toronto', 'Kyiv', 'New York', 'Warsaw'], 'Некорректный город'),
  pageSize: Yup.string().oneOf(['5', '10'], 'Некорректный размер страницы'),
});

export default function SearchUsersWithReactPaginate() {
  const [filters, setFilters] = useState<FormValues>(initialValues);
  const [pageIndex, setPageIndex] = useState(0);

  const q = filters.query.trim().toLowerCase();

  const filteredUsers = USERS.filter(u => {
    const okQuery = q === '' ? true : u.name.toLowerCase().includes(q);
    const okCity = filters.city === '' ? true : u.city === filters.city;
    return okQuery && okCity;
  });

  const pageSizeNum = Number(filters.pageSize);

  const pageCount = Math.max(1, Math.ceil(filteredUsers.length / pageSizeNum));

  const start = pageIndex * pageSizeNum;
  const currentPageItems = filteredUsers.slice(start, start + pageSizeNum);

  const handleSubmit = (values: FormValues) => {
    setFilters(values);
    setPageIndex(0);
  };

  const handlePageChange = (selectedItem: { selected: number }) => {
    setPageIndex(selectedItem.selected);
  };

  return (
    <div>
      <h2>Search users</h2>

      <Formik initialValues={initialValues} validationSchema={Schema} onSubmit={handleSubmit}>
        {formik => (
          <Form>
            <div>
              <label>
                Query
                <br />
                <Field name="query" type="text" placeholder="Type a name..." />
              </label>
              <ErrorMessage name="query" component="span" />
            </div>

            <br />

            <div>
              <label>
                City
                <br />
                <Field as="select" name="city">
                  <option value="">All cities</option>
                  <option value="Toronto">Toronto</option>
                  <option value="Kyiv">Kyiv</option>
                  <option value="New York">New York</option>
                  <option value="Warsaw">Warsaw</option>
                </Field>
              </label>
              <ErrorMessage name="city" component="span" />
            </div>

            <br />

            <div>
              <label>
                Page size
                <br />
                <Field as="select" name="pageSize">
                  <option value="5">5</option>
                  <option value="10">10</option>
                </Field>
              </label>
              <ErrorMessage name="pageSize" component="span" />
            </div>

            <br />

            <button type="submit">Search</button>

            <button
              type="button"
              onClick={() => {
                formik.resetForm();
                setFilters(initialValues);
                setPageIndex(0);
              }}
            >
              Reset
            </button>
          </Form>
        )}
      </Formik>

      <hr />

      <p>
        Results: {filteredUsers.length}. Page {pageIndex + 1} of {pageCount}
      </p>

      <ul>
        {currentPageItems.map(u => (
          <li key={u.id}>
            {u.name} ({u.city})
          </li>
        ))}
      </ul>

      {filteredUsers.length === 0 ? <p>No results</p> : null}

      <ReactPaginate
        pageCount={pageCount}
        onPageChange={handlePageChange}
        forcePage={pageIndex}
        previousLabel="Prev"
        nextLabel="Next"

        disabledClassName={styles.disabled}
        activeClassName={ styles.active }
      />
    </div>
  );
}
