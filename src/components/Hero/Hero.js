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
            Full‑Stack Software Engineer (Ruby on Rails + React) based in Pakistan, with 5 years shipping production systems across real estate, healthcare, e‑commerce, communications, travel SaaS, and Saudi software escrow. I own features end‑to‑end and work remote with distributed teams across the US, UAE, and KSA.
          </SectionText>
          <SectionText>
            Strong in performance work, real‑time features (ActionCable, Turbo, WebSockets), and complex integrations — HL7, Experian, RingCentral, AMS360, EPIC, Shopify. Recently shipped Escrow.sa (Rails 8 software escrow inside the KSA data‑residency zone) and built AgencyPortal end‑to‑end (multi‑tenant Umrah travel SaaS), pairing with Claude on day‑to‑day engineering to ship faster without cutting corners.
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
