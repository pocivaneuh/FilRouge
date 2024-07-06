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
 
  // const imgClassName = slideClass === 'thumbs' ? 'navcarousel-inner' : 'carousel-inner';

  return (
    <div className="carousel-inner" >
      <div className={slideClass} onClick={onClick}>
        <img src={urlImgSlide} alt={textAltImgSlide} title={textAltImgSlide}/>
      </div>
    </div>          
  );
};


