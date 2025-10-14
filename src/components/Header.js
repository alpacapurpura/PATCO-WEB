import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import '../css/Header.css';

const Header = () => {
  const handleHeader = (e) => {
    let element = e.target;
    element
      .closest('nav.op-header')
      .querySelector("input[type='checkbox']").checked = false;
  };
  return (
    <nav className="op-header">
      <input type="checkbox" id="checkmenu" />
      <label htmlFor="checkmenu" className="checkButton">
        <span></span>
        <span></span>
        <span></span>
      </label>
      <Link to="/" className="op-logo" />
      <ul>
        <li>
          <NavLink
            exact
            to="/"
            activeClassName="active"
            onClick={(e) => handleHeader(e)}
          >
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/producto"
            activeClassName="active"
            onClick={(e) => handleHeader(e)}
          >
            Producto
          </NavLink>
        </li>
        {/* <li>
          <NavLink
            to="/historia"
            activeClassName="active"
            onClick={(e) => handleHeader(e)}
          >
            Historia
          </NavLink>
        </li> */}
        <li>
          <NavLink
            to="/responsabilidad"
            activeClassName="active"
            onClick={(e) => handleHeader(e)}
          >
            Responsabilidad Social
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contacto"
            activeClassName="active"
            onClick={(e) => handleHeader(e)}
          >
            Contacto
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
