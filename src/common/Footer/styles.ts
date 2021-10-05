import styled from 'styled-components';

interface CopyProps {
  hideOnMobile?: boolean;
  showOnMobile?: boolean;
}

export const Copy = styled.p<CopyProps>`
  font-family: 'Lora', serif;
  font-style: italic;

  color: ${({ theme }) => theme.color.white};

  font-size: 1rem;
  text-align: center;
  margin-bottom: 12px;

  display: ${props =>
    props.showOnMobile ? 'block' : props.hideOnMobile ? 'none' : 'block'};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    margin-right: 12px;
    margin-bottom: 0;
    display: ${props =>
      props.showOnMobile ? 'none' : props.hideOnMobile ? 'block' : 'none'};
  }
`;

Copy.defaultProps = {
  hideOnMobile: false,
  showOnMobile: false,
};
