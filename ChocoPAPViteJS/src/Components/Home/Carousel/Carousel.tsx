import { useState } from "react";
import { CarouselSlide } from "./CarouselSlide/CarouselSlide.tsx";
import { slidesList } from '../../../Datas/slidesList.ts';

import "./Carousel.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft as PreviousIcon, faChevronRight as NextIcon,} from '@fortawesome/free-solid-svg-icons';

export const Previous = ( ) => 
    {
      return (
        <a className="carousel-control-prev" role="button" title="Précédent">
            <FontAwesomeIcon icon={PreviousIcon}/>
        </a>
    )};

export const Next = ( ) => 
    {
        return (
        <a className="carousel-control-next" role="button" title="Suivant">
            <FontAwesomeIcon icon={NextIcon}/>
        </a>
    )};

export const Carousel = () => {

  const [activeSlide, setActiveSlide] = useState(slidesList[0]);

  return (

    <div className="carousel-container">
        <div id="crslChocoAccueil" className="carousel slide" data-ride="carousel">
            <CarouselSlide
                slideClass="carousel-item"
                idSlide={activeSlide.idSlide}
                urlImgSlide={activeSlide.urlImgSlide}
                textAltImgSlide={activeSlide.textAltImgSlide}
            />
        </div>
        <div className="navigation">
            <div id="carousel-thumbs" className="carousel slide" data-ride="carousel">
                <div className="navCarousel-inner">
                    <div className="navCarousel-item">
                        <div className="row">
                            {slidesList.map((slide) => (
                                <CarouselSlide
                                    key = {slide.idSlide}
                                    idSlide={slide.idSlide}
                                    slideClass = "thumbs"
                                    urlImgSlide={slide.urlImgSlide}
                                    textAltImgSlide={slide.textAltImgSlide}
                                    onSelect={ () => { setActiveSlide(slide);   }}
                                />
                            ))}
                        </div>
                    </div>
                </div>                    
                <div id="Navigation">
                  <Previous />
                  <Next />
                </div> 
            </div>
        </div>
  </div>        
  );
};
