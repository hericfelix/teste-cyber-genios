import React, { forwardRef, InputHTMLAttributes } from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import { Container, InnerInput } from './style';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  register: UseFormRegister<FieldValues>;
  name: string;
}

const Input = forwardRef(
  ({ name, label, register, ...rest }: InputProps, ref) => {
    const { ref: inputRef, ...registerRest } = register(name);

    return (
      <Container>
        <label htmlFor={name}>{label}</label>
        <InnerInput ref={inputRef} id={name} {...rest} {...registerRest} />
      </Container>
    );
  }
);

export default Input;
