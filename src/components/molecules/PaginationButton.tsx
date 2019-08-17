import React, { MouseEvent } from 'react';
import MenuButton from '../atoms/MenuButton';
import './PaginationButton.scss';

interface PaginationButtonProps {
  onClick?: (e: MouseEvent) => void;
  isNext: boolean;
  disabled: boolean;
}

const PaginationButton: React.FC<PaginationButtonProps> = props => (
  <MenuButton
    className="PaginationButton"
    onClick={props.onClick}
    disabled={props.disabled}
    label={props.isNext ? '>' : '<'}
  />
);

export default PaginationButton;
