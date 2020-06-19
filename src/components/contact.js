import React, { Component } from "react";
import Footers from "./footer";

class Contact extends Component {
  render() {
    return (
      <div>
        <div className="contact-wrapper">
          <div className="contacts">
            <i class="material-icons">&#xe0b0;</i>
            <h2>Telefono</h2>
            <p>+39 081 939907</p>
          </div>
          <div className="contacts">
            <i class="material-icons">&#xe0bc;</i>
            <h2>Fax</h2>
            <p>+39 081 939906</p>
          </div>
          <div className="contacts">
            <i class="material-icons">&#xe0be;</i>
            <h2>Email</h2>
            <p>trasportiamatrudo@gmail.com</p>
          </div>
          <div className="contacts">
            <i class="material-icons">&#xe55f;</i>
            <h2>Indirizzo </h2>
            <p>Via Zeccagnuolo n.19, San Valentino Torio,</p>
            <p> Salerno, ITALIA, 84010</p>
          </div>
          <div className="contacts">
            <i class="material-icons">&#xe53b;</i>
            <h2>N° di P. IVA </h2>
            <p>IT03659240653</p>
          </div>
        </div>
        <Footers />
      </div>
    );
  }
}

export default Contact;
