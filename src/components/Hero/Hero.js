import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { GradientText, LeftSection, StyledButtonLink } from './HeroStyles';
import { StatsContainer, StatCard, StatLabel, StatValue } from '../Stats/StatsStyles';
import { statistics } from '../../constants/constants';
const Hero = (props) => {
  return (
    <>
      <Section row nopadding>
        <LeftSection>
          <SectionTitle main center>
            <GradientText>Zia Ur Rehman</GradientText>
          </SectionTitle>
          <SectionText>
            FullStack Software Developer with 4+ years of experience delivering high-performance web applications across real estate, healthcare, e-commerce, and call-center industries. Proficient in Ruby on Rails, React, and Django, with expertise in RESTful/GraphQL API design, MVC architecture, and both relational (PostgreSQL, MySQL) and non-relational (Firebase, Redis) databases.
          </SectionText>
          <SectionText>
            Skilled in building real-time communication systems with ActionCable, WebSockets, and Hotwire/Stimulus, and integrating HIPAA-compliant healthcare solutions with HL7 APIs. Adept at modernizing legacy platforms, optimizing system performance, and designing scalable architectures that support seamless integrations and long-term growth.
          </SectionText>
          <StyledButtonLink
            href="files/Zia_Rehman_Full_Stack_Developer.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            My Resume
          </StyledButtonLink>
        </LeftSection>
      </Section>
    </>
  );
};

export default Hero;
