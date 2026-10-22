import React from 'react';
import { AiOutlineLink } from 'react-icons/ai'; // Import the link icon
import { BlogCard, CardImage, CardInfo, SeeWork, ExternalLinks, GridContainer, HeaderThree, Category, Hr, TitleContainer } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { ProjectsData } from '../../constants/constants';

const Projects = () => (
  <Section id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {ProjectsData.map((p, i) => {
        return (
          <BlogCard key={i}>
            <CardImage>
              {p.image ? (
                <img src={p.image} alt={`${p.title} screenshot`} loading="lazy" />
              ) : (
                <span aria-hidden="true">{p.title.charAt(0)}</span>
              )}
            </CardImage>
            <TitleContainer>
              <HeaderThree title={p.title}>{p.title}</HeaderThree>
              <ExternalLinks href={p.visit} aria-label="Live Preview">
                <AiOutlineLink size="1.5rem" />
              </ExternalLinks>
            </TitleContainer>
            <Category>{p.category}</Category>
            <Hr />
            <CardInfo className="card-info">{p.description}</CardInfo>
            {p.experienceKey && (
              <SeeWork
                href={`#experience-${p.experienceKey}`}
                onClick={(e) => {
                  e.preventDefault();
                  window.history.pushState(null, null, `#experience-${p.experienceKey}`);
                  window.dispatchEvent(new CustomEvent('open-experience', { detail: p.experienceKey }));
                }}
              >
                See what I did →
              </SeeWork>
            )}
          </BlogCard>
        );
      })}
    </GridContainer>
  </Section>
);

export default Projects;