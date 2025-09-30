import { CurrencyConverter } from '../CurrencyConverter/CurrencyConverter';
import Effect from '../Effect/Effect';
import Header from '../Header/Header';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import './App.module.css';

function App() {

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
      <ShoppingCart />
      <CurrencyConverter />

      <Effect />
    </>
  );
}

export default App;
