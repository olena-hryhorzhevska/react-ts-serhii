import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = () => {
    const isSuccess = true; // Здесь можно добавить реальную логику проверки логина
    if (isSuccess) {
      navigate('about', {replace: true}); // Переход на страницу "О нас" после успешного входа
    }
  };

  return (
    <>
      <h1>Страница входа</h1>
      <button onClick={handleLogin}>Войти</button>
    </>
  );
}