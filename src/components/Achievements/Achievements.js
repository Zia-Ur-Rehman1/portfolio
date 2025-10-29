import React from 'react';
import { AchievementsData } from '../../constants/constants';
import { Section, SectionTitle, SectionDivider } from '../../styles/GlobalComponents';
import { Card, Company, Duration, GridContainer, List, Role } from './AchievementsStyles';

const Achievements = () => (
  <Section id="achievements">
        <SectionDivider />

    <SectionTitle main>Achievements</SectionTitle>
    <GridContainer>
      {AchievementsData.map((item, index) => (
        <Card key={index}>
          <Role>{item.role} | {item.location}</Role>
          <Company>{item.company}</Company>
          <List>
            {item.achievements.map((ach, i) => (
              <li key={i}>{ach}</li>
            ))}
          </List>
        </Card>
      ))}
    </GridContainer>
  </Section>
);
export default Achievements;