import React, { FC } from 'react';
import './Button.css';

interface IProps {
  text: string;
  onClick?: () => void;
}

const Button: FC<IProps> = (props) => {
  const { text, onClick } = props;

  return (
    <button onClick={onClick} className="button">
      {text}
    </button>
  );
};

export default Button;
