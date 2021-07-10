import { Copy, Container } from './styles';
import Image from 'next/image';

const Footer = () => {
  return (
    <Container>
      <Image
        src="/assets/logo.png"
        width={50}
        height={50}
        alt={`Set of rectangles that forms a monogram for Gabriel Ferreira.`}
      />
      <Copy>Gabriel Ferreira © 2021</Copy>
    </Container>
  );
};

export default Footer;
