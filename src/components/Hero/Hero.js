import React from 'react';
import { FaEnvelope, FaWhatsapp, FaHandshake } from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { CtaRow, GradientText, LeftSection, SecondaryButtonLink, StyledButtonLink } from './HeroStyles';
import { RESUME_PDF_URL } from '../../constants/site';

const Hero = () => {
  const handleHireClick = (e) => {
    e.preventDefault();
    const target = document.getElementById('contact');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.pushState(null, null, '#contact');
    }
  };

  return (
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          <GradientText>Zia Ur Rehman</GradientText>
        </SectionTitle>
        
        <SectionText>
          Full-Stack Ruby on Rails Engineer + React engineer. I ship multi-tenant SaaS, real-time integrations, and AI pipelines end-to-end, production-grade, not prototypes.
        </SectionText>
        <SectionText>
          4+ years across Communications, RealEstate, HealthCare, E-commerce, Travel SaaS, and Saudi software escrow. Remote with US, UAE, and KSA teams. Strong in performance work, ActionCable / Turbo real-time, and complex integrations (HL7, Experian, RingCentral, AMS360, EPIC, Shopify). Pair daily with Claude / Codex to ship faster without cutting corners.
        </SectionText>
        <SectionText>
          Independently shipped three AI-native production builds: <strong>Escrow.sa</strong> (KSA software escrow on Rails 8), <strong>AgencyPortal</strong> (multi-tenant travel SaaS, 12 supplier portals via scripted Selenium), and <strong>Yushas Collection</strong> (Rails 8 storefront).
        </SectionText>
        <CtaRow>
          <StyledButtonLink href="#contact" onClick={handleHireClick}>
            <FaHandshake style={{ marginRight: '10px' }} /> Hire Me
          </StyledButtonLink>
          <StyledButtonLink
            href={RESUME_PDF_URL}
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
