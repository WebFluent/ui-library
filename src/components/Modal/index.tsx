import React from 'react';

interface ModalProps {
  isOpen: boolean;
  close: () => void;
}

export const Modal = ({ isOpen, close }: ModalProps) => {
  return isOpen ? (
    <>
      <button type="button" onClick={close}>
        click me
      </button>
    </>
  ) : null;
};

export default Modal;
