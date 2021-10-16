import React from 'react';
import {
  ModalBackdrop,
  ModalContainer,
  ModalTitleContainer,
  ModalTitleText,
  ModalContentContainer,
  ModalCloseButton,
  CloseIcon
} from './Modal.styles';

const defaultProps = {
  titleText: '',
  children: '',
  Backdrop: ModalBackdrop,
  CloseButton: ModalCloseButton
};

export type ModalProps = typeof defaultProps & {
  /** A React child or children */
  children?: any;
  /** Modal open state */
  isOpen: boolean;
  /** Function to set isOpen to false */
  close: () => void;
  /** Text for modal title */
  titleText?: string;
  /** A Styled Component to override the built-in Backdrop component */
  Backdrop?: typeof ModalBackdrop;
  /** A Styled Component to override the built-in CloseButton component */
  CloseButton?: typeof ModalCloseButton;
};

export const Modal = ({
  isOpen,
  close,
  titleText,
  children,
  Backdrop,
  CloseButton
}: ModalProps) => {
  return isOpen ? (
    <Backdrop>
      <ModalContainer>
        <ModalTitleContainer>
          <ModalTitleText>{titleText}</ModalTitleText>
          <CloseButton onClick={close}>
            <CloseIcon />
          </CloseButton>
        </ModalTitleContainer>
        <ModalContentContainer>{children}</ModalContentContainer>
      </ModalContainer>
    </Backdrop>
  ) : null;
};

Modal.defaultProps = defaultProps;

export default Modal;
