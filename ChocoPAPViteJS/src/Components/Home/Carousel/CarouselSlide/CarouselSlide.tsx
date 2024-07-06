import { FC } from "react";

import "./CarouselSlide.css";

export type slidesProps = {
    slideClass : string;
    idSlide: number;
    urlImgSlide: string ;
    textAltImgSlide : string ;
    onSelect?: () => void ;
  }

export const CarouselSlide: FC<slidesProps> = ({
    slideClass,
    urlImgSlide,
    textAltImgSlide,
    onSelect,
  }) => {
      function handleClick() {
        if (typeof onSelect !== 'undefined') {
            onSelect();
        }
      };
 
  return (
    <div className="carousel-inner" >
      <div className={slideClass} onClick={() => handleClick()}>
        <img src={urlImgSlide} alt={textAltImgSlide} title={textAltImgSlide}/>
      </div>
    </div>          
  );
};


