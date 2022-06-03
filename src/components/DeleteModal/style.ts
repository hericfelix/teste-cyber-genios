import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 1.5rem;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  p {
    text-align: right;
    font-size: ${({ theme }) => theme.typography.desktop.p.mdSize};
    font-weight: ${({ theme }) => theme.typography.desktop.p.mdWeight};
    line-height: 150%;
    margin-bottom: 1rem;
  }
`;
