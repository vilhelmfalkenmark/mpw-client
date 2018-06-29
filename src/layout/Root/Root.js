import React, { Component } from "react";

import WithCss from "hocs/styles/WithCss";
import Routes from "router/routes";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloConsumer } from "react-apollo";

import EntryPoint from "hocs/EntryPoint";
import AuthenticateBeforeRender from "hocs/AuthenticateBeforeRender";

import s from "./Root.css";

class Root extends Component {
  render() {
    return (
      <ApolloConsumer>
        {client => (
          <Router>
            <div
              className={s({
                container: true,
                loggedIn: this.props.userLoggedIn
              })}
            >
              <Switch>
                {Routes.map((route, index) => (
                  <Route
                    key={index}
                    exact={route.exact}
                    path={route.path}
                    component={AuthenticateBeforeRender({
                      EntryPoint: EntryPoint({
                        EntryPoint: route.component,
                        renderHeader: route.renderHeader,
                        renderFooter: route.renderFooter,
                        pageRequiresAuthentication: route.requiresAuthentication
                      })
                      // ApolloClient: client,
                    })}
                  />
                ))}
              </Switch>
            </div>
          </Router>
        )}
      </ApolloConsumer>
    );
  }
}

// class Root extends Component {
//   render() {
//     return (
//       <div
//         className={s({ container: true, loggedIn: this.props.userLoggedIn })}
//       >
//         <h1>Mypages Web</h1>
//         <Query query={GET_DELIVERIES}>
//           {({ data: { getDeliveries }, loading, error }) => {
//             if (loading) return <p>LOADING.....</p>;
//             if (error) return <p>ERROR!!!</p>;

//             return getDeliveries.deliveries.map((delivery, index) => (
//               <React.Fragment key={index}>
//                 <p>{`Date: ${delivery.date}`}</p>
//                 <p>{`Post code: ${delivery.postCode}`}</p>
//               </React.Fragment>
//             ));
//           }}
//         </Query>
//       </div>
//     );
//   }
// }

export default WithCss(Root, s);
