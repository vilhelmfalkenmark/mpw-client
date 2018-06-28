import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";
import Routes from "router/routes";
import WithCss from "hocs/styles/WithCss";
import s from "./Header.css";

class Header extends Component {
  _renderOpenRoutes() {
    return Routes.filter(route => route.requiresAuthentication === false).map(
      (route, index) => (
        <li key={index}>
          <NavLink
            exact={route.exact}
            to={route.navLink}
            className={s({ link: true })}
            activeClassName={s({ isActive: true })}
          >
            {route.title}
          </NavLink>
        </li>
      )
    );
  }

  _renderLoggedInRoutes() {
    return Routes.map((route, index) => (
      <li key={index}>
        <NavLink
          exact={route.exact}
          to={route.navLink}
          className={s({ link: true })}
          activeClassName={s({ isActive: true })}
        >
          {route.title}
        </NavLink>
      </li>
    ));
  }

  render() {
    return (
      <header className={s({ container: true })}>
        <nav>
          {this.props.authenticated && (
            <p>Inloggad som {this.props.currentUser.name}</p>
          )}
          <ul>
            {this.props.authenticated
              ? this._renderLoggedInRoutes()
              : this._renderOpenRoutes()}
          </ul>
        </nav>
      </header>
    );
  }
}
export default withRouter(WithCss(Header, s));
