import React from 'react';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxTitle, BoxText } from './AcomplishmentsStyles';
import { AccomplishmentsData } from '../../constants/constants';

const Acomplishments = () => (
  <Section id="about">
    <SectionDivider divider colorAlt />
    <SectionTitle>Work Experience</SectionTitle>
    <Boxes>
      {AccomplishmentsData.map((card, index) => (
        <Box key={index}>
          <BoxTitle>{card.title}</BoxTitle>
          <BoxText>{card.role}</BoxText>
          <BoxText>{card.duration}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
