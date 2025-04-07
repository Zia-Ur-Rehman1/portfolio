import React from "react";
import { Section, SectionDivider, SectionText, SectionTitle } from "../../styles/GlobalComponents";
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from "./TechnologiesStyles";
import { Skills } from "./Skills";

const Technologies = () => (
  <Section id="skills">
    <SectionDivider divider />
    <SectionTitle>Skills</SectionTitle>
    <SectionText>
      I have extensive experience working with a variety of technologies as a developer. I've developed and maintained multiple projects using these technologies, and I'm always eager to learn more.
    </SectionText>
    {Skills.map(({ category, skills }) => (
      <div key={category}>
        <ListTitle style={{ textAlign: "center", marginBottom: "2rem", fontSize: "30px" }}>{category}</ListTitle>
        <List>
          {skills.map(skill => (
            <ListItem key={skill.slug}>
              <picture>
                <skill.Component size="3rem" />
              </picture>
              <ListContainer>
                <ListTitle>{skill.title}</ListTitle>
                <ListParagraph>
                  <skill.Description />
                </ListParagraph>
              </ListContainer>
            </ListItem>
          ))}
        </List>
      </div>
    ))}
  </Section>
);

export default Technologies;