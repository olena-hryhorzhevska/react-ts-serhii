import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav>
      <Link to="/">Главная страница</Link> | <Link to="/about">О нас</Link> |{' '}
      <Link to="/contacts">Контакты</Link> |{' '}
    </nav>
  );
}
