import logo_facebook from "../../../Assets/Images/logo_facebook.png";
import logo_instagram from "../../../Assets/Images/logo_instagram.png";
import logo_twitter from "../../../Assets/Images/logo_twitter.png";

import "./Footer.css";


export const Footer = ( ) =>
    {
        return (
            /* FOOTER */
            <footer id="footer">
                <section className="row">
                    <div id="informations" className="rubriques">
                        <div className="text-style3">Choco pap</div>
                        <div className="text-style4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna 
                            aliqua
                        </div>
                    </div>
                    <div id="contact" className="rubriques">
                        <div className="text-style3">Contact</div>
                        <div className="text-style4">
                            <p>Adresse : 51 rue du chocolat 75000 Paris  <br />
                            Téléphone: 01 23 45 67 89 <br />
                            Horaires: 9h00-17h00 du Lundi au vendredi</p>
                        </div>
                    </div>
                    <div id="social-network" className="rubriques">
                        <div><img src={logo_facebook}  alt="facebook" /></div>
                        <div><img src={logo_instagram} width="40" height="40" alt="instagram" /></div>
                        <div><img src={logo_twitter} width="40" height="40" alt="twitter" /></div>
                    </div>
                </section>
            </footer>
          );
    };
