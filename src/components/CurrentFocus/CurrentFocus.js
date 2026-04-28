import React from 'react';
import { CurrentFocusData } from '../../constants/constants';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { FocusGrid, FocusCard, FocusTitle, FocusHook } from './CurrentFocusStyles';

const CurrentFocus = () => (
  <Section id="current-focus">
    <SectionDivider colorAlt />
    <SectionTitle>Currently Working On</SectionTitle>
    <FocusGrid>
      {CurrentFocusData.map((item) => {
        const card = (
          <FocusCard>
            <FocusTitle>{item.title}</FocusTitle>
            <FocusHook>{item.hook}</FocusHook>
          </FocusCard>
        );
        return item.link ? (
          <a
            key={item.title}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', display: 'flex' }}
          >
            {card}
          </a>
        ) : (
          <div key={item.title} style={{ display: 'flex' }}>{card}</div>
        );
      })}
    </FocusGrid>
  </Section>
);

export default CurrentFocus;
