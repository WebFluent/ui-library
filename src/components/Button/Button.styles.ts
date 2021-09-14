import styled from 'styled-components';

interface StyledButtonProps {
  mode: string;
  size: string | any;
}

const isPrimary = (mode: string) => mode === 'primary';

export const StyledButton = styled.button<StyledButtonProps>`
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;

  color: ${({ mode }) => (isPrimary(mode) ? 'white' : '#333')};
  background-color: ${({ mode }) =>
    isPrimary(mode) ? '#1ea7fd' : 'transparent'};
  ${({ mode }) =>
    !isPrimary(mode) &&
    `box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset`};

  ${({ size }) => {
    switch (size) {
      case 'small':
        return `
          font-size: 12px;
          padding: 10px 16px;
        `;
      case 'medium':
        return `
          font-size: 14px;
          padding: 11px 20px;
        `;
      case 'large':
        return `
          font-size: 16px;
          padding: 12px 24px;
        `;
      default:
        return '';
    }
  }};
`;
