import React, { SyntheticEvent } from 'react';

interface TextFieldProps {
  value?: string;
  onChange?: (e: SyntheticEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
}

const TextField: React.FC<TextFieldProps> = (props) => {
  return (
    <input type='text' {...props} />
  );
}

export default TextField;
