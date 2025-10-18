import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">Sillas-Store</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li><Link to="/categoria/oficina">Oficina</Link></li>
          <li><Link to="/categoria/gaming">Gaming</Link></li>
          <li><Link to="/categoria/hogar">Hogar</Link></li>
        </ul>
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;