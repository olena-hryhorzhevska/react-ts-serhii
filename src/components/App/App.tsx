import Counter from '../Counter/Counter';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import LoginStatus from '../Login/Login';
import './App.module.css'


function App() {
  const isLoggedInT = false;

  return (
    <>
      <Header />
      <Counter />
      <LoginStatus isLoggedIn={isLoggedInT} />
      <Footer name="Serhii" age={18} city="New York" />
    </>
  );
}

export default App;
