import React, { useEffect, useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { AchievementsData } from '../../constants/constants';
import { Section, SectionTitle, SectionDivider } from '../../styles/GlobalComponents';
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
} from './AchievementsStyles';

const Achievements = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  // Project cards link here: open the matching job and scroll it into view
  useEffect(() => {
    const openByKey = (key) => {
      const index = AchievementsData.findIndex((item) => item.key === key);
      if (index === -1) return;
      setOpenIndex(index);
      requestAnimationFrame(() => {
        document.getElementById(`experience-${key}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    };
    const onOpen = (e) => openByKey(e.detail);
    window.addEventListener('open-experience', onOpen);
    const match = window.location.hash.match(/^#experience-(.+)$/);
    if (match) openByKey(match[1]);
    return () => window.removeEventListener('open-experience', onOpen);
  }, []);

  return (
    <Section id="achievements">
      <SectionDivider />
      <SectionTitle main>Experience</SectionTitle>
      <GridContainer>
        {AchievementsData.map((item, index) => {
          const isOpen = openIndex === index;
          const count = item.achievements.length;
          return (
            <Card key={index} id={item.key ? `experience-${item.key}` : undefined} isOpen={isOpen}>
              <CardHeader
                role="button"
                tabIndex={0}
                aria-expanded={isOpen}
                aria-controls={`achievement-panel-${index}`}
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
                  <Duration>{item.duration}</Duration>
                  <ToggleHint>
                    {isOpen
                      ? 'Hide details'
                      : `Show ${count} achievement${count > 1 ? 's' : ''}`}
                  </ToggleHint>
                </CardHeaderText>
                <ChevronWrap isOpen={isOpen} aria-hidden="true">
                  <FiChevronDown size="1.6rem" />
                </ChevronWrap>
              </CardHeader>

              <CollapseRegion
                id={`achievement-panel-${index}`}
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

export default Achievements;
