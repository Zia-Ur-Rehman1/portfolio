import React from 'react';
import { AiOutlineLink } from 'react-icons/ai'; // Import the link icon
import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img, TitleContainer } from './ProjectsStyles';
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
            <TitleContainer>
              <HeaderThree title={p.title}>{p.title}</HeaderThree>
              <ExternalLinks href={p.visit} aria-label="Live Preview">
                <AiOutlineLink size="1.5rem" />
              </ExternalLinks>
            </TitleContainer>
            <Hr />
            <CardInfo className="card-info">{p.description}</CardInfo>
            <div>
              <TitleContent>Tech Stack</TitleContent>
              <Hr />
              <TagList>
                {p.tags.map((t, i) => {
                  return <Tag key={i}>{t}</Tag>;
                })}
              </TagList>
            </div>
          </BlogCard>
        );
      })}
    </GridContainer>
  </Section>
);

export default Projects;