import { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Header.css';

export const Header = () => {
  const [navbar, setNavbar] = useState(false);

  useEffect(() => {
    const changeNavAppearance = () => {
      console.log(window.scrollY);
      window.scrollY > 700 ? setNavbar(true) : setNavbar(false);
    };

    window.addEventListener('scroll', changeNavAppearance);

    return () => {
      window.removeEventListener('scroll', changeNavAppearance);
    };
  }, [navbar]);

  return (
    <nav className={navbar ? 'nav active' : 'nav'}>
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
            className="profile-pic"
            src="https://images.pexels.com/photos/1287513/pexels-photo-1287513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </button>
      </section>
    </nav>
  );
};
