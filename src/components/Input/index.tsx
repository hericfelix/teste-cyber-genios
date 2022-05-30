import React, { InputHTMLAttributes } from 'react';
import { Container, InnerInput } from './style';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input = ({ name, label, ...rest }: InputProps) => {
  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <InnerInput id={name} {...rest} />
    </Container>
  );
};

export default Input;
