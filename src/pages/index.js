import styled from 'styled-components';
import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Stats from '../components/Stats/Stats'
import Technologies from '../components/Technologies/Technologies';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import Achievements from '../components/Achievements/Achievements';
import CurrentFocus from '../components/CurrentFocus/CurrentFocus';
import Hook from '../components/Hook/Hook';
import Contact from '../components/Contact/Contact';
import SEO from '../components/SEO/SEO';
import Testimonials from '../components/Testimonials/Testimonials';
const Home = () => {
  return (
    <Layout>
      <SEO 
        title="Full Stack Software Engineer"
        description="Expert in Ruby on Rails, React, and modern web technologies. View my portfolio involved in FinTech, HealthTech and E-commerce."
      />
      <Hook />
      <Section grid align="center">
        <Hero />
        <BgAnimation />
        <Stats/>
      </Section>
      <CurrentFocus />
      <Achievements />
      <Projects />
      <Testimonials />
      <Technologies />
      <Acomplishments />
      <Contact />
    </Layout>
  );
};

export default Home;
