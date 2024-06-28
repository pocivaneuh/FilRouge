
import { Carousel } from "./Caroussel/Carousel.tsx";
import { NavCarousel } from "./Caroussel/NavCarousel/NavCarousel.tsx";

import { useState} from "react";

import "../../App.css";
import "./Home.css";


import { slidesList } from '../../Datas/slidesList.ts';

import { Link } from "react-router-dom";

export const Home = ( ) =>
  {
    const [isActive, setIsActive] = useState(1);
    
    return (
    <main id="ContenuPrincipal">
            <div className="carousel-container row">
              <div id="crslChocoAccueil" className="carousel slide" data-ride="carousel">
                 {slidesList.map(({ slideClass, idSlide, urlImgSlide, textAltImgSlide }) => {
                    if (idSlide === isActive) {
                      return <Carousel
                              slideClass = "carousel-item"
                              idSlide={idSlide}
                              urlImgSlide={urlImgSlide}
                              textAltImgSlide={textAltImgSlide}
                            />;
                    }
                    return null;
                 })}
              </div>
              <div className="navigation">
                  <NavCarousel />
              </div>
            </div>
        <div className="boutique text-style1" >
          <Link to={`/Boutique`}>VOIR LA BOUTIQUE</Link>
        </div>
    </main>
  );
};
