import React, { Component } from "react";
import WithCss from "hocs/styles/WithCss";
import {
  POST_PHONE_AUTHENTICATION,
  POST_EMAIL_AUTHENTICATION
} from "schemas/authentication";
import { graphql, compose } from "react-apollo";

import s from "./Authentication.css";

class Authentication extends Component {
  constructor() {
    super();
    this.state = {
      phoneNumber: 123,
      pinCode: 456
    };
  }

  _handlePhoneNumberOnChange = e => {
    this.setState({
      phoneNumber: e.target.value
    });
  };

  _handlePinCodeOnChange = e => {
    this.setState({
      pinCode: e.target.value
    });
  };

  _handleSubmit = () => {
    this.props
      .postPhoneAuthentication({
        variables: {
          phoneNumber: this.state.phoneNumber,
          pinCode: this.state.pinCode
        }
      })
      .then(({ data }) => {
        console.log(data, " <-- data");
      })
      .catch(e => {
        console.error("Fel inloggningsuppgifter");
      });
  };

  render() {
    const { phoneNumber, pinCode } = this.state;

    return (
      <main className={s({ container: true })}>
        {this.props.authenticated ? (
          <div>
            <h1>Du är inloggad</h1>
          </div>
        ) : (
          <div>
            <h1>Logga in</h1>
            <label htmlFor={"phoneNumber"} className={s({ label: true })}>
              Ditt telefonnummer
              <input
                name={"phoneNumber"}
                value={phoneNumber}
                placeholder={"Ange ditt telefonnummer"}
                onChange={this._handlePhoneNumberOnChange}
              />
            </label>
            <label htmlFor={"pinCode"} className={s({ label: true })}>
              Pinkod
              <input
                name={"pinCode"}
                value={pinCode}
                placeholder={"Ange pinkod"}
                onChange={this._handlePinCodeOnChange}
              />
            </label>
            <button onClick={this._handleSubmit}>Logga in!</button>
          </div>
        )}
      </main>
    );
  }
}

export default compose(
  graphql(POST_PHONE_AUTHENTICATION, {
    name: "postPhoneAuthentication"
  }),
  graphql(POST_EMAIL_AUTHENTICATION, {
    name: "postEmailAuthentication"
  })
)(WithCss(Authentication, s));
