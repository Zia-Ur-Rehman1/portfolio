import React, { useState } from "react";
import { Section, SectionDivider, SectionText, SectionTitle } from "../../styles/GlobalComponents";
import {
  CategoryHeading,
  PillRow,
  Pill,
  PillIcon,
  PillLabel,
  DetailPanel,
  DetailIcon,
  DetailText,
  DetailTitle,
  DetailDescription,
} from "./TechnologiesStyles";
import { Skills } from "./Skills";

const Technologies = () => {
  const initialSlug = Skills[0]?.skills[0]?.slug ?? null;
  const [activeSlug, setActiveSlug] = useState(initialSlug);

  const toggle = (slug) => setActiveSlug((prev) => (prev === slug ? null : slug));

  return (
    <Section id="skills">
      <SectionDivider divider />
      <SectionTitle>Skills</SectionTitle>
      <SectionText>
        I have extensive experience working with a variety of technologies as a developer. Tap any skill to see where it's been used.
      </SectionText>

      {Skills.map(({ category, skills }) => {
        const activeSkill = skills.find((s) => s.slug === activeSlug);
        return (
          <div key={category}>
            <CategoryHeading>{category}</CategoryHeading>
            <PillRow>
              {skills.map((skill) => {
                const isActive = skill.slug === activeSlug;
                return (
                  <Pill
                    key={skill.slug}
                    type="button"
                    onClick={() => toggle(skill.slug)}
                    isActive={isActive}
                    aria-pressed={isActive}
                  >
                    <PillIcon>
                      <skill.Component size="2rem" />
                    </PillIcon>
                    <PillLabel>{skill.title}</PillLabel>
                  </Pill>
                );
              })}
            </PillRow>

            {activeSkill && (
              <DetailPanel role="region" aria-live="polite">
                <DetailIcon>
                  <activeSkill.Component size="2.4rem" />
                </DetailIcon>
                <DetailText>
                  <DetailTitle>{activeSkill.title}</DetailTitle>
                  <DetailDescription>
                    {activeSkill.usedIn?.length ? (
                      <>Used in: {activeSkill.usedIn.join(', ')}</>
                    ) : (
                      <activeSkill.Description />
                    )}
                  </DetailDescription>
                </DetailText>
              </DetailPanel>
            )}
          </div>
        );
      })}
    </Section>
  );
};

export default Technologies;
