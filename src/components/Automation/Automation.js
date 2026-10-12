import React from 'react';
import { FiArrowRight, FiTrendingUp } from 'react-icons/fi';
import { AutomationData } from '../../constants/constants';
import { Section, SectionDivider, SectionSubText, SectionTitle } from '../../styles/GlobalComponents';
import {
  Card,
  CardHeader,
  Desc,
  Flow,
  Grid,
  HeaderText,
  IconWrap,
  Outcome,
  Project,
  Stack,
  Status,
  Title,
} from './AutomationStyles';

const Automation = () => (
  <Section id="automation">
    <SectionDivider />
    <SectionTitle main>AI &amp; Automation</SectionTitle>
    <SectionSubText style={{ maxWidth: '780px', margin: '0 auto 2rem', textAlign: 'center' }}>
      Pipelines I have built that take repetitive work off people’s plates, from AI that listens to calls to bots that keep supplier inventory in sync.
    </SectionSubText>
    <Grid>
      {AutomationData.map((item) => (
        <Card key={item.title}>
          <CardHeader>
            <IconWrap aria-hidden="true">{item.icon}</IconWrap>
            <HeaderText>
              <Title>{item.title}</Title>
              <Project>{item.project}</Project>
            </HeaderText>
            <Status>{item.status}</Status>
          </CardHeader>

          <Desc>{item.description}</Desc>

          <Flow aria-label="How it works">
            {item.flow.map((step, i) => (
              <li key={step}>
                <span>{step}</span>
                {i < item.flow.length - 1 && <FiArrowRight aria-hidden="true" />}
              </li>
            ))}
          </Flow>

          <Outcome>
            <FiTrendingUp size="1.6rem" aria-hidden="true" />
            {item.outcome}
          </Outcome>

          <Stack aria-label="Tech stack">
            {item.stack.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </Stack>
        </Card>
      ))}
    </Grid>
  </Section>
);

export default Automation;
