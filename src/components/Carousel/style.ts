import styled from 'styled-components';

interface DisabledProps {
  disabled: boolean;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 3rem;
  gap: 4rem;
`;

export const Content = styled.div`
  height: 500px;
  display: flex;
  align-items: flex-end;
  gap: 1.5rem;
  width: 100%;
  padding: 1.5rem;
  overflow-x: auto;
  @media (min-width: 768px) {
    gap: 6.25rem;
  }
  @media (min-width: 1024px) {
    /* width */
    scroll-behavior: smooth;
    ::-webkit-scrollbar {
      height: 4px;
      border-radius: 50%;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: ${({ theme }) => theme.colors.tertiary};
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.colors.primary};
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
    ::-webkit-scrollbar-button {
      width: 12vw;
    }
  }
`;

export const ArrowContainer = styled.div<DisabledProps>`
  display: none;
  @media (min-width: 1024px) {
    display: block;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      transition: 0.4s;
      color: ${({ theme, disabled }) =>
        disabled ? theme.colors.tertiary : theme.colors.primary};
      :hover {
        transform: ${({ disabled }) => (disabled ? 'scale(1)' : 'scale(1.5)')};
      }
    }
  }
`;
