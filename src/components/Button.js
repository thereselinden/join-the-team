import React from 'react';
import Button from '@material-ui/core/Button';

const CustomButton = ({
  button,
  onClick,
  disabled,
  className,
  variant,
  color,
  text,
}) => {
  return (
    <Button
      type={button}
      onClick={onClick}
      disabled={disabled}
      className={className}
      variant={variant}
      color={color}
    >
      {text}
    </Button>
  );
};
export default CustomButton;
