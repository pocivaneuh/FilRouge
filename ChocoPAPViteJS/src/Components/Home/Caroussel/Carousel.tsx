import "./Carousel.css";

import { FC } from "react";

export type slidesProps = {
    idSlide: number;
    urlImgSlide: string ;
    textAltImgSlide : string ;
  }

export const Carousel: FC<slidesProps> = ({idSlide,urlImgSlide,textAltImgSlide,}) => {
  return (
    <div className="carousel-inner">
        <div className="carousel-item">
            <img className="slide" src={urlImgSlide} alt={textAltImgSlide} title={textAltImgSlide} />
        </div>
    </div>                
  );
};


