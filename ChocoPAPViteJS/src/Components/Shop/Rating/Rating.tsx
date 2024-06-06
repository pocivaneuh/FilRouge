import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FilledHeart} from './FilledHeart';
import { faHeart} from '@fortawesome/free-regular-svg-icons';
import HalfHeart from '../../../Assets/Images/HalfHeart.svg';

import { prdList } from '../../../Datas/PrdList';

import { useState, useEffect } from "react";
import { clsx } from 'clsx';

import "../../../App.scss";
import "./Rating.scss";

const EmptyHeart = () => {
    return (
      <span>
            <FontAwesomeIcon id="score" icon={faHeart} bounce className="EmptyHeart"/>
      </span>
    )
  };

  const HalFullHeart = () => {
    return (
      <span>
            <img id="score" src={HalfHeart} className="HalFullHeart" alt='Demi-coeur' />
      </span>
    )
  };

  function Show({ value, activeLow, activeHigh }) {
    let showContent = "" ;
    if (value > (activeLow) && value < (activeHigh)) {
      showContent = 's activeLow';
    }
    if (value >= (activeHigh)) {
      showContent = 's activeHigh';
    }
    if (value = (activeLow)) {
      showContent = 's';
    }
    return (
      <span className={showContent}>{showContent}<FilledHeart /><HalFullHeart /><EmptyHeart /></span>
    );
  }
  
 

export function Rating ( {Score} ) {
  {
    return (
      <div>
        <span className="rating_hearts rating_0">
            <Show
              value = {Score}
              activeLow = {0}
              activeHigh = {1}
            />
            <Show
              value = {Score}
              activeLow = {1}
              activeHigh = {2}
            />
            <Show
              value = {Score}
              activeLow = {2}
              activeHigh = {3}
            />
            <Show
              value = {Score}
              activeLow = {3}
              activeHigh = {4}
            />
            <Show
              value = {Score}
              activeLow = {4}
              activeHigh = {5}
            />
        </span>
      </div>
    );
  }
};
