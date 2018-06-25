import React, { Component } from "react";
import { Query } from "react-apollo";
import { GET_DELIVERIES } from "schemas/deliveries";
import WithCss from "hocs/styles/WithCss";
import s from "./Root.css";

class Root extends Component {
  render() {
    return (
      <div
        className={s({ container: true, loggedIn: this.props.userLoggedIn })}
      >
        <h1>Mypages Web</h1>
        <Query query={GET_DELIVERIES}>
          {({ data: { getDeliveries }, loading, error }) => {
            if (loading) return <p>LOADING.....</p>;
            if (error) return <p>ERROR!!!</p>;

            return getDeliveries.deliveries.map(delivery => (
              <React.Fragment>
                <p>{`Date: ${delivery.date}`}</p>
                <p>{`Post code: ${delivery.postCode}`}</p>
              </React.Fragment>
            ));
          }}
        </Query>
      </div>
    );
  }
}

export default WithCss(Root, s);
