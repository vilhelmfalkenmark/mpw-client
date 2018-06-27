import React, { Component } from "react";
import WithCss from "hocs/styles/WithCss";
import s from "./Authentication.css";

class Authentication extends Component {
  constructor() {
    super();
    this.state = {
      phoneNumber: "",
      pinCode: ""
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

  handleSubmit() {
    console.log("Skicka till GRAPHQL");
  }

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
          </div>
        )}
      </main>
    );
  }
}

export default WithCss(Authentication, s);
