import { Icon } from '@iconify/react';
import React, { ReactNode, useRef, useState } from 'react';
import { ArrowContainer, Container, Content } from './style';

interface CarouselProps {
  children: ReactNode;
}

const Carousel = ({ children }: CarouselProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState<boolean>(false);
  const [canScrollRight, setCanScrollRight] = useState<boolean>(true);

  const handleRightScroll = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += 820;

      setCanScrollLeft(true);

      const { scrollLeft, scrollWidth, offsetWidth } = containerRef.current;

      if (scrollLeft + offsetWidth + 820 >= scrollWidth) {
        return setCanScrollRight(false);
      }

      return setCanScrollRight(true);
    }
  };

  const handleLeftScroll = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= 820;

      setCanScrollRight(true);

      if (containerRef.current.scrollLeft - 820 <= 0) {
        return setCanScrollLeft(false);
      }

      return setCanScrollLeft(true);
    }
  };

  return (
    <Container>
      <ArrowContainer disabled={!canScrollLeft}>
        <Icon onClick={handleLeftScroll} icon="bi:chevron-left" fontSize={40} />
      </ArrowContainer>
      <Content ref={containerRef}>{children}</Content>
      <ArrowContainer disabled={!canScrollRight}>
        <Icon
          icon="bi:chevron-right"
          fontSize={40}
          onClick={handleRightScroll}
        />
      </ArrowContainer>
    </Container>
  );
};

export default Carousel;
