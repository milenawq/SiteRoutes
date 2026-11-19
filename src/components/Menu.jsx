import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <nav className="menu">
      <Link to="/">Главная</Link>
      <Link to="/about">О сайте</Link>
      <Link to="/cart">Корзина</Link>
      <Link to="/contacts">Контакты</Link>
    </nav>
  );
}