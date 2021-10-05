import { Copy } from './styles';

type FooterProps = {
  hideOnMobile?: boolean;
  showOnMobile?: boolean;
};

const Footer = ({ hideOnMobile, showOnMobile }: FooterProps) => {
  return (
    <Copy hideOnMobile={hideOnMobile} showOnMobile={showOnMobile}>
      Gabriel Ferreira © 2021
    </Copy>
  );
};

export default Footer;
