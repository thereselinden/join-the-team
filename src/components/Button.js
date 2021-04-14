import React from 'react';

const Button = ({ button, onClick, disabled, className, text }) => {
  return (
    <button
      type={button}
      onClick={onClick}
      disabled={disabled}
      className={className}
    >
      {text}
    </button>
  );
};
export default Button;
