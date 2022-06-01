import React, { ReactNode } from 'react';
import { Container } from './style';

interface CarouselProps {
  children: ReactNode;
}

const Carousel = ({ children }: CarouselProps) => {
  return <Container>{children}</Container>;
};

export default Carousel;
