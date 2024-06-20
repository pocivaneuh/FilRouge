import "../../App.css";
import { Carousel } from "./Caroussel/Carousel";
import "./Home.css";

import { Link } from "react-router-dom";

export const Home = ( ) =>
{
  return (
    <main id="ContenuPrincipal">
        <section className="row m-0">
                <Carousel />
                <div id="boutique" className="mt-5 mb-3 text-style1" >
                  <Link to={`/Boutique`}>VOIR LA BOUTIQUE</Link>
                </div>
        </section>
    </main>
  );
};
