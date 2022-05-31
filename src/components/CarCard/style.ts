import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  border: ${({ theme }) => `1px solid ${theme.colors.primary}`};
  border-radius: 1.5rem;
  padding: 1.5rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  box-sizing: border-box;
  min-width: 17.5rem;
  padding: 1.5rem;
  h2 {
    font-size: ${({ theme }) => theme.typography.desktop.h2.size};
    font-weight: ${({ theme }) => theme.typography.desktop.h2.weight};
    color: ${({ theme }) => theme.colors.primary};
  }
  img {
    width: 85%;
    position: absolute;
    top: 0;
    transform: translateY(-115px);
  }
`;

export const CarInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  width: 100%;

  > div {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1.5rem;
    p {
      color: ${({ theme }) => theme.colors.primary};
      font-size: ${({ theme }) => theme.typography.desktop.p.smSize};
      font-weight: ${({ theme }) => theme.typography.desktop.p.smWeight};
    }
    svg {
      font-size: 1.5rem;
    }
  }
`;
