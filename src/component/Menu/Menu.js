import React from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./menu.css";

export default function Menu({ children }) {
  return (
    <div className="menu-main">
      <Link to="/" className="logo">
        <Image
          src="https://cdn.bmkg.go.id/Web/Logo-BMKG-new-242x300.png"
          alt=""
          style={{ width: "20%", marginLeft: "5%", marginTop: "5%" }}
        />
      </Link>
      <input
        class="menu-icon"
        type="checkbox"
        id="menu-icon"
        name="menu-icon"
      />
      <label for="menu-icon"></label>
      <nav class="nav">
        <ul class="pt-5">
          <li>
            <Link to={"/"}>Home</Link>
          </li>

          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li>
            <Link to={"/dashboard"}>Dashboard</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
        </ul>
      </nav>
      <div class="section-center">{children}</div>
    </div>
  );
}
