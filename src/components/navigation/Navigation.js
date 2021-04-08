import React, { useContext, useEffect } from "react";
import "./Navigation.scss";
import { NavLink, useLocation } from "react-router-dom";
// import Logo from "../../assets/Logo.png";
import { AuthContext } from "../../auth/AuthContext";
import { NotificationContext } from "../notification/NotificationContext";
// navigation for devices that have width 1025 px or more
const Navigation = () => {
  const [isAuth, , , , , , logout, authCheck] = useContext(AuthContext);
  const [, , , , notify] = useContext(NotificationContext);
  useEffect(() => {
    authCheck();
  }, [authCheck]);
  // useLocation is used for styling active component
  const { pathname } = useLocation();

  return (
    <div className="navigation">
      <NavLink
        to="/"
        isActive={() => {
          return pathname === "/houseofbooks/" || pathname === "/";
        }}
        className="nav-item "
        activeClassName="active-nav"
      >
        Home
      </NavLink>
      <div className="categories">
        <NavLink to="/books" activeClassName="active-nav" className="nav-item ">
          Books
        </NavLink>
        <div className="categories-list">
          <NavLink to="/books/all" className="categories-item">
            All
          </NavLink>
          <NavLink to="/books/action" className="categories-item">
            Action and Adventure
          </NavLink>
          <NavLink to="/books/crime" className="categories-item">
            Crime
          </NavLink>
          <NavLink to="/books/drama" className="categories-item">
            Drama
          </NavLink>
          <NavLink to="/books/fantasy" className="categories-item">
            Fantasy
          </NavLink>
          <NavLink to="/books/mystery" className="categories-item">
            Mystery
          </NavLink>
          <NavLink to="/books/romance" className="categories-item">
            Romance
          </NavLink>
          <NavLink to="/books/thriller" className="categories-item">
            Thriller
          </NavLink>
          <NavLink to="/books/other" className="categories-item">
            Other
          </NavLink>
        </div>
      </div>

      {isAuth ? (
        <div
          role="menuitem"
          tabIndex={0}
          className="nav-item"
          type="button"
          onClick={() => {
            logout();
            notify("You have been logged out");
          }}
          onKeyDown={() => {
            logout();
            notify("You have been logged out");
          }}
        >
          Log out
        </div>
      ) : (
        <NavLink
          to="/login"
          isActive={() => {
            return (
              pathname === "/login" ||
              pathname === "/signup" ||
              pathname === "/reset"
            );
          }}
          exact
          className="nav-item "
          activeClassName="active-nav"
        >
          Log in
        </NavLink>
      )}
      <NavLink
        to="/cart"
        exact
        activeClassName="active-nav"
        className="nav-item nav-item-small"
      >
        Cart
      </NavLink>
    </div>
  );
};

export default Navigation;
