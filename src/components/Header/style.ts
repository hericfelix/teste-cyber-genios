import styled from 'styled-components';

interface LocationProps {
  location: string;
}

export const Container = styled.header<LocationProps>`
  padding: 1.5rem 1.75rem;
  position: absolute;
  background-color: ${({ theme, location }) =>
    location === '/table' ? theme.colors.primary : 'transparent'};
  width: 100%;
  @media (min-width: 768px) {
    > :first-child {
      display: none;
    }
  }
`;

export const Content = styled.ul`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    max-width: 1380px;
    margin: 0 auto;

    li:last-child {
      align-items: center;
      display: flex;
      gap: 1.5rem;
    }
    a {
      color: #ffffff;
      text-decoration: none;
      font-size: ${({ theme }) => theme.typography.desktop.button.mdSize};
      font-weight: ${({ theme }) => theme.typography.desktop.button.weight};
    }
  }
`;
