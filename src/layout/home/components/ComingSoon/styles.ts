import styled from 'styled-components';

export const Container = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const ComingSoonContent = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 36px 0;
  animation: fadeIn 1s;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const Title = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-size: 1em;
  text-align: center;
  letter-spacing: 1em;
  color: ${({ theme }) => theme.color.white};
  font-weight: 300;
  margin-bottom: 4px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1.2em;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 2.2em;
  }
`;

export const Subtitle = styled.h2`
  font-size: 1.2em;
  text-align: center;
  color: ${({ theme }) => theme.color.grey};
  font-style: italic;
  letter-spacing: 0.02em;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 2em;
  }
`;
