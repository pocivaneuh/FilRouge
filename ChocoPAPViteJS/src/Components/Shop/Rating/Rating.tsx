import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FilledHeart} from './FilledHeart';
import { faHeart} from '@fortawesome/free-regular-svg-icons';
import HalfHeart from '../../../Assets/Images/HalfHeart.svg';

import { prdList } from '../../../Datas/PrdList';

import { useState, useEffect } from "react";

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


  

export const Rating = ( {Score : number} ) =>
  {
    return (
      <span className="rating_hearts rating_0">
        <span className='s'>
              <FilledHeart /><HalFullHeart /><EmptyHeart />
          </span>
          <span className='s'>
              <FilledHeart /><HalFullHeart /><EmptyHeart />
          </span>
          <span className='s'>
              <FilledHeart /><HalFullHeart /><EmptyHeart />
          </span>
          <span className='s'>
              <FilledHeart /><HalFullHeart /><EmptyHeart />
          </span>
          <span className='s'>
              <FilledHeart /><HalFullHeart /><EmptyHeart />
          </span>
          <span><Score/></span>
      </span>


    );
  };