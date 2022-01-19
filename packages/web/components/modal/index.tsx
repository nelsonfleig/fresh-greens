import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { FaTimes } from 'react-icons/fa';
import {
  StyledModalOverlay,
  StyledModal,
  StyledModalHeader,
  StyledModalTitle,
  StyledModalBody,
} from './styles';

type ModalProps = {
  show: boolean;
  title?: string;
  onClose: () => void;
  children: React.ReactNode;
};

export const Modal = ({ show, onClose, children, title }: ModalProps) => {
  const [isBrowser, setIsBrowser] = useState(true);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleCloseClick: React.MouseEventHandler<HTMLAnchorElement> = e => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    <StyledModalOverlay>
      <StyledModal>
        <StyledModalHeader>
          <a href="#" onClick={handleCloseClick}>
            <FaTimes />
          </a>
        </StyledModalHeader>
        {<StyledModalTitle>{title}</StyledModalTitle>}
        <StyledModalBody>{children}</StyledModalBody>
      </StyledModal>
    </StyledModalOverlay>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(modalContent, document.getElementById('modal-root')!);
  } else {
    return null;
  }
};

export default Modal;
