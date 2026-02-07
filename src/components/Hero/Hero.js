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
            Full‑Stack Software Engineer (Rails + React) with 4+ years building and scaling production systems in real estate, healthcare, e‑commerce, and communications. I focus on Ruby on Rails, React, and modern cloud tooling to ship reliable, maintainable products.
          </SectionText>
          <SectionText>
            Strong in performance work, real‑time features (ActionCable, Turbo, WebSockets), and complex integrations (HL7/healthcare, Experian, RingCentral, AMS360, EPIC, Shopify). Recently, I’ve been adding AI/MCP‑driven automation on top of existing systems.
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
