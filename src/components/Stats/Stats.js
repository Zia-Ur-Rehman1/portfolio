// Stats.js
import React from 'react';
import { Section } from '../../styles/GlobalComponents';
import { StatsContainer, StatCard, StatValue, StatLabel, StatIconWrapper, StatonBG } from './StatsStyles';
import { statistics } from '../../constants/constants';

const Stats = () => (
  <StatonBG>
  <Section id="stats">
    <StatsContainer>
      {statistics.map((stat) => (
        <StatCard key={stat.id}>
          <StatIconWrapper>
            {stat.icon}
          </StatIconWrapper>
          <StatValue>{stat.value}</StatValue>
          <StatLabel>{stat.label}</StatLabel>
        </StatCard>
      ))}
    </StatsContainer>
  </Section>
  </StatonBG>
);

export default Stats;