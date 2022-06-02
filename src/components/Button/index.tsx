import React, { ReactNode } from 'react';
import {
  WhiteOrBlack,
  TransparentOrBlack,
  RoundedOrSquare,
  SmallOrMedium,
  WhiteOrBlackOrNone,
  SmallOrMediumOrLarge,
} from '../../ts/types';
import { Container } from './style';

interface ButtonProps {
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
}: ButtonProps) => {
  return (
    <Container
      background={background}
      border={border}
      padding={padding}
      fontSize={fontSize}
      color={color}
      variant={variant}
    >
      {children}
    </Container>
  );
};

export default Button;
