import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faBars } from '@fortawesome/free-solid-svg-icons';

import "../../../App.scss";

export const Cart = ( ) => 
  {
    return (
      <span>
        <FontAwesomeIcon id="panier" icon={faCartShopping} bounce className="panier"/>
      </span>
    );
  };


export const roads = [
    {
      title: "Home",
      href: "#",
    },
    {
      title: "Shop",
      href: "#",
    },
    {
      title: "ShopCart",
      href: "#",
    },
  ];