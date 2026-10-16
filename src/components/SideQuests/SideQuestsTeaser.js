import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { FiArrowRight } from 'react-icons/fi';
import { GiCrossedSwords } from 'react-icons/gi';
import { Arcs, Games } from '../../constants/sideQuests';

const Wrap = styled.section`
  margin: 6rem 4.8rem 0;
  padding: 4rem;
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 3.2rem;
  align-items: center;
  border-radius: 20px;
  border: 1px solid rgba(76, 201, 255, 0.35);
  background:
    radial-gradient(600px 300px at 100% 0%, rgba(255, 111, 165, 0.18), transparent 60%),
    linear-gradient(135deg, #0b1630, #070b18);
  box-shadow: 0 0 40px rgba(76, 201, 255, 0.12);

  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: 1fr;
    margin: 4.8rem 1.6rem 0;
    padding: 2.8rem 2rem;
  }
`;

const Eyebrow = styled.p`
  margin: 0 0 1.2rem;
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 1.25rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #4cc9ff;
`;

const Heading = styled.h2`
  margin: 0 0 1.6rem;
  font-family: ${(props) => props.theme.fonts.title};
  font-size: clamp(3rem, 4.5vw, 4.4rem);
  line-height: 1.1;
  color: #fff;

  span {
    color: #ff6fa5;
  }
`;

const Text = styled.p`
  margin: 0 0 2.4rem;
  font-size: 1.7rem;
  line-height: 1.6;
  color: rgba(219, 231, 255, 0.75);
`;

const Button = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  padding: 1.2rem 2.4rem;
  border-radius: 999px;
  font-size: 1.5rem;
  font-weight: 700;
  color: #061020;
  background: #4cc9ff;
  text-decoration: none;
  box-shadow: 0 0 24px rgba(76, 201, 255, 0.4);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  font-family: 'JetBrains Mono', ui-monospace, monospace;

  li {
    display: flex;
    justify-content: space-between;
    gap: 1.2rem;
    padding: 1.2rem 0;
    border-bottom: 1px solid rgba(219, 231, 255, 0.08);
    font-size: 1.4rem;
    color: #fff;
  }

  li span {
    color: rgba(219, 231, 255, 0.5);
    font-size: 1.2rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    white-space: nowrap;
  }
`;

const preview = [
  ...Games.filter((q) => q.status === 'cleared').map((q) => ({ title: q.title, kind: 'Game' })),
  ...Arcs.slice(0, 2).map((q) => ({ title: q.title, kind: 'Experiment' })),
];

const SideQuestsTeaser = () => (
  <Wrap id="side-quests" aria-labelledby="side-quests-heading">
    <div>
      <Eyebrow>[System] Off the clock</Eyebrow>
      <Heading id="side-quests-heading">
        After work, I take on <span>side quests.</span>
      </Heading>
      <Text>Games, AI agents and experiments with whatever new tech I am learning, fuelled by anime and curiosity.</Text>
      <Link href="/side-quests" passHref legacyBehavior>
        <Button>
          <GiCrossedSwords aria-hidden="true" /> Enter Side Quests <FiArrowRight aria-hidden="true" />
        </Button>
      </Link>
    </div>
    <List>
      {preview.map((item) => (
        <li key={item.title}>
          {item.title}
          <span>{item.kind}</span>
        </li>
      ))}
    </List>
  </Wrap>
);

export default SideQuestsTeaser;
