import { DOMAttributes, FC } from "react";

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
      const onClick: DOMAttributes<HTMLDivElement>['onClick'] = () => {
        if (typeof onSelect !== 'undefined') {
            onSelect();
        }
      };

  return (
    <div className="carousel-inner" onClick={onClick}>
      <div className={slideClass} >
        <img className="slide" src={urlImgSlide} alt={textAltImgSlide} title={textAltImgSlide}/>
      </div>
    </div>          
  );
};


