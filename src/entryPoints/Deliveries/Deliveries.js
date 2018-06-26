import React, { Component } from "react";
import WithCss from "hocs/styles/WithCss";
import s from "./Deliveries.css";

class Deliveries extends Component {
  render() {
    return (
      <main className={s({ container: true })}>
        <h1>Deliveries route</h1>
      </main>
    );
  }
}

export default WithCss(Deliveries, s);
