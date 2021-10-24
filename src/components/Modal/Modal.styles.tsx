import styled from 'styled-components';
import Close from '../../assets/Close';

export const ModalBackdrop = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
`;

export const ModalContainer = styled.div`
  z-index: 2000;
  width: 750px;
  margin: 0 auto;
  background-color: #ffffff;
  border-radius: 10px;
  -webkit-box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
  -webkit-background-clip: padding-box;
  -moz-background-clip: padding-box;
  background-clip: padding-box;
`;

export const ModalTitleContainer = styled.div`
  padding: 1rem;
  background-color: #f8f8f8;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ModalTitleText = styled.p`
  font-size: 24px;
  margin: 0;
`;

export const ModalContentContainer = styled.div`
  padding: 1rem;
  min-height: 100px;
`;
export const ModalCloseButton = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  line-height: 1;
`;
export const CloseIcon = styled(Close)`
  width: 14px;
  height: 14px;
`;
