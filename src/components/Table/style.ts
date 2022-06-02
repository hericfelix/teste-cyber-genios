import styled from 'styled-components';
import ReactLoading from 'react-loading';

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.875rem;

  > div:first-child {
    box-sizing: border-box;
    width: 100%;
    max-width: 280px;
    ::-webkit-scrollbar {
      height: 15px;
    }
    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 14px 14px transparent;
      border: solid 4px transparent;
    }
    ::-webkit-scrollbar-thumb {
      box-shadow: ${({ theme }) =>
        `inset 0 0 14px 14px ${theme.colors.primary}`};
      border: solid 4px transparent;
      border-radius: 32px;
    }
    ::-webkit-scrollbar-button {
      display: none;
    }

    @media (min-width: 1024px) {
      max-width: 100%;
    }
  }
`;

export const StyledTable = styled.table`
  border-radius: 0.25rem;
  border-spacing: 0;
  text-align: left;
  margin: 0 auto;
  width: 100%;
`;

export const THead = styled.thead`
  display: none;

  @media (min-width: 1024px) {
    display: block;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 0.375rem;
    padding: 1.375rem 2.625rem;
  }
`;

export const TBody = styled.tbody`
  display: flex;
  padding: 2rem 2.625rem;
  flex-direction: column;
  gap: 2rem;
`;

export const TFoot = styled.tfoot``;

export const TR = styled.tr`
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  border-radius: 0.5rem;
  gap: 0.5rem;
  padding: 0.5rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    border-radius: 0;
    border: none;
    gap: 0;
    padding: 0;
  }
`;

export const TH = styled.th`
  font-weight: ${({ theme }) => theme.typography.desktop.p.smWeight};
  font-size: ${({ theme }) => theme.typography.desktop.p.smSize};
  line-height: 140%;
  color: ${({ theme }) => theme.colors.white};
`;

export const TD = styled.td`
  text-align: center;
  font-weight: 400;
  font-size: ${({ theme }) => theme.typography.desktop.p.smSize};
  justify-content: center;
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;

  @media (min-width: 1024px) {
    justify-content: flex-start;
    height: 3rem;
  }
`;

export const IconContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  svg {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Loader = styled(ReactLoading)`
  margin: 0 auto;
`;
