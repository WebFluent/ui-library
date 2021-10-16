import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

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

  const CloseBtn = (props: any) => (
    <button type="button" {...props}>
      close
    </button>
  );

  return (
    <>
      <button type="button" onClick={handleOpen}>
        Open Modal
      </button>
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
