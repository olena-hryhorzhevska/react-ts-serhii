import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './App.module.css';
import { ClickCounter } from '../ClickCounter/ClickCounter';
import { useState } from 'react';
import SpreadPractice from '../SpreadPractice/SpreadPractice';
import ProfileData from '../ProfileData/ProfileData';

function App() {

  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };

  interface IValues {
    x: number;  
    y: number;
  }

  const [values, setValues] = useState<IValues>({ x: 0, y: 0 });

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

  const updateValue = (key: keyof IValues) => {
    setValues({
      ...values,
      [key]: values[key] + 1,
    });
  };

  return (
    <>
      <Header />
      <ClickCounter value={count} onUpdate={handleClick} />
      <ClickCounter value={count} onUpdate={handleClick} />
      <ClickCounter value={count} onUpdate={handleClick} />
      <p>
        x: {values.x}, y: {values.y}
      </p>
      <button onClick={() => updateValue('x')}>Update X</button>
      <button onClick={() => updateValue('y')}>Update Y</button>
      <SpreadPractice />
      <Footer name="Serhii" age={18} city="New York" />

      <ProfileData/>
    </>
  );
}

export default App;
