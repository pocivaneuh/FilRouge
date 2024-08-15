import { FC, DOMAttributes } from "react";

import "./CarouselSlide.css";

export interface CarouselSlideProps {
    slideClass : string;
    idSlide: number;
    urlImgSlide: string ;
    textAltImgSlide : string ;
    onSelect?: () => void ;
  }

export const CarouselSlide: FC<CarouselSlideProps> = ({
    slideClass,
    urlImgSlide,
    textAltImgSlide,
    onSelect,
  }) => {
    const handleClick: DOMAttributes<HTMLDivElement>['onClick'] = () => {
      if (typeof onSelect !== 'undefined') {
          onSelect();
      }
    };
 
  return (
    <div className="carousel-inner" >
      <div className={slideClass} onClick={handleClick}>
        <img src={urlImgSlide} alt={textAltImgSlide} title={textAltImgSlide}/>
      </div>
    </div>          
  );
};


