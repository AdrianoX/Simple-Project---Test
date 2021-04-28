import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navigation.css";

const list = [
  { name: "start", path: "/", exact: true },
  { name: "products", path: "/products" },
  { name: "contact", path: "/contact" },
  { name: "admin panel", path: "/admin" },
];

const Navigation = () => {
  const menu = list.map((item) => (
    <li key={item.name}>
      <NavLink to={item.path} exact={item.exact ? item.exact : false}>
        {item.name}
      </NavLink>
    </li>
  ));

  return (
    <nav className="main">
      <ul>
        {/* <li>
          <NavLink to="/">Start</NavLink>
        </li>
      </ul>
      <ul>
        <li>
          <NavLink to="Products">Products</NavLink>
        </li>
      </ul>
      <ul>
        <li>
          <NavLink to="contact">Contacts</NavLink>
        </li>
      </ul>
      <ul>
        <li>
          <NavLink to="admin">Admin Panel</NavLink>
        </li> */}
        {menu}
      </ul>
    </nav>
  );
};

export default Navigation;
