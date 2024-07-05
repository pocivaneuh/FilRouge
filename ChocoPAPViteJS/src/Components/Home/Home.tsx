
import { Carousel } from "./Carousel/Carousel.tsx";

import "./Home.css";

import { Link } from "react-router-dom";

export const Home = ( ) =>
{
    return (
    <main id="ContenuPrincipal">
      <Carousel />
      <div className="boutique text-style1" >
        <Link to={`/Boutique`}>VOIR LA BOUTIQUE</Link>
      </div>
    </main>
  );
};
