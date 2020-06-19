import React, { Component } from "react";
import Footers from "./footer";

class About extends Component {
  render() {
    return (
      <div>
        <div className="about-main">
          <h2 className="text-about">Trasporti Amatrudo s.r.l.</h2>
          <div className="text-about-info">
            L'azienda Trasporti Amatrudo S.r.l. si trova in Via Zeccagnuolo n.
            19, 84010, San Valentino Torio, Salerno. Il numero di PARTITA IVA è
            IT03659240653. La sua attività è Codice Ateco 2007 (49.41)
            "Trasporto di merci su strada". Il report aggiornato è stato emesso
            il 28/01/2015. La forma giuridica della società Trasporti Amatrudo
            S.r.l. è "SOCIETA' A RESPONSABILITA' LIMITATA - Società di
            capitale".
          </div>
          <br />
          <br />
          <br />

          <ul class="cbp-ig-grid">
            <li>
              <a href="#">
                <span class="cbp-ig-icon cbp-ig-icon-shoe"></span>
                <h3 class="cbp-ig-title"></h3>
                <span class="cbp-ig-category">
                  Assicuriamo puntualità e sicurezza, grazie anche ad un'ampia
                  area dedicata allo stoccaggio merci.
                </span>
              </a>
            </li>
            <li>
              <a href="#">
                <span class="cbp-ig-icon cbp-ig-icon-ribbon"></span>
                <h3 class="cbp-ig-title"></h3>
                <span class="cbp-ig-category">
                  Gestiamo una flotta all’avanguardia che sa soddisfare ogni
                  necessità.
                </span>
              </a>
            </li>
            <li>
              <a href="#">
                <span class="cbp-ig-icon cbp-ig-icon-milk"></span>
                <h3 class="cbp-ig-title"></h3>
                <span class="cbp-ig-category">
                  Tuteliamo l'integrità dei prodotti grazie a tecniche e
                  conoscenze maturate negli anni.
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default About;
