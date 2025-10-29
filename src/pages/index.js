import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Stats from '../components/Stats/Stats'
import Technologies from '../components/Technologies/Technologies';
import { Layout } from '../layout/Layout';
import {BgAnimationContainer} from '../components/BackgrooundAnimation/BackgroundAnimationStyles'
import { Section } from '../styles/GlobalComponents';
import Achievements from '../components/Achievements/Achievements';
const Home = () => {
  return (
    <Layout>
      <Section grid align="center">
        <Hero />
        <BgAnimation />
      <Stats/>
      </Section>
      <Achievements />
      <Projects />
      <Technologies />
      <Acomplishments />
    </Layout>
  );
};

export default Home;
