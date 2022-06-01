import React, { ReactNode } from 'react';
import { Container } from './style';

interface ModalProps {
  children: ReactNode;
}

const Modal = ({ children }: ModalProps) => {
  return <Container>{children}</Container>;
};

export default Modal;
