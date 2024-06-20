
import { Carousel } from "./Caroussel/Carousel.tsx";
import { NavCarousel } from "./Caroussel/NavCarousel/NavCarousel.tsx";

import "../../App.css";
import "./Home.css";


import { slidesList } from '../../Datas/SlidesList.tsx';

import { Link } from "react-router-dom";

export const Home = ( ) =>
{
  return (
    <main id="ContenuPrincipal">
      <section className="row m-0">
          <div className="container mt-5">
            <div className="carousel-container row">
              <div id="crslChocoAccueil" className="carousel slide p-0" data-ride="carousel">
                  {slidesList.map(({ idSlide, urlImgSlide, textAltImgSlide }) => (
                      <Carousel
                        idSlide={idSlide}
                        urlImgSlide={urlImgSlide}
                        textAltImgSlide={textAltImgSlide}
                      />
                    ))
                  }
              </div>
              <div className="m-0 p-0">
                  {/* <NavCarousel /> */}
              </div>
            </div>
        </div>
        <div className="boutique text-style1" >
          <Link to={`/Boutique`}>VOIR LA BOUTIQUE</Link>
        </div>
      </section>
    </main>
  );
};
