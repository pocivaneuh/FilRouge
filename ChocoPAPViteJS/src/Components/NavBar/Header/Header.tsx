import logo from "../../../logo.png";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faBars } from '@fortawesome/free-solid-svg-icons';

import { useState, useEffect } from "react";

import "../../../App.scss";
import "./Header.scss"

const Logo = () => (
  <img id="logo" src={logo} className="App-logo" alt="logo" />
);

export const Cart = ( ) => 
  {
    return (
      <a className="nav-link m-0" href="/panier">
        &nbsp;0 &nbsp;<FontAwesomeIcon id="panier" icon={faCartShopping} bounce className="panier"/>
      </a>
    );
  };

  export const Burger = ( ) => 
    {
      return (
        <span className="Burger" role="button" aria-label="Toggle navigation">
              <FontAwesomeIcon id="imenuToggle" icon={faBars} className="menuToggle"/>
        </span>
      );
    };

export const Header = ( ) =>
  
  {
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
  
          <a className="navbar-brand m-0" href="/accueil" title="logo">
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
            <Burger />
          </button>
  
          <nav
            role="navigation"
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-0 ">
              <li className="nav-item text-style1">
                <a className="nav-link m-0" href="/accueil">
                  Accueil
                </a>
              </li>
              <li className="nav-item text-style1">
                <a className="nav-link m-0" href="/boutique">
                  Boutique
                </a>
              </li>
              <li className="nav-item panier">
                  <Cart />
              </li>
            </ul>
          </nav>
        </section>
      </header>
    );
  };

