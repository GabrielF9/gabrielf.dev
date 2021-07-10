import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.color.black};
  border-top: 1px solid ${({ theme }) => theme.color.grey};
  padding: 36px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Copy = styled.p`
  font-size: 1rem;
  text-align: center;
  font-style: italic;
  color: ${({ theme }) => theme.color.grey};
  margin-top: 16px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 1em;
  }
`;
