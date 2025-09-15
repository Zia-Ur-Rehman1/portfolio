import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { LeftSection, StyledButtonLink } from './HeroStyles';

const Hero = (props) => {
  return (
    <>
      <Section row nopadding>
        <LeftSection>
          <SectionTitle main center>
            Zia Ur Rehman
          </SectionTitle>
          <SectionText>
            Software Developer with 4+ years of experience building scalable web applications in real estate, healthcare, and e-commerce industries. Expertise in RESTful/GraphQL API design, MVC architecture, relational database optimization (PostgreSQL, MySQL), and Agile workflows. Proven track record in refactoring legacy systems, performance tuning, and implementing serverless solutions (AWS Lambda). Enhanced system efficiency by 33% through query optimization and metaprogramming, while driving team productivity by 70% via CI/CD pipelines and automated workflows.
          </SectionText>
          <StyledButtonLink
            href={`${process.env.NEXT_PUBLIC_BASE_PATH}/files/resume_latest.pdf`}
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