import styled from 'styled-components';
import Background from '../../assets/background.png';
import LowerMobileImage from '../../assets/lowerMobileHomeImage.png';
import LowerDesktopImage from '../../assets/lowerDesktopHomeImage.png';

export const Container = styled.div`
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-size: contain;
  padding-top: 55vw;
`;

export const LowerContainer = styled.div`
  height: 155vw;
  background-image: url(${LowerMobileImage});
  background-repeat: no-repeat;
  background-size: cover;

  @media (min-width: 768px) {
    height: 40vw;
    background-image: url(${LowerDesktopImage});
  }
`;

export const LowerMobileContent = styled.section`
  background: linear-gradient(
    270deg,
    rgba(29, 37, 39, 0.4) 15.42%,
    rgba(29, 37, 39, 0.32) 35.73%,
    rgba(29, 37, 39, 0.156) 78.67%,
    rgba(29, 37, 39, 0) 100%
  );
  backdrop-filter: blur(3px);
  padding: 5rem 1.5rem 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1rem;
  color: #ffffff;
  h2 {
    font-size: ${({ theme }) => theme.typography.mobile.h1.size};
    font-weight: ${({ theme }) => theme.typography.mobile.h1.weight};
  }
  p {
    font-size: ${({ theme }) => theme.typography.mobile.p.size};
    font-weight: ${({ theme }) => theme.typography.mobile.p.mdWeight};
    line-height: 200%;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;

export const LowerDesktopContent = styled.section`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    color: #ffffff;
    margin-left: auto;
    margin-right: 0;
    padding: 4% 5% 0 0;
    width: 75%;
    gap: 1rem;
    height: 100%;
    background: linear-gradient(
      270deg,
      rgba(29, 37, 39, 0.6) 0%,
      rgba(29, 37, 39, 0.6) 24.79%,
      rgba(29, 37, 39, 0.534) 54.48%,
      rgba(29, 37, 39, 0.006) 78.67%,
      rgba(29, 37, 39, 0) 100%
    );
    backdrop-filter: blur(1.5px);

    h2 {
      font-size: ${({ theme }) => theme.typography.desktop.h1.size};
      font-weight: ${({ theme }) => theme.typography.desktop.h1.weight};
    }
    p {
      text-align: right;
      font-size: ${({ theme }) => theme.typography.desktop.p.smSize};
      font-weight: ${({ theme }) => theme.typography.desktop.p.smWeight};
      line-height: 150%;
    }
  }
  @media (min-width: 1024px) {
    padding: 5.6% 11.4% 0 0;
    width: 57%;
    gap: 1rem;
    height: 100%;
    backdrop-filter: blur(3px);
    h2 {
      font-size: ${({ theme }) => theme.typography.desktop.h1.size};
      font-weight: ${({ theme }) => theme.typography.desktop.h1.weight};
      line-height: 200%;
    }
    p {
      text-align: right;
      font-size: ${({ theme }) => theme.typography.desktop.p.mdSize};
      font-weight: ${({ theme }) => theme.typography.desktop.p.mdWeight};
      line-height: 150%;
      margin-bottom: 1rem;
    }
  }
`;
