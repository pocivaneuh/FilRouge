
import { Carousel } from "../Carousel.tsx";

import "./NavCarousel.css";
import "../../../../App.css";

import { slidesList } from '../../../../Datas/slidesList.ts';

export const NavCarousel = ( ) =>
{
  return (
    <div id="carousel-thumbs" className="carousel slide" data-ride="carousel">
        <div className="navCarousel-inner">
            <div className="navCarousel-item">
                <div className="row">
                    {slidesList.map(({ slideClass, idSlide, urlImgSlide, textAltImgSlide }) => (
                        <Carousel
                            slideClass = "thumbs"
                            idSlide={idSlide}
                            urlImgSlide={urlImgSlide}
                            textAltImgSlide={textAltImgSlide}
                        />
                        ))
                    }
                </div>
            </div>
        </div>                    
        <div id="Navigation">
            <a className="carousel-control-prev" role="button" title="Précédent">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            </a>

            <a className="carousel-control-next" role="button" title="Suivant">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
            </a>
        </div> 
    </div>
  );
};
