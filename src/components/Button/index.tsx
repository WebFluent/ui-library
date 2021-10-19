import React from 'react';
import { StyledButton } from './Button.styles';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  children?: any;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
const Button = ({
  primary,
  size,
  backgroundColor,
  children,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'primary' : 'secondary';
  return (
    <StyledButton
      type="button"
      size={size}
      mode={mode}
      style={{ backgroundColor }}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  primary: true,
  size: 'medium',
  backgroundColor: 'blue',
  children: '',
  onClick: () => ''
};

export default Button;
