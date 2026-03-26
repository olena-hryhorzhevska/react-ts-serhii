import './App.module.css';
import Navigation from '../../components/Navigation';
import HomePage from '../../pages/HomePage';
import AboutPage from '../../pages/AboutPage';
import ContactPage from '../../pages/ContactPage';
import NotFoundPage from '../../pages/NotFoundPage';
import LoginPage from '../../pages/LoginPage';
import ProductPage from '../../pages/ProductPage';
import DashboardPage from '../../pages/DasboardPage';
import DashboardHomePage from '../../pages/DashboardHomePage';
import SettingsPage from '../../pages/SettingsPage';
import ProfilePage from '../../pages/ProfilePage';
import { Routes, Route } from 'react-router-dom';

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

  // const handleSubmit = (username: string): void => {
  //   console.log('Order placed by:', username);
  // };

  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const openModal = () => setIsModalOpen(true);
  // const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <Navigation />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contacts" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/dashboard" element={<DashboardPage />}>
          <Route index element={<DashboardHomePage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
