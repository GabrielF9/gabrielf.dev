import {
  Card,
  CardTitle,
  CardSubtitle,
  CardHeader,
  CardActions,
  CardContent,
  CardHeaderText,
  ProfileImage,
  CardActionImage,
} from './styles';

import Github from '@/common/Github';
import LinkedIn from '@/common/LinkedIn';
import Twitter from '@/common/Twitter';
import Instagram from '@/common/Instagram';
import Dribbble from '@/common/Dribbble';
import Footer from '@/common/Footer';

const actions = [
  { url: 'https://github.com/GabrielF9', image: <Github /> },
  { url: 'https://www.linkedin.com/in/gabrielf-dev/', image: <LinkedIn /> },
  { url: 'https://twitter.com/gabrielf_dev', image: <Twitter /> },
  { url: 'https://www.instagram.com/gabrielf.dev/', image: <Instagram /> },
  { url: 'https://dribbble.com/gabrielf-dev', image: <Dribbble /> },
];

export const GlassyCard = () => {
  return (
    <Card>
      <CardHeader>
        <ProfileImage src="/assets/profile.jpeg" alt="Gabriel Ferreira" />
        <CardHeaderText>
          <CardTitle>Hi, I’m Gabriel 👋</CardTitle>
          <CardSubtitle>The only way is up ✨</CardSubtitle>
        </CardHeaderText>
      </CardHeader>
      <CardContent>
        I&apos;m a <strong>Software Engineer</strong>, graduating in{' '}
        <strong>Computer Science</strong>, currently working with JavaScript,
        React, React Native and Flutter. In the way to improve my knowledge and
        practices in Front-End Development, focusing on Web and Mobile
        applications. Using UI/UX techniques in order to create systems that are
        simple and intuitive to the user.
        <br />
        <br /> Checkout my social media accounts to see what I’m up to.
      </CardContent>
      <CardActions>
        {actions.map((item, key) => (
          <CardActionImage key={key} href={item.url} target="_blank">
            {item.image}
          </CardActionImage>
        ))}
      </CardActions>
      <Footer showOnMobile />
    </Card>
  );
};
