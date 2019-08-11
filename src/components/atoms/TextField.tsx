import React from 'react';

export interface TextFieldProps {
  value?: string,
  onChange?: any,
  placeholder?: string,
}

const TextField: React.FC<TextFieldProps> = (props) => {
  return (
    <input type='text' {...props} />
  );
}

export default TextField;
