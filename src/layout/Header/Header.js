import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";
import Routes from "router/routes";
import WithCss from "hocs/styles/WithCss";
import s from "./Header.css";

class Header extends Component {
  render() {
    return (
      <nav>
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
    );
  }
}
export default withRouter(WithCss(Header, s));
