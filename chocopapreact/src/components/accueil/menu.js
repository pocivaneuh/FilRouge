import logo from "../../logo.png";

import { useState, useEffect } from "react";

import "../../App.scss";
import "./menu.scss";

const Logo = ({ png }) => (
  <img id="logo" src={logo} className="App-logo" alt="logo" />
);

function Menu() {
  const title = "FleuRIRE - ";
  const [logo, setLogo] = useState("LogoFleuRire");
  return (
    <header
      id="entetePrincipale"
      className="container-fluid position-fixed-top m-0 p-0"
    >
      <section id="HMenu" className="navbar navbar-expand-md m-0 p-0">
        <h1 className="accessibility">Menu Principal</h1>
        <p className="accessibility">
          <a
            href="#ContenuPrincipal"
            title="Accéder directement au contenu principal de cette page"
          >
            Passer le menu
          </a>
        </p>

        <a className="navbar-brand m-0" routerLink="/accueil">
          <Logo />
        </a>
        <button
          id="menuToggle"
          className="navbar-toggler z-index-tooltip"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="" role="button" aria-label="Toggle navigation">
            <i className="bi bi-list" id="imenuToggle"></i>
          </span>
        </button>

        <nav
          role="navigation"
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto mb-0 ">
            <li className="nav-item text-style1">
              <a className="nav-link m-0" routerLink="/accueil">
                Accueil
              </a>
            </li>
            <li className="nav-item text-style1">
              <a className="nav-link m-0" routerLink="/boutique">
                Boutique
              </a>
            </li>
            <li className="nav-item panier">
              <a className="nav-link m-0" routerLink="/panier">
                {" "}
                &nbsp;0 &nbsp;<i className="bi bi-cart4" id="panier"></i>
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  );
}

export default Menu;
