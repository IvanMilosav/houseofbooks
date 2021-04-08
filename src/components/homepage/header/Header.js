import React from "react";
import { NavLink } from "react-router-dom";
import headerImage from "../../../assets/header.svg";
import logo from "../../../assets/newLogo.png";
import "../../../styles/Animations.scss";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header ">
      <img className="the-logo" src={logo} alt="logo" />

      <div className="header-quote">
        <div className="header-title animated fade-in-left">
          Welcome to the <div className="colored-text">House of Books</div>{" "}
          place where all books live happily
        </div>
        <NavLink to="/books/all">
          <button
            type="button"
            className="header-button animated-small-delay fade-in-left"
          >
            Explore House of Books
          </button>
        </NavLink>
      </div>

      <img className="header-image" src={headerImage} alt="header" />
    </div>
  );
};

export default Header;
