import TypewriterComponent from 'typewriter-effect';
import { Container, ComingSoonContent, Title, Subtitle } from './styles';

export const ComingSoon = () => {
  return (
    <Container>
      <ComingSoonContent>
        <Title>COMING SOON</Title>
        <Subtitle>
          <TypewriterComponent
            options={{
              strings: [
                'Gabriel Ferreira',
                'Frontend',
                'Mobile',
                'Backend',
                'UI/UX Design',
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </Subtitle>
      </ComingSoonContent>
    </Container>
  );
};
