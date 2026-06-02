import React, { useState } from "react";
import { Section, SectionDivider, SectionText, SectionTitle } from "../../styles/GlobalComponents";
import {
  CategoryHeading,
  PillRow,
  Pill,
  PillIcon,
  PillLabel,
  TierBadge,
  TierLegend,
  DetailPanel,
  DetailIcon,
  DetailText,
  DetailTitle,
  DetailDescription,
} from "./TechnologiesStyles";
import { Skills } from "./Skills";

const tierFor = (skill) => {
  const n = skill.usedIn?.length || 0;
  if (n >= 4) return 'daily';
  if (n >= 1) return 'production';
  return 'fluent';
};

const tierLabel = { daily: 'Daily', production: 'Production', fluent: 'Fluent' };
const tierRank = { daily: 0, production: 1, fluent: 2 };

const Technologies = () => {
  const initialSlug = Skills[0]?.skills[0]?.slug ?? null;
  const [activeSlug, setActiveSlug] = useState(initialSlug);

  const toggle = (slug) => setActiveSlug((prev) => (prev === slug ? null : slug));

  return (
    <Section id="skills">
      <SectionDivider divider />
      <SectionTitle>Skills</SectionTitle>
      <SectionText>
        Honest tiers, not a logo soup. Tap any skill to see where it's been used.
      </SectionText>
      <TierLegend>
        <span><i className="daily" /> Daily — primary stack on live products</span>
        <span><i className="production" /> Production — shipped in at least one project</span>
        <span><i className="fluent" /> Fluent — working knowledge, not currently in production</span>
      </TierLegend>

      {Skills.map(({ category, skills }) => {
        const sortedSkills = [...skills].sort(
          (a, b) => tierRank[tierFor(a)] - tierRank[tierFor(b)]
        );
        const activeSkill = sortedSkills.find((s) => s.slug === activeSlug);
        return (
          <div key={category}>
            <CategoryHeading>{category}</CategoryHeading>
            <PillRow>
              {sortedSkills.map((skill) => {
                const isActive = skill.slug === activeSlug;
                const tier = tierFor(skill);
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
                    <TierBadge tier={tier}>{tierLabel[tier]}</TierBadge>
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
