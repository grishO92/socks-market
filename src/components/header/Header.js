import { NavLink, Link } from 'react-router-dom';
import './Header.css';
import { images } from '../../images.js';

export const Header = () => {
  return (
    <nav className="nav">
      <Link className="nav-btn btn-logo" to="/">
        socksBysocks
      </Link>

      <section className="nav-right">
        <NavLink className="nav-btn" to="/catalog">
          Catalog
        </NavLink>
        <NavLink className="nav-btn" to="login">
          Login
        </NavLink>
        <NavLink className="nav-btn" to="register">
          Register
        </NavLink>
        <button className="nav-btn btn-profile" to="profile">
          <img
            src="https://images.pexels.com/photos/1287513/pexels-photo-1287513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </button>
      </section>
    </nav>
  );
};
