import { NavLink, Link } from 'react-router-dom';
import './Header.css';

export const Header = () => {
  return (
    <nav className="nav">
      <Link className="nav-btn logo" to="/">
        socksBysocks
      </Link>

      <section className="nav-right">
        <NavLink className="nav-btn catalog" to="/">
          Catalog
        </NavLink>
        <NavLink className="nav-btn login" to="login">
          Login
        </NavLink>
        <NavLink className="nav-btn register" to="register">
          Register
        </NavLink>
        <button className="nav-btn profile" to="profile">
          Usr
        </button>
      </section>
    </nav>
  );
};
