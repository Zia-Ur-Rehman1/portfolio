import React from 'react';
import { HookBanner, HookLabel, HookText } from './HookStyles';
import { Section } from '../../styles/GlobalComponents';

const Hook = () => {
  return (
      <Section align="center">
        <HookBanner>
            <HookText>
              Open to global remote roles and onsite opportunities in Pakistan<br />
              Looking for Ruby on Rails & React full‑stack opportunities<br />
              Comfortable owning end‑to‑end features and collaborating closely with product teams.
            </HookText>
        </HookBanner>
      </Section>
  );
};

export default Hook;
