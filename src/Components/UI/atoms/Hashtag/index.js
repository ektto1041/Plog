import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import HashtagStyle from './style';

const Hashtag = ({ children, onClick, iconColor = '#000', ...rest }) => {
  return (
    <HashtagStyle {...rest}>
      <span className="hashtag-content">{children}</span>
      <span className="hashtag-dim"><FontAwesomeIcon icon={faTrashAlt} onClick={onClick} color={iconColor} /></span>
    </HashtagStyle>
  );
};

export default Hashtag;