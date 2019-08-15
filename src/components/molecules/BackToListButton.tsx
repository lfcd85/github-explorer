import React from 'react';
import MenuButton from '../atoms/MenuButton';
import './BackToListButton.scss';

const BackToListButton: React.FC<{ onClick?: any }> = (props) => {
  return (
    <MenuButton
      className='BackToListButton'
      label='Back to List'
      onClick={props.onClick}
    />
  );
}

export default BackToListButton;
