import { useState } from "react";

import logo from "../../../logo.png";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars as Hamburger, faCartShopping as CartIco,} from '@fortawesome/free-solid-svg-icons';

import { Link } from "react-router-dom";

export const Cart = ( ) => 
    {
      return (
        <a className="nav-link m-0" href="/panier">
          &nbsp;0 &nbsp;<FontAwesomeIcon id="panier" icon={CartIco} bounce className="panier"/>
        </a>
      );
    };

import "../../../App.css";
import "./Header.css"

const Logo = () => (
  <img id="logo" src={logo} className="App-logo" alt="logo" />
);


export const Burger = ( ) => 
  {
    return (
      <FontAwesomeIcon id="imenuToggle" icon={Hamburger}/>
    );
  };

export const Header = ( ) =>
  {
    //  const closeMenuOnMobile = () => {
    //   if (window.innerWidth < 768) {
    //     const [isOpen, setOpen] = useState(false);
    //   }
    //     const [isOpen, setOpen] = useState(true);
    // }

    const [isOpen, setOpen] = useState(false);


    return (

      <header id="entetePrincipale">
        <section id="HMenu">
          <h1 className="accessibility">Menu Principal</h1>
          <p className="accessibility">
            <a
              href="#ContenuPrincipal"
              title="Accéder directement au contenu principal de cette page"
            >
              Passer le menu
            </a>
          </p>
  
          <Link to={`/`}><Logo /></Link>


          <button
            id="menuToggle"
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            title="Afficher/masquer le menu"
          >
            <Burger />
          </button>
            <nav
              role="navigation"
              id="navbarSupportedContent"
              className={isOpen ? '' : 'hide'}
            >
              <ul className="navbar-nav ">
                <li className="nav-item text-style1">
                  <Link to={`/`}>Accueil</Link>
                </li>
                <li className="nav-item text-style1">
                  <Link to={`/Boutique`}>Boutique</Link>
                </li>
                <li className="nav-item panier">
                  <Link to={`/Panier`}><Cart />Panier</Link>
                </li>
              </ul>
            </nav>
        </section>
      </header>
    );
  };

