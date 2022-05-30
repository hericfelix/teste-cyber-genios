import React, { ReactNode } from 'react';
import {
  DefaultOrBlack,
  RoundedOrSquare,
  SmallorMedium,
  WhiteorBlackorNone,
} from '../../ts/types';
import { Container } from './style';

interface ButtonProps {
  children: ReactNode;
  style: DefaultOrBlack;
  variant: RoundedOrSquare;
  size: SmallorMedium;
  border: WhiteorBlackorNone;
  padding: SmallorMedium;
}

const Button = ({
  children,
  style = 'default',
  variant = 'rounded',
  border = 'black',
  padding = 'medium',
  size = 'small',
}: ButtonProps) => {
  return (
    <Container
      border={border}
      padding={padding}
      size={size}
      style={style}
      variant={variant}
    >
      {children}
    </Container>
  );
};

export default Button;
