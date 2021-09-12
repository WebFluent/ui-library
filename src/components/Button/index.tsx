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
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
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
        {label}
      </StyledButton>
    );
};
