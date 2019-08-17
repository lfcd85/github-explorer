import React, { MouseEvent } from 'react';

interface MenuButtonProps {
  className?: string;
  label?: string;
  onClick?: (e: MouseEvent) => void;
  disabled?: boolean;
}

const MenuButton: React.FC<MenuButtonProps> = props => (
  <button type="button" {...props}>{props.label}</button>
);

export default MenuButton;
