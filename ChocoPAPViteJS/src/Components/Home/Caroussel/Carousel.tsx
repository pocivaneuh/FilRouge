import "./Carousel.css";

import { FC } from "react";

export type slidesProps = {
    slideClass : string;
    idSlide: number;
    urlImgSlide: string ;
    textAltImgSlide : string ;
  }

export const Carousel: FC<slidesProps> = ({slideClass,idSlide,urlImgSlide,textAltImgSlide,}) => {
  return (
    <div className="carousel-inner">
        <div className={slideClass} >
            <img className="slide" src={urlImgSlide} alt={textAltImgSlide} title={textAltImgSlide} />
        </div>
    </div>                
  );
};


