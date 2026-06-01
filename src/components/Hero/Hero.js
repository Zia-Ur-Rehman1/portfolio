import React from 'react';
import { FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { CtaRow, GradientText, LeftSection, SecondaryButtonLink, StyledButtonLink } from './HeroStyles';

const Hero = () => {
  return (
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          <GradientText>Zia Ur Rehman</GradientText>
        </SectionTitle>
        <SectionText>
          Rails 8 + React engineer. I ship multi-tenant SaaS, real-time integrations, and AI pipelines end-to-end — production-grade, not prototypes.
        </SectionText>
        <SectionText>
          4+ years across FinTech, HealthTech, e-commerce, communications, travel SaaS, and Saudi software escrow. Remote with US, UAE, and KSA teams. Strong in performance work, ActionCable / Turbo real-time, and complex integrations (HL7, Experian, RingCentral, AMS360, EPIC, Shopify). Pair daily with Claude / Codex to ship faster without cutting corners.
        </SectionText>
        <SectionText>
          Independently shipped three AI-native production builds: <strong>Escrow.sa</strong> (KSA software escrow on Rails 8), <strong>AgencyPortal</strong> (multi-tenant travel SaaS, 12 supplier portals via scripted Selenium), and <strong>Yushas Collection</strong> (Rails 8 storefront).
        </SectionText>
        <CtaRow>
          <StyledButtonLink
            href="files/Zia_Rehman_Full_Stack_Developer.pdf"
            target="_blank"
            rel="noopener noreferrer"
            $alt
          >
            <FiDownload style={{ marginRight: '8px' }} /> Resume
          </StyledButtonLink>
          <SecondaryButtonLink href="mailto:zia.rehman.web@gmail.com">
            <FaEnvelope /> Email
          </SecondaryButtonLink>
          <SecondaryButtonLink
            href="https://wa.me/923131407828"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp /> WhatsApp
          </SecondaryButtonLink>
        </CtaRow>
      </LeftSection>
    </Section>
  );
};

export default Hero;
