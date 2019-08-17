import React from 'react';

export interface MenuButtonProps {
  className?: string;
  label?: string;
  onClick?: any;
  disabled?: boolean;
}

const MenuButton: React.FC<MenuButtonProps> = (props) => {
  return (
    <button {...props}>{props.label}</button>
  );
}

export default MenuButton;
