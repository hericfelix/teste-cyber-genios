import styled from 'styled-components';

export const Container = styled.div`
  width: 20rem;
  max-width: 95%;
  label {
    font-size: ${({ theme }) => theme.typography.desktop.p.mdSize};
    color: ${({ theme }) => theme.colors.secondary};
    line-height: 150%;
    font-weight: ${({ theme }) => theme.typography.desktop.p.smWeight};
    margin-bottom: 0.5rem;
  }
`;

export const InnerInput = styled.input`
  width: 100%;
  padding: 0.5rem 1rem;
  box-sizing: border-box;
  font-size: ${({ theme }) => theme.typography.desktop.p.mdSize};
  color: ${({ theme }) => theme.colors.secondary};
  border: ${({ theme }) => `1px solid ${theme.colors.secondary}`};
  border-radius: 0.375rem;
  width: 100%;
  transition-duration: 0.2s;

  ::placeholder {
    color: ${({ theme }) => theme.colors.primary};
  }

  :focus {
    color: ${({ theme }) => theme.colors.primary};
    border: ${({ theme }) => `1px solid ${theme.colors.primary}`};
  }

  :focus::placeholder {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
