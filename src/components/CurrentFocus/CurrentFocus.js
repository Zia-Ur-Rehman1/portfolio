import React from 'react';
import { CurrentFocusData } from '../../constants/constants';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { FocusGrid, FocusCard, FocusTitle, FocusHook } from './CurrentFocusStyles';

const CurrentFocus = () => (
  <Section id="current-focus">
    <SectionDivider colorAlt />
    <SectionTitle>Currently Working On</SectionTitle>
    <FocusGrid>
      {CurrentFocusData.map((item, index) => (
        <FocusCard key={index}>
          <FocusTitle>{item.title}</FocusTitle>
          <FocusHook>{item.hook}</FocusHook>
        </FocusCard>
      ))}
    </FocusGrid>
  </Section>
);

export default CurrentFocus;
