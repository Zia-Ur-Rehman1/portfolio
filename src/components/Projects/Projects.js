import React from 'react';
import { AiOutlineLink } from 'react-icons/ai'; // Import the link icon
import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Category, Hr, Tag, TagList, TitleContainer } from './ProjectsStyles';
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
            <Category>{p.category}</Category>
            <Hr />
            <CardInfo className="card-info">{p.description}</CardInfo>
            <TagList>
              {p.tags.slice(0, 6).map((t, idx) => (
                <Tag key={idx}>{t}</Tag>
              ))}
              {p.tags.length > 6 && <Tag>+{p.tags.length - 6}</Tag>}
            </TagList>
          </BlogCard>
        );
      })}
    </GridContainer>
  </Section>
);

export default Projects;