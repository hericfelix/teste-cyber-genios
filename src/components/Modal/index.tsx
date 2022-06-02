import React, { Dispatch, ReactNode, SetStateAction } from 'react';
import { Container } from './style';

interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const Modal = ({ children, isOpen, setIsOpen }: ModalProps) => {
  return (
    <>
      {isOpen && (
        <Container
          onClick={(evt) => {
            setIsOpen(false);
          }}
        >
          <div onClick={(evt) => evt.stopPropagation()}>{children}</div>
        </Container>
      )}
    </>
  );
};

export default Modal;
