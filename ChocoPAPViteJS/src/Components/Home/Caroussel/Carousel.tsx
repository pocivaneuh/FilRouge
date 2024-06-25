import { useState, FC } from "react";

import "./Carousel.css";


export type slidesProps = {
    slideClass : string;
    idSlide: number;
    urlImgSlide: string ;
    textAltImgSlide : string ;
  }

export const Carousel: FC<slidesProps> = ({slideClass,idSlide,urlImgSlide,textAltImgSlide,}) => {

  const [isActive, setIsActive] = useState(1);

  return (
    <div className="carousel-inner">
        <div className={slideClass} >
            <img className="slide" src={urlImgSlide} alt={textAltImgSlide} title={textAltImgSlide} onClick={() => setIsActive(idSlide)}/>
        </div>
    </div>                
  );
};


