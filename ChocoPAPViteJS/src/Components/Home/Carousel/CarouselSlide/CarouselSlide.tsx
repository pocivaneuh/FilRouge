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

  const imgClassName = slideClass === 'thumbs' ? 'thumbs' : '';

  return (
    <div className="carousel-inner" onClick={onClick}>
      <div>
        <img className={imgClassName} src={urlImgSlide} alt={textAltImgSlide} title={textAltImgSlide}/>
      </div>
    </div>          
  );
};


