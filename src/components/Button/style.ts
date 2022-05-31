import styled from 'styled-components';
import {
  DefaultOrBlack,
  RoundedOrSquare,
  SmallorMedium,
  WhiteorBlackorNone,
} from '../../ts/types';

interface ContainerProps {
  variant: RoundedOrSquare;
  color: DefaultOrBlack;
  size: SmallorMedium;
  border: WhiteorBlackorNone;
  padding: SmallorMedium;
}

export const Container = styled.button<ContainerProps>`
  background-color: ${({ theme, color }) =>
    color === 'default' ? 'transparent' : theme.colors.primary};
  font-size: ${({ theme, size }) =>
    size === 'small'
      ? theme.typography.mobile.button.smSize
      : theme.typography.mobile.button.mdSize};
  font-weight: ${({ theme }) => theme.typography.mobile.button.weight};
  border-radius: ${({ theme, variant }) =>
    variant === 'rounded'
      ? theme.components.button.rdBorder
      : theme.components.button.sqBorder};
  padding: ${({ theme, padding }) =>
    padding === 'small'
      ? theme.components.button.smPadding
      : theme.components.button.mdPadding};
  display: flex;
  gap: '0.5rem';
  border: ${({ border, theme }) => {
    switch (border) {
      case 'black':
        return `1px solid ${theme.colors.primary}`;

      case 'none':
        return 'none';

      case 'white':
        return `1px solid ${theme.colors.white}`;
    }
  }};
  line-height: 200%;

  @media (min-width: 768px) {
    font-size: ${({ theme, size }) =>
      size === 'small'
        ? theme.typography.desktop.button.smSize
        : theme.typography.desktop.button.mdSize};
    font-weight: ${({ theme }) => theme.typography.desktop.button.weight};
  }
`;
