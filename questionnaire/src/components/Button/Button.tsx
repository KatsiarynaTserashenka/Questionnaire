import React, { FC } from 'react';

interface IProps {
  text: string;
  onClick?: () => void;
}

const Button: FC<IProps> = (props) => {
  const { text, onClick } = props;

  return (
    <button onClick={onClick} type="submit">
      {text}
    </button>
  );
};

export default Button;
