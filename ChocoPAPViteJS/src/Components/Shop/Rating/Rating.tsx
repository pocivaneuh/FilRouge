import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { faStar as  faHeartEmpty } from '@fortawesome/free-regular-svg-icons';
import { faStar as faHeartFilled } from '@fortawesome/free-solid-svg-icons';
import { faStarHalfStroke as faHeartHalf } from '@fortawesome/free-solid-svg-icons';

import { FC } from "react";

import "../../../App.css";
import "./Rating.css";

//propal pour le nom HeartEmpty, HeartHalf, HeartFull

// Autre manière de fairetype RatingIconProps = FontAwesomeIconProps
//const RatingIcon: FC<RatingIconProps> = (props) => (
//type RatingIconProps =Omit<FontAwesomeIconProps, 'bounce' />

const RatingIcon: FC<FontAwesomeIconProps> = (props) => (
  <FontAwesomeIcon 
    className="score HeartEmpty" 
    beat
    {...props}
  />
)

function Show({ value, activeLow, activeHigh }:{value : number, activeLow : number, activeHigh : number}) {
  if (value > (activeLow) && value < (activeHigh)) {
    return <RatingIcon icon={faHeartHalf} />;
  }
  if (value >= (activeHigh)) {
    return <RatingIcon icon={faHeartFilled} />;
  }
  return <RatingIcon icon={faHeartEmpty} />;
}
  
export type RatingProps = {
  score: number;
}

export const Rating: FC<RatingProps> = ({score}) => {
  {
    return (
      <div>
        <span className="rating_hearts rating_0">
            <Show
              value = {score}
              activeLow = {0}
              activeHigh = {1}
            />
            <Show
              value = {score}
              activeLow = {1}
              activeHigh = {2}
            />
            <Show
              value = {score}
              activeLow = {2}
              activeHigh = {3}
            />
            <Show
              value = {score}
              activeLow = {3}
              activeHigh = {4}
            />
            <Show
              value = {score}
              activeLow = {4}
              activeHigh = {5}
            />
        </span>
        <span>&nbsp;&nbsp; ({score} / 5)</span>
      </div>
    );
  }
};