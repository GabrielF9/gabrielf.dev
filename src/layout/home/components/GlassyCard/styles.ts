import styled from 'styled-components';

export const Card = styled.div`
  position: relative;

  width: 100vw;
  height: 100vh;

  padding: 16px;
  padding-bottom: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: linear-gradient(
    126.6deg,
    rgba(255, 255, 255, 0.12) 28.69%,
    rgba(255, 255, 255, 0) 100%
  );

  box-shadow: 0px 0px 40px 8px rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(0.7px);

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 32px;
    width: 88%;
    height: auto;
    max-width: 950px;
    max-height: 90%;
    border-radius: 24px;
    border: 2px solid rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(40px);
    padding-bottom: calc(32px - 8px);
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    width: 65%;
  }
`;

export const CardContent = styled.p`
  margin-top: 32px;
  margin-bottom: 8px;
  font-size: 1.3em;
  color: ${({ theme }) => theme.color.white};
`;

export const CardTitle = styled.h1`
  font-size: 3rem;
  font-weight: 400;
  color: ${({ theme }) => theme.color.white};
`;

export const CardSubtitle = styled.h2`
  font-size: 1.2em;
  font-weight: 400;
  color: ${({ theme }) => theme.color.blue};
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
  }
`;

export const CardHeaderText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 32px;
`;

export const CardActions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  align-self: flex-start;
  margin-bottom: calc(32px - 8px);
`;

export const CardActionImage = styled.a`
  margin-right: 8px;
  padding: 8px;

  transition: 300ms;
  cursor: pointer;

  &:hover {
    svg > path {
      fill: ${({ theme }) => theme.color.blue};
    }
    transform: translateY(-5px);
  }
`;

export const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 100%;
  border: 1px solid rgba(255, 255, 255, 0.25);
`;
