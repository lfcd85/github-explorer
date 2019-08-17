import React from 'react';
import MenuButton from '../atoms/MenuButton';
import './PaginationButton.scss';

export interface PaginationButtonProps {
  onClick?: any;
  isNext: boolean;
  disabled: boolean;
}

const PaginationButton: React.FC<PaginationButtonProps> = (props) => {
  return (
    <MenuButton
      className='PaginationButton'
      onClick={props.onClick}
      disabled={props.disabled}
      label={props.isNext ? '>' : '<'}
    />
  );
}

export default PaginationButton;
