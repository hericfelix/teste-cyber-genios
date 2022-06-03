import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 65.75rem;
  margin: 0 auto;
  padding-top: 10rem;

  > div:first-child {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    h2 {
      font-size: ${({ theme }) => theme.typography.mobile.h1.size};
      font-weight: ${({ theme }) => theme.typography.mobile.h1.weight};
      color: ${({ theme }) => theme.colors.primary};
    }
  }
  @media (min-width: 768px) {
    padding: 15rem 2rem 0;
    > div:first-child {
      flex-direction: row;
      gap: 0;
      justify-content: space-between;
      margin-bottom: 3rem;
      h2 {
        font-size: ${({ theme }) => theme.typography.desktop.h1.size};
        font-weight: ${({ theme }) => theme.typography.desktop.h1.weight};
      }
    }
  }
`;
