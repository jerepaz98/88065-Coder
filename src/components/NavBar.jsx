import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../components/CartWidget';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">Sillas-Store</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/categoria/oficina">Oficina</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/categoria/gaming">Gaming</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/categoria/hogar">Hogar</Link>
          </li>
        </ul>
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;