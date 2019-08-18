import React, { MouseEvent } from 'react';
import MenuButton from '../atoms/MenuButton';
import './RightArrowButton.scss';

const RightArrowButton: React.FC<{ onClick?: (e: MouseEvent) => void }> = props => (
  <MenuButton
    className="RightArrowButton"
    onClick={props.onClick}
  />
);

export default RightArrowButton;
