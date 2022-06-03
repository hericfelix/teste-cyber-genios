import styled from 'styled-components';
import {
  RoundedOrSquare,
  SmallOrMedium,
  SmallOrMediumOrLarge,
  TransparentOrBlack,
  WhiteOrBlack,
  WhiteOrBlackOrNone,
} from '../../ts/types';

interface ContainerProps {
  variant: RoundedOrSquare;
  color: WhiteOrBlack;
  fontSize: SmallOrMedium;
  border: WhiteOrBlackOrNone;
  padding: SmallOrMediumOrLarge;
  background: TransparentOrBlack;
}

export const Container = styled.button<ContainerProps>`
  background-color: ${({ theme, background }) =>
    background === 'transparent' ? 'transparent' : theme.colors.primary};
  color: ${({ theme, color }) =>
    color === 'white' ? theme.colors.white : theme.colors.primary};
  font-size: ${({ theme, fontSize }) =>
    fontSize === 'small'
      ? theme.typography.mobile.button.smSize
      : theme.typography.mobile.button.mdSize};
  font-weight: ${({ theme }) => theme.typography.mobile.button.weight};
  border-radius: ${({ theme, variant }) =>
    variant === 'rounded'
      ? theme.components.button.rdBorder
      : theme.components.button.sqBorder};
  padding: ${({ theme, padding }) => {
    switch (padding) {
      case 'small':
        return theme.components.button.smPadding;

      case 'medium':
        return theme.components.button.mdPadding;

      case 'large':
        return theme.components.button.lgPadding;
    }
  }};
  display: flex;
  align-items: center;
  gap: 0.5rem;
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
    cursor: pointer;
    font-size: ${({ theme, fontSize }) =>
      fontSize === 'small'
        ? theme.typography.desktop.button.smSize
        : theme.typography.desktop.button.mdSize};
    font-weight: ${({ theme }) => theme.typography.desktop.button.weight};
  }
`;
