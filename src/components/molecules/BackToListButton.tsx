import React, { MouseEvent } from 'react';
import MenuButton from '../atoms/MenuButton';
import './BackToListButton.scss';

const BackToListButton: React.FC<{ onClick?: (e: MouseEvent) => void }> = props => (
  <MenuButton
    className="BackToListButton"
    label="Back to List"
    onClick={props.onClick}
  />
);

export default BackToListButton;
