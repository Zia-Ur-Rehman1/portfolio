import React from 'react';
import { ServicesData } from '../../constants/constants';
import { Section, SectionTitle, SectionDivider, SectionSubText } from '../../styles/GlobalComponents';
import { Bullets, Card, Desc, Grid, IconWrap, Title } from './ServicesStyles';

const Services = () => {
  return (
    <Section id="services">
      <SectionDivider />
      <SectionTitle main>Services</SectionTitle>
      <SectionSubText style={{ maxWidth: '780px', margin: '0 auto 2rem', textAlign: 'center' }}>
        Practical engineering help, from greenfield builds to surgical fixes on systems already in production.
      </SectionSubText>
      <Grid>
        {ServicesData.map((service, index) => (
          <Card key={index}>
            <IconWrap aria-hidden="true">{service.icon}</IconWrap>
            <Title>{service.title}</Title>
            <Desc>{service.description}</Desc>
            <Bullets>
              {service.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </Bullets>
          </Card>
        ))}
      </Grid>
    </Section>
  );
};

export default Services;
