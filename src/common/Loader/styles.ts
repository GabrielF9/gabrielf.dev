import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: url('/assets/bg.png'), ${({ theme }) => theme.gradient.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
