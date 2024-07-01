

import { useState } from "react";
import { CarouselImage } from "./CarouselImage/CarouselImage";
import { slidesList } from "../../../Datas/slidesList";
import "./Carousel.css"

export const Carousel = () => {
    const [activeSlide, setActiveSlide] = useState(slidesList[0]);

    return (
        <div className="carousel-container row">
            <div id="crslChocoAccueil" className="carousel slide" data-ride="carousel">
                <CarouselImage
                    slideClass="carousel-item"
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
                                    <CarouselImage
                                        slideClass="thumbs"
                                        urlImgSlide={slide.urlImgSlide}
                                        textAltImgSlide={slide.textAltImgSlide}
                                        onSelect={() => { setActiveSlide(slide); }}
                                    />
                                ))}
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
            </div>
        </div>
    );
};
