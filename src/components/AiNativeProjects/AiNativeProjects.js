import React, { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { AiNativeProjectsData } from '../../constants/constants';
import { Section, SectionTitle, SectionDivider, SectionSubText } from '../../styles/GlobalComponents';
import {
  Card,
  CardHeader,
  CardHeaderText,
  ChevronWrap,
  Company,
  Duration,
  GridContainer,
  List,
  Role,
  ToggleHint,
  CollapseRegion,
} from '../Achievements/AchievementsStyles';

const AiNativeProjects = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <Section id="ai-native">
      <SectionDivider />
      <SectionTitle main>AI-Native Projects</SectionTitle>
      <SectionSubText style={{ maxWidth: '780px', margin: '0 auto 2rem', textAlign: 'center' }}>
        Independent, AI-assisted builds shipped end-to-end — architecture, code, deploy. Pairing daily with Claude / Codex to ship production systems faster without cutting corners.
      </SectionSubText>
      <GridContainer>
        {AiNativeProjectsData.map((item, index) => {
          const isOpen = openIndex === index;
          const count = item.achievements.length;
          return (
            <Card key={index} isOpen={isOpen}>
              <CardHeader
                role="button"
                tabIndex={0}
                aria-expanded={isOpen}
                aria-controls={`ai-native-panel-${index}`}
                onClick={() => toggle(index)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggle(index);
                  }
                }}
              >
                <CardHeaderText>
                  <Role>{item.role} | {item.location}</Role>
                  <Company>{item.company}</Company>
                  {item.link && (
                    <Duration>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        style={{ color: 'inherit', textDecoration: 'underline', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
                      >
                        Visit live <FaExternalLinkAlt size="0.8em" />
                      </a>
                    </Duration>
                  )}
                  <ToggleHint>
                    {isOpen ? 'Hide details' : `Show ${count} highlight${count > 1 ? 's' : ''}`}
                  </ToggleHint>
                </CardHeaderText>
                <ChevronWrap isOpen={isOpen} aria-hidden="true">
                  <FiChevronDown size="1.6rem" />
                </ChevronWrap>
              </CardHeader>

              <CollapseRegion
                id={`ai-native-panel-${index}`}
                isOpen={isOpen}
                aria-hidden={!isOpen}
              >
                <List>
                  {item.achievements.map((ach, i) => (
                    <li key={i}>{ach}</li>
                  ))}
                </List>
              </CollapseRegion>
            </Card>
          );
        })}
      </GridContainer>
    </Section>
  );
};

export default AiNativeProjects;
