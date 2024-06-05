import "./Carousel.scss";

import { NavCarousel } from "./NavCarousel/NavCarousel"

export const Carousel = ( ) =>
{
  return (
    <div className="container mt-5">
        <div className="carousel-container row">
            <div id="crslChocoAccueil" className="carousel slide p-0" data-ride="carousel">
                <div className="carousel-inner">
                   <div className="carousel-item active">
                        <img src="{{ urlImgSlide }}" className="d-block w-100" [alt]="textAltImgSlide" title="Illustration de la page d'accueil">
                    </div>
                </div>                
            </div>
            <div className="m-0 p-0">
                <NavCarousel />
            </div>
        </div>
    </div>
  );
};
