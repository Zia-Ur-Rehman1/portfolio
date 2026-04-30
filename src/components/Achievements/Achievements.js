import React, { useState } from 'react';
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

  return (
    <Section id="achievements">
      <SectionDivider />
      <SectionTitle main>Achievements</SectionTitle>
      <GridContainer>
        {AchievementsData.map((item, index) => {
          const isOpen = openIndex === index;
          const count = item.achievements.length;
          return (
            <Card key={index} isOpen={isOpen}>
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
