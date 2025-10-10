
import Form from '../Form/Form';
import Header from '../Header/Header';
import './App.module.css';

function App() {
  // const obj = {
  //   name: 'John',
  //   age: 30,
  //   city: 'New York',
  // };

  // const arr = Object.values(obj); // ['John', 30, 'New York']
  // console.log(arr);

  // const mapped = arr.map(item => {
  //   if (typeof item === 'string') {
  //     return item;
  //   }
  // });
  // console.log(mapped); // ['John', undefined, 'New York']


  // const find = arr.find(item => {
  //   return typeof item === 'number';
  // })

  // console.log(find); // 30
  



  // interface IValues {
  //   x: number;
  //   y: number;
  // }

  // const [values, setValues] = useState<IValues>({ x: 0, y: 0 });

  // const updateX = () => {
  //   setValues({
  //     ...values, // {x: 0, y: 0}
  //     x: values.x + 1, // {x: 1, y: 0}
  //   });
  // };
  // const updateY = () => {
  //   setValues({
  //     ...values,
  //     y: values.y + 1,
  //   })
  // };

  // const updateValue = (key: keyof IValues) => {
  //   setValues({
  //     ...values,
  //     [key]: values[key] + 1,
  //   });
  // };

  return (
    <>
      <Header />
      <Form />
    </>
  );
}

export default App;
