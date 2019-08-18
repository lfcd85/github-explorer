import React, { MouseEvent } from 'react';
import MenuButton from '../atoms/MenuButton';
import './CloseButton.scss';

const CloseButton: React.FC<{ onClick?: (e: MouseEvent) => void }> = props => (
  <MenuButton
    className="CloseButton"
    onClick={props.onClick}
  />
);

export default CloseButton;
