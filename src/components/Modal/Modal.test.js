import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Modal from '.';

describe('Modal', () => {
  let isOpen;
  let closeFn;

  beforeEach(() => {
    isOpen = true;
    closeFn = jest.fn();
  });

  it('renders the modal if isOpen is true', () => {
    const { queryByTestId } = render(
      <Modal isOpen={isOpen} close={closeFn} titleText="Test Title">
        Test Modal
      </Modal>
    );

    expect(queryByTestId('modal')).toBeTruthy();
  });

  it('does not render the modal if isOpen is false', () => {
    isOpen = false;
    const { queryByTestId } = render(
      <Modal isOpen={isOpen} close={closeFn} titleText="Test Title">
        Test Modal
      </Modal>
    );

    expect(queryByTestId('modal')).toBeNull();
  });

  it('displays the title text', () => {
    const { getByText } = render(
      <Modal isOpen={isOpen} close={closeFn} titleText="Test Title">
        Test Modal
      </Modal>
    );

    expect(getByText('Test Title')).toBeTruthy();
  });

  it('renders children', () => {
    const { getByText } = render(
      <Modal isOpen={isOpen} close={closeFn} titleText="Test Title">
        Test Children
      </Modal>
    );

    expect(getByText('Test Children')).toBeTruthy();
  });

  it('closes the modal if the close button is clicked', () => {
    const { getByTestId, queryByTestId, rerender } = render(
      <Modal isOpen={isOpen} close={closeFn} titleText="Test Title">
        Test Children
      </Modal>
    );

    fireEvent.click(getByTestId('modal-close-button'));
    rerender();

    expect(closeFn).toHaveBeenCalledTimes(1);
    expect(queryByTestId('modal')).toBeNull();
  });

  it('closes the modal if backdrop is clicked', () => {
    const { getByTestId, queryByTestId, rerender } = render(
      <Modal isOpen={isOpen} close={closeFn} titleText="Test Title">
        Test Children
      </Modal>
    );

    fireEvent.click(getByTestId('modal-backdrop'));
    rerender();

    expect(closeFn).toHaveBeenCalledTimes(1);
    expect(queryByTestId('modal')).toBeNull();
  });

  it('does not close the modal if disableOnClickOutside is true', () => {
    const disableBackDrop = true;

    const { getByTestId, queryByTestId } = render(
      <Modal
        isOpen={isOpen}
        close={closeFn}
        titleText="Test Title"
        disableOnClickOutside={disableBackDrop}
      >
        Test Children
      </Modal>
    );

    fireEvent.click(getByTestId('modal-backdrop'));

    expect(closeFn).toHaveBeenCalledTimes(0);
    expect(queryByTestId('modal')).toBeTruthy();
  });
});
