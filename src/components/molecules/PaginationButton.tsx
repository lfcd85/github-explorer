import React, { MouseEvent } from 'react';
import classNames from 'classnames';
import MenuButton from '../atoms/MenuButton';
import './PaginationButton.scss';

interface PaginationButtonProps {
  onClick?: (e: MouseEvent) => void;
  isNext: boolean;
  disabled: boolean;
}

const PaginationButton: React.FC<PaginationButtonProps> = props => (
  <MenuButton
    className={classNames({
      PaginationButton: true,
      'PaginationButton--isNext': props.isNext,
      'PaginationButton--isPrevious': !props.isNext,
    })}
    onClick={props.onClick}
    disabled={props.disabled}
  />
);

export default PaginationButton;
