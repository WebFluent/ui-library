import React, { useEffect, useCallback } from 'react';
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
  disableOnClickOutside: false,
  Backdrop: ModalBackdrop,
  CloseButton: ModalCloseButton,
  Container: ModalContainer
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
  /** Boolean to disable on click outside */
  disableOnClickOutside?: boolean;
  /** A Styled Component to override the built-in Backdrop component */
  Backdrop?: typeof ModalBackdrop;
  /** A Styled Component to override the built-in CloseButton component */
  CloseButton?: typeof ModalCloseButton;
  /** A Styled Component to override the built-in CloseButton component */
  Container?: typeof ModalContainer;
};

export const Modal = ({
  isOpen,
  close,
  titleText,
  children,
  disableOnClickOutside,
  Backdrop,
  CloseButton,
  Container
}: ModalProps) => {
  const closeOnClickOutside = useCallback(
    (e: any) => {
      if (!e.target.closest(ModalContainer)) {
        close();
      }
    },
    [close]
  );

  useEffect(() => {
    if (!disableOnClickOutside && isOpen) {
      document.addEventListener('click', closeOnClickOutside);
    }

    return () => {
      document.removeEventListener('click', closeOnClickOutside);
    };
  }, [disableOnClickOutside, isOpen, closeOnClickOutside]);

  return isOpen ? (
    <Backdrop data-testid="modal-backdrop">
      <Container data-testid="modal">
        <ModalTitleContainer>
          <ModalTitleText>{titleText}</ModalTitleText>
          <CloseButton onClick={close} data-testid="modal-close-button">
            <CloseIcon />
          </CloseButton>
        </ModalTitleContainer>
        <ModalContentContainer>{children}</ModalContentContainer>
      </Container>
    </Backdrop>
  ) : null;
};

Modal.defaultProps = defaultProps;

export default Modal;
