import React, { useState } from 'react';
import styled from 'styled-components';
import { ComponentMeta } from '@storybook/react';
import Button from '../Button';

import Modal from './index';
import mdx from './Modal.mdx';

export default {
  title: 'Components/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' }
  },
  parameters: {
    docs: {
      page: mdx
    }
  }
} as ComponentMeta<typeof Modal>;

export const Basic = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);
  const handleOpen = () => setIsOpen(true);

  return (
    <>
      <Button onClick={handleOpen}>Open Modal</Button>
      <Modal isOpen={isOpen} close={handleClose} titleText="Primary Modal">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Modal>
    </>
  );
};

export const Custom = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);
  const handleOpen = () => setIsOpen(true);
  const disableOnClickOutside = true;

  const Backdrop = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgb(37, 137, 124, 0.8);
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
  `;

  const CloseButton = styled.div`
    display: flex;
    background-color: rgb(37, 137, 124);
    padding: 5px;
    cursor: pointer;
    border-radius: 8px;
    svg path {
      fill: #ffffff;
    }
    :hover {
      background-color: #ffffff;
      svg path {
        fill: rgb(37, 137, 124);
      }
    }
  `;

  const Container = styled.div`
    width: 80%;
    margin: auto;
    background-color: #777;
    border-radius: 10px;
  `;

  return (
    <>
      <Button onClick={handleOpen}>Open Modal</Button>
      <Modal
        isOpen={isOpen}
        close={handleClose}
        titleText="Custom Modal"
        disableOnClickOutside={disableOnClickOutside}
        Backdrop={Backdrop}
        CloseButton={CloseButton}
        Container={Container}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Modal>
    </>
  );
};
