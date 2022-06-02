import styled from 'styled-components';

export const Container = styled.div`
  width: 42.75rem;
  max-width: 95vw;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 1.5rem;
  padding: 1rem;
  overflow: auto;
  max-height: 80vh;
  > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column-reverse;
    align-items: center;
    h3 {
      font-size: ${({ theme }) => theme.typography.desktop.h2.size};
      font-weight: ${({ theme }) => theme.typography.desktop.h2.weight};
      line-height: 150%;
    }
    svg {
      cursor: pointer;
    }
  }

  @media (min-width: 768px) {
    padding: 2.5rem;
    > div {
      flex-direction: row;
    }
  }
`;

export const StyledForm = styled.form`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 1rem;
  img {
    width: 5rem;
  }
  input {
    display: none;
  }
  label {
    cursor: pointer;
  }
  label:hover {
    text-decoration: underline;
  }

  @media (min-width: 768px) {
    width: 40%;
    align-items: flex-start;
    img {
      width: 14rem;
    }
  }
`;

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 1rem;
  @media (min-width: 768px) {
    align-items: flex-end;
    width: 60%;
  }
`;

export const ButtonsContainer = styled.div`
  margin-top: 1.5rem;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1.5rem;
  flex-direction: column-reverse;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
