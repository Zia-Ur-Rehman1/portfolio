import React from 'react';
import { HookBanner, HookLabel, HookText } from './HookStyles';
import { Section } from '../../styles/GlobalComponents';
const Hook = () => {
  return (
      <Section align="center">
        <HookBanner>
          <HookText>
            I turn ideas into smooth, scalable products enhanced by AI, built with strong testing, clean architecture, and responsive design that drive performance and engagement.
          </HookText>
        </HookBanner>
      </Section>
  );
};
export default Hook;