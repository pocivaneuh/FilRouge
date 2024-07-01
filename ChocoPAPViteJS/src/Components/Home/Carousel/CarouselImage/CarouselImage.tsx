import { useState, FC, DOMAttributes, MouseEventHandler } from "react";

import "./CarouselImage.css";


export type slidesProps = {
    slideClass : string;
    urlImgSlide: string;
    textAltImgSlide : string;
    onSelect?: () => void;
  }

export const CarouselImage: FC<slidesProps> = ({
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
            <img className="slide" src={urlImgSlide} alt={textAltImgSlide} title={textAltImgSlide} />
        </div>
    </div>                
  );
};


