import styled from 'styled-components';

export const StyledModalBody = styled.div`
  padding-top: 10px;
`;

export const StyledModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 25px;
  a {
    cursor: pointer;
  }
`;

export const StyledModal = styled.div`
  background: white;
  width: 100%;
  max-width: 450px;
  border-radius: 15px;
  padding: 15px;
  z-index: 110;
`;
export const StyledModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const StyledModalTitle = styled.h3``;
