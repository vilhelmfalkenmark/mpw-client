import React, { Component } from "react";
import { Query } from "react-apollo";
import { GET_DELIVERIES } from "schemas/deliveries";
import WithCss from "hocs/styles/WithCss";
import s from "./Deliveries.css";

class Deliveries extends Component {
  render() {
    return (
      <main className={s({ container: true })}>
        <h1>Deliveries route</h1>
        <Query query={GET_DELIVERIES}>
          {({ data: { getDeliveries }, loading, error }) => {
            if (loading) return <p>LOADING.....</p>;
            if (error) return <p>ERROR!!!</p>;

            return getDeliveries.deliveries.map((delivery, index) => (
              <React.Fragment key={index}>
                <p>{`Date: ${delivery.date}`}</p>
                <p>{`Post code: ${delivery.postCode}`}</p>
              </React.Fragment>
            ));
          }}
        </Query>
      </main>
    );
  }
}

export default WithCss(Deliveries, s);
