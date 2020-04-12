import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

export class Header extends Component {
  render() {
    return (
      <header className="page-header">
        <div className="logo">LOGO</div>
        <nav className="global-nav">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>
    );
  }
}
