import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import {
  WhiteOrBlack,
  TransparentOrBlack,
  RoundedOrSquare,
  SmallOrMedium,
  WhiteOrBlackOrNone,
  SmallOrMediumOrLarge,
} from '../../ts/types';
import { Container } from './style';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  color: WhiteOrBlack;
  background: TransparentOrBlack;
  variant: RoundedOrSquare;
  fontSize: SmallOrMedium;
  border: WhiteOrBlackOrNone;
  padding: SmallOrMediumOrLarge;
}

const Button = ({
  children,
  color,
  background,
  variant,
  border,
  padding,
  fontSize,
  ...rest
}: ButtonProps) => {
  return (
    <Container
      background={background}
      border={border}
      padding={padding}
      fontSize={fontSize}
      color={color}
      variant={variant}
      {...rest}
    >
      {children}
    </Container>
  );
};

export default Button;
