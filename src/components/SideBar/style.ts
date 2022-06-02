import styled from 'styled-components';

interface ContainerProps {
  isShown: boolean;
}

export const Container = styled.nav<ContainerProps>`
  position: absolute;
  z-index: 2;
  left: ${({ isShown }) => {
    return isShown ? 0 : '-100%';
  }};
  transition: left 0.65s ease-in-out;
  width: 16.875rem;
  border-radius: 0px 1.5rem 1.5rem 0px;
  background-color: #ffffff;
  padding: 1.5rem 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  height: 100%;
  box-sizing: border-box;

  @media (min-width: 768px) {
    display: none;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    list-style: none;
    align-items: flex-start;
    padding: 0;
    > :nth-child(1) {
      border-bottom: ${({ theme }) => `2px solid ${theme.colors.primary}`};
    }

    a {
      font-size: ${({ theme }) => theme.typography.mobile.button.mdSize};
      text-decoration: none;
      line-height: 150%;

      color: ${({ theme }) => theme.colors.primary};
      font-weight: ${({ theme }) => theme.typography.mobile.button.weight};
    }
  }
`;
