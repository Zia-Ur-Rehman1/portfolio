import React from 'react';
import { FaEnvelope, FaHandshake, FaCheckCircle } from 'react-icons/fa';
import { FiChevronDown, FiDownload } from 'react-icons/fi';
import { Section, SectionTitle } from '../../styles/GlobalComponents';
import {
  Chips,
  CredentialBadge,
  CtaRow,
  GradientText,
  Headline,
  LeftSection,
  MoreAbout,
  SecondaryButtonLink,
  StyledButtonLink,
  Supporting,
} from './HeroStyles';
import { PSEB_CREDENTIAL, RESUME_PDF_URL } from '../../constants/site';

const HERO_CHIPS = ['Senior SWE @ TK Designs', 'Rails · React · Python', 'Builds with Claude Code', 'US · UAE · KSA'];

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

        <CredentialBadge title={`${PSEB_CREDENTIAL.issuer} · Reg. No. ${PSEB_CREDENTIAL.registrationNo}`}>
          <FaCheckCircle size="1.6rem" />
          <span>
            <a href={PSEB_CREDENTIAL.certificateUrl} target="_blank" rel="noopener noreferrer">
              <strong>{PSEB_CREDENTIAL.label}</strong>
            </a>{' '}
            <small>· Reg. {PSEB_CREDENTIAL.registrationNo} · Valid till {PSEB_CREDENTIAL.validTill} · </small>
            <a href={PSEB_CREDENTIAL.verifyUrl} target="_blank" rel="noopener noreferrer">
              <small className="verify">Verify ↗</small>
            </a>
          </span>
        </CredentialBadge>

        <Headline>
          <strong>Senior Ruby on Rails engineer.</strong> I build the backends that real businesses run on.
        </Headline>
        <Supporting>
          Rails is my main stack, and I ship React frontends and Python services (Django, FastAPI) too. 4+ years
          building SaaS, real-time apps and integrations for teams in the US, UAE and Saudi Arabia.
        </Supporting>

        <Chips aria-label="At a glance">
          {HERO_CHIPS.map((chip) => (
            <li key={chip}>{chip}</li>
          ))}
        </Chips>

        <MoreAbout>
          <summary>
            More about me <FiChevronDown aria-hidden="true" />
          </summary>
          <div>
            <p>
              I have spent 4+ years across communications, real estate, healthcare, e-commerce, travel SaaS and
              Saudi software escrow, working remotely with teams in the US, UAE and KSA.
            </p>
            <p>
              I am strongest in performance work, real-time features with ActionCable and Turbo, and complex
              integrations: HL7, Experian, RingCentral, AMS360, Applied EPIC, Shopify, Stripe and WhatsApp.
            </p>
            <p>
              On my own I have shipped three production builds: <strong>Escrow.sa</strong> (software escrow for the
              Saudi market, Rails 8), <strong>AgencyPortal</strong> (multi-tenant travel SaaS connected to 12 supplier
              portals) and <strong>Yushas Collection</strong> (Rails 8 storefront).
            </p>
            <p>
              I build with Claude Code every day: it speeds up the routine work so I can spend my time on design,
              review and the hard problems.
            </p>
          </div>
        </MoreAbout>

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
        </CtaRow>
      </LeftSection>
    </Section>
  );
};

export default Hero;
