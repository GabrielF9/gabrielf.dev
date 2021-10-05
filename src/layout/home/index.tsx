import { Container } from './styles';
import { GlassyCard } from './components';
import Footer from '@/common/Footer';

export const Home = () => {
  return (
    <>
      <Container>
        <div />
        <GlassyCard />
        <Footer hideOnMobile />
      </Container>
    </>
  );
};
