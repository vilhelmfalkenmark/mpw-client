import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";
import Routes from "router/routes";
import WithCss from "hocs/styles/WithCss";
import s from "./Header.css";

class Header extends Component {
  render() {
    return (
      <header className={s({ container: true })}>
        <nav>
          {this.props.authenticated && (
            <p>Inloggad som {this.props.currentUser.name}</p>
          )}
          <ul>
            {Routes.map((route, index) => (
              <li key={index}>
                <NavLink
                  exact={route.exact}
                  to={route.path}
                  className={s({ link: true })}
                  activeClassName={s({ isActive: true })}
                >
                  {route.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    );
  }
}
export default withRouter(WithCss(Header, s));
