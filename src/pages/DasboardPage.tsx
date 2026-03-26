import { Link, Outlet } from "react-router-dom";

export default function DashboardPage() {
  return (
    <div>
      <h2>Dashboard</h2>
      <nav>
        <Link to="/dashboard">Главная страница</Link>
        <Link to="/dashboard/profile">Профиль</Link>
        <Link to="/dashboard/settings">Настройки</Link>
      </nav>

      <Outlet />
    </div>
  );
}