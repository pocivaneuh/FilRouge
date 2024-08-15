import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

export const FilledHeart = () => {
    return (
      <span>
            <FontAwesomeIcon id="score" icon={faHeart} bounce className="FilledHeart"/>
      </span>
    )
  };