import { ReactElement } from 'react';
import { MainLayout } from '../components/layout';
import {
  HeroHome,
  AboutMe,
  Experience,
  Portfolio,
  Contact,
} from '../components/ui';

const Home = (): JSX.Element => {
  return (
    <>
      <HeroHome />
      <AboutMe />
      <Experience />
      <Portfolio />
      <Contact />
    </>
  );
};

export default Home;

Home.getLayout = function getLayout(Home: ReactElement) {
  return <MainLayout>{Home}</MainLayout>;
};
