import styled, { createGlobalStyle, keyframes, css } from 'styled-components';

const SYSTEM = '#4cc9ff';
const SAKURA = '#ff6fa5';
const GOLD = '#ffd166';
const MONO = "'JetBrains Mono', 'Fira Code', ui-monospace, SFMono-Regular, Menlo, monospace";

export const palette = { SYSTEM, SAKURA, GOLD };

export const PageBackground = createGlobalStyle`
  body {
    background:
      radial-gradient(1200px 600px at 85% -10%, rgba(76, 201, 255, 0.12), transparent 60%),
      radial-gradient(900px 500px at -10% 30%, rgba(255, 111, 165, 0.10), transparent 60%),
      #070b18;
  }
`;

const flicker = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.55; }
`;

const rise = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
`;

const scan = keyframes`
  from { transform: translateY(-100%); }
  to { transform: translateY(100%); }
`;

const fall = keyframes`
  0% { transform: translate3d(0, -10vh, 0) rotate(0deg); opacity: 0; }
  10% { opacity: 0.9; }
  100% { transform: translate3d(-12vw, 110vh, 0) rotate(540deg); opacity: 0; }
`;

export const Petals = styled.div`
  position: fixed;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
  z-index: 0;

  span {
    position: absolute;
    top: 0;
    width: 10px;
    height: 8px;
    border-radius: 80% 0 80% 0;
    background: linear-gradient(135deg, #ffc2d9, ${SAKURA});
    opacity: 0;
    animation: ${fall} linear infinite;
  }

  @media (prefers-reduced-motion: reduce) {
    display: none;
  }
`;

export const Page = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2.4rem 6rem;
  color: #dbe7ff;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0 1.6rem 4rem;
  }
`;

/* ---------- Top bar ---------- */

export const TopBar = styled.header`
  position: sticky;
  top: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.6rem;
  margin: 0 -2.4rem;
  padding: 1.4rem 2.4rem;
  background: rgba(7, 11, 24, 0.82);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(76, 201, 255, 0.15);

  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 0 -1.6rem;
    padding: 1.2rem 1.6rem;
  }
`;

export const Player = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  font-family: ${MONO};
  font-size: 1.3rem;
  letter-spacing: 0.12em;
  color: #dbe7ff;
  text-decoration: none;
  text-transform: uppercase;
  white-space: nowrap;

  @media ${(props) => props.theme.breakpoints.sm} {
    span { display: none; }
  }

  i {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #3ddc97;
    box-shadow: 0 0 10px #3ddc97;
    animation: ${flicker} 2.4s ease-in-out infinite;
  }
`;

export const TopNav = styled.nav`
  display: flex;
  gap: 2.4rem;

  a {
    font-family: ${MONO};
    font-size: 1.2rem;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: rgba(219, 231, 255, 0.6);
    text-decoration: none;
    transition: color 0.2s ease;
  }

  a:hover {
    color: ${SYSTEM};
  }

  @media ${(props) => props.theme.breakpoints.md} {
    display: none;
  }
`;

export const ModeToggle = styled.div`
  display: inline-flex;
  padding: 0.3rem;
  border-radius: 999px;
  border: 1px solid rgba(76, 201, 255, 0.25);
  background: rgba(255, 255, 255, 0.03);

  a {
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    padding: 0.6rem 1.4rem;
    border-radius: 999px;
    font-size: 1.3rem;
    font-weight: 600;
    text-decoration: none;
    color: rgba(219, 231, 255, 0.7);
    white-space: nowrap;
    transition: background 0.2s ease, color 0.2s ease;

    @media ${(props) => props.theme.breakpoints.sm} {
      padding: 0.6rem 1rem;
      font-size: 1.2rem;
    }
  }

  a:hover {
    color: #fff;
  }

  a[aria-current='page'] {
    color: #061020;
    background: ${SYSTEM};
    box-shadow: 0 0 18px rgba(76, 201, 255, 0.45);
  }
`;

/* ---------- Hero ---------- */

export const Hero = styled.section`
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  align-items: start;
  gap: 4rem;
  padding: 7rem 0 6rem;

  @media ${(props) => props.theme.breakpoints.lg} {
    grid-template-columns: 1fr;
    padding: 4.8rem 0 4rem;
  }
`;

export const HeroText = styled.div`
  animation: ${rise} 0.7s ease-out both;
`;

export const SystemLine = styled.p`
  margin: 0 0 2rem;
  font-family: ${MONO};
  font-size: 1.3rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${SYSTEM};

  b {
    color: ${SAKURA};
    font-weight: 600;
  }
`;

export const BigTitle = styled.h1`
  margin: 0;
  font-family: ${(props) => props.theme.fonts.title};
  font-size: clamp(5.2rem, 9vw, 10rem);
  line-height: 0.95;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: #fff;

  span {
    display: block;
    background: linear-gradient(90deg, ${SAKURA}, #c77dff 45%, ${SYSTEM});
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    filter: drop-shadow(0 0 24px rgba(255, 111, 165, 0.35));
  }
`;

export const ClockRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1.2rem;
  margin: 2.8rem 0 2.4rem;
  font-family: ${MONO};
  font-size: 1.25rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;

  strong {
    display: inline-flex;
    align-items: center;
    gap: 0.8rem;
    padding: 0.6rem 1.2rem;
    border-radius: 999px;
    border: 1px solid rgba(255, 111, 165, 0.4);
    color: #fff;
    font-weight: 500;
  }

  strong::before {
    content: '';
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${SAKURA};
    animation: ${flicker} 1.6s ease-in-out infinite;
  }

  small {
    font-size: 1.2rem;
    color: rgba(219, 231, 255, 0.55);
  }
`;

export const Lead = styled.p`
  max-width: 560px;
  margin: 0 0 3.2rem;
  font-size: 1.8rem;
  line-height: 1.6;
  color: rgba(219, 231, 255, 0.78);
`;

export const Cta = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  padding: 1.3rem 2.4rem;
  border-radius: 999px;
  font-size: 1.5rem;
  font-weight: 700;
  color: #061020;
  background: #fff;
  text-decoration: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(76, 201, 255, 0.35);
  }
`;

/* ---------- Status window ---------- */

export const Window = styled.aside`
  position: relative;
  overflow: hidden;
  padding: 2.4rem;
  border-radius: 6px;
  font-family: ${MONO};
  color: #e6f4ff;
  background: linear-gradient(180deg, rgba(12, 32, 62, 0.92), rgba(7, 18, 40, 0.92));
  border: 1px solid ${SYSTEM};
  box-shadow:
    0 0 0 1px rgba(76, 201, 255, 0.2) inset,
    0 0 40px rgba(76, 201, 255, 0.25),
    0 20px 60px rgba(0, 0, 0, 0.5);
  animation: ${rise} 0.9s 0.15s ease-out both;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: linear-gradient(180deg, transparent, rgba(76, 201, 255, 0.07), transparent);
    animation: ${scan} 4s linear infinite;
  }

  @media (prefers-reduced-motion: reduce) {
    &::after { display: none; }
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 1.8rem;
  }

  @media screen and (min-width: 1025px) {
    position: sticky;
    top: 9rem;
  }
`;

export const WindowTitle = styled.div`
  display: flex;
  justify-content: center;
  margin: -0.4rem 0 2rem;

  span {
    padding: 0.4rem 2.4rem;
    border: 1px solid rgba(76, 201, 255, 0.6);
    font-size: 1.4rem;
    font-weight: 700;
    letter-spacing: 0.4em;
    text-shadow: 0 0 10px ${SYSTEM};
  }
`;

export const InfoGrid = styled.dl`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0.8rem 1.6rem;
  margin: 0 0 2rem;
  font-size: 1.35rem;

  dt {
    color: rgba(230, 244, 255, 0.55);
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  dd {
    margin: 0;
    color: #fff;
    overflow-wrap: anywhere;
  }

  dd em {
    font-style: normal;
    color: ${GOLD};
  }
`;

export const Divider = styled.hr`
  border: 0;
  border-top: 1px dashed rgba(76, 201, 255, 0.35);
  margin: 0 0 1.8rem;
`;

export const StatRow = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: center;
  gap: 1.2rem;
  margin-bottom: 1rem;
  font-size: 1.3rem;

  span:first-child {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const Pips = styled.span`
  display: inline-flex;
  gap: 4px;

  i {
    width: 16px;
    height: 8px;
    border-radius: 2px;
    background: rgba(76, 201, 255, 0.15);
    border: 1px solid rgba(76, 201, 255, 0.35);
  }

  i[data-on='true'] {
    background: ${SYSTEM};
    box-shadow: 0 0 8px rgba(76, 201, 255, 0.7);
  }
`;

export const WindowFooter = styled.p`
  margin: 1.8rem 0 0;
  font-size: 1.25rem;
  color: rgba(230, 244, 255, 0.7);

  b {
    color: ${SAKURA};
    font-weight: 600;
  }
`;

/* ---------- Sections ---------- */

export const Block = styled.section`
  padding: 5.6rem 0 0;
  scroll-margin-top: 80px;
`;

export const BlockHead = styled.div`
  margin-bottom: 2.8rem;

  p {
    margin: 0 0 0.8rem;
    font-family: ${MONO};
    font-size: 1.25rem;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: ${SYSTEM};
  }

  h2 {
    margin: 0;
    font-family: ${(props) => props.theme.fonts.title};
    font-size: clamp(3rem, 4.5vw, 4.4rem);
    color: #fff;
  }

  h2 span {
    color: ${SAKURA};
  }

  small {
    display: block;
    margin-top: 0.8rem;
    font-size: 1.5rem;
    color: rgba(219, 231, 255, 0.6);
  }
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.6rem;

  @media ${(props) => props.theme.breakpoints.lg} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: 1fr;
  }
`;

const statusColors = {
  cleared: '#3ddc97',
  active: SYSTEM,
  locked: 'rgba(219, 231, 255, 0.45)',
  played: GOLD,
};

export const QuestCard = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  padding: 2rem;
  border-radius: 14px;
  background: rgba(14, 22, 44, 0.75);
  border: 1px solid rgba(219, 231, 255, 0.08);
  transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: ${({ $status }) => statusColors[$status]};
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.35), 0 0 24px ${({ $status }) => ($status === 'locked' ? 'transparent' : 'rgba(76, 201, 255, 0.12)')};
  }

  ${({ $status }) =>
    $status === 'locked' &&
    css`
      border-style: dashed;
      background: rgba(14, 22, 44, 0.4);
    `}
`;

export const CardTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  font-family: ${MONO};
  font-size: 1.15rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(219, 231, 255, 0.5);
`;

export const StatusChip = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  color: ${({ $status }) => statusColors[$status]};

  &::before {
    content: '';
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: currentColor;
    box-shadow: 0 0 8px currentColor;
  }
`;

export const CardTitle = styled.h3`
  margin: 0;
  font-family: ${(props) => props.theme.fonts.title};
  font-size: 2rem;
  color: ${({ $locked }) => ($locked ? 'rgba(219, 231, 255, 0.55)' : '#fff')};
`;

export const CardText = styled.p`
  margin: 0;
  font-size: 1.45rem;
  line-height: 1.6;
  color: rgba(219, 231, 255, 0.72);
`;

export const CardNote = styled.p`
  margin: 0;
  font-size: 1.25rem;
  font-style: italic;
  color: ${GOLD};
`;

export const Tags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin: auto 0 0;
  padding: 0;
  list-style: none;

  li {
    padding: 0.3rem 0.9rem;
    border-radius: 6px;
    font-family: ${MONO};
    font-size: 1.1rem;
    color: rgba(219, 231, 255, 0.75);
    background: rgba(76, 201, 255, 0.08);
    border: 1px solid rgba(76, 201, 255, 0.18);
  }
`;

export const CardLinks = styled.div`
  display: flex;
  gap: 1.6rem;

  a {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.35rem;
    font-weight: 600;
    color: ${SYSTEM};
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;

/* ---------- Watchlist ---------- */

export const WatchGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.6rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: 1fr;
  }
`;

export const WatchInfo = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;

  strong a {
    color: inherit;
    text-decoration: none;
  }

  strong a:hover {
    text-decoration: underline;
  }
`;

export const WatchSlot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  position: relative;
  overflow: hidden;
  min-height: 380px;
  padding: 2rem;
  border-radius: 14px;
  text-align: center;
  border: 1px dashed rgba(255, 111, 165, 0.35);
  background: repeating-linear-gradient(
    135deg,
    rgba(255, 111, 165, 0.04) 0 12px,
    transparent 12px 24px
  );
  font-family: ${MONO};
  color: rgba(219, 231, 255, 0.55);

  svg {
    font-size: 2.6rem;
    color: ${SAKURA};
  }

  strong {
    color: #fff;
    font-family: ${(props) => props.theme.fonts.title};
    font-size: 1.8rem;
  }

  span {
    font-size: 1.2rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  p {
    margin: 0;
    font-family: ${(props) => props.theme.fonts.main};
    font-size: 1.4rem;
    line-height: 1.5;
    color: rgba(219, 231, 255, 0.72);
  }

  ${({ $filled }) =>
    $filled &&
    css`
      position: relative;
      border-style: solid;
      border-color: rgba(255, 111, 165, 0.45);
      background:
        radial-gradient(400px 200px at 50% 0%, rgba(255, 111, 165, 0.16), transparent 70%),
        rgba(14, 22, 44, 0.75);

      span {
        color: ${SAKURA};
      }
    `}

  ${({ $poster }) =>
    $poster &&
    css`
      justify-content: flex-end;
      align-items: stretch;
      text-align: left;
      padding: 0;

      img {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center top;
        transition: transform 0.5s ease;
      }

      &::after {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(180deg, rgba(7, 11, 24, 0) 35%, rgba(7, 11, 24, 0.85) 70%, #070b18 100%);
      }

      &:hover img {
        transform: scale(1.06);
      }

      ${WatchInfo} {
        align-items: flex-start;
        padding: 2rem;
      }

      span {
        color: ${SAKURA};
      }

      strong {
        font-size: 2.2rem;
        text-shadow: 0 2px 12px rgba(0, 0, 0, 0.6);
      }

      p {
        color: rgba(219, 231, 255, 0.85);
      }
    `}
`;


export const WatchBadge = styled.em`
  z-index: 2;
  position: absolute;
  top: 1.2rem;
  right: 1.2rem;
  padding: 0.3rem 0.9rem;
  border-radius: 999px;
  font-style: normal;
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  color: #1a1203;
  background: ${GOLD};
  box-shadow: 0 0 14px rgba(255, 209, 102, 0.5);
`;

/* ---------- Quest log ---------- */

export const Log = styled.ol`
  position: relative;
  margin: 0;
  padding: 0 0 0 2.8rem;
  list-style: none;

  &::before {
    content: '';
    position: absolute;
    left: 6px;
    top: 6px;
    bottom: 6px;
    width: 2px;
    background: linear-gradient(${SYSTEM}, ${SAKURA});
    opacity: 0.6;
  }

  li {
    position: relative;
    display: grid;
    grid-template-columns: 6.4rem 1fr;
    gap: 0.4rem;
    max-width: 820px;
    padding: 0 0 2rem;
    font-size: 1.6rem;
    line-height: 1.6;
    color: rgba(219, 231, 255, 0.8);

    @media ${(props) => props.theme.breakpoints.sm} {
      grid-template-columns: 1fr;
      gap: 0.2rem;
    }
  }

  li::before {
    content: '';
    position: absolute;
    left: -2.8rem;
    top: 0.5rem;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: #070b18;
    border: 2px solid ${SYSTEM};
    box-shadow: 0 0 10px rgba(76, 201, 255, 0.6);
  }

  b {
    font-family: ${MONO};
    color: ${GOLD};
    white-space: nowrap;
  }

  strong {
    display: block;
    margin-bottom: 0.2rem;
    font-family: ${(props) => props.theme.fonts.title};
    font-size: 1.8rem;
    color: #fff;
  }
`;

export const Outro = styled.div`
  margin-top: 6rem;
  padding: 3.2rem;
  border-radius: 16px;
  text-align: center;
  background: linear-gradient(120deg, rgba(76, 201, 255, 0.12), rgba(255, 111, 165, 0.12));
  border: 1px solid rgba(219, 231, 255, 0.1);

  p {
    margin: 0 0 2rem;
    font-size: 1.8rem;
    color: #fff;
  }
`;

/* ---------- Class mastery ---------- */

const rankColor = { 5: GOLD, 4: SYSTEM, 3: '#3ddc97' };

export const ClassHead = styled.h3`
  margin: 0 0 2rem;
  font-family: ${MONO};
  font-size: 1.3rem;
  font-weight: 500;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${SYSTEM};
`;

export const ClassGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.6rem;

  @media ${(props) => props.theme.breakpoints.lg} {
    grid-template-columns: 1fr;
  }
`;

export const ClassCard = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  padding: 2.2rem;
  border-radius: 14px;
  background: rgba(14, 22, 44, 0.75);
  border: 1px solid ${({ $main }) => ($main ? 'rgba(255, 209, 102, 0.55)' : 'rgba(219, 231, 255, 0.08)')};
  box-shadow: ${({ $main }) => ($main ? '0 0 30px rgba(255, 209, 102, 0.12)' : 'none')};
`;

export const ClassTop = styled.div`
  display: flex;
  align-items: center;
  gap: 1.4rem;

  > div {
    flex: 1;
    min-width: 0;
  }

  h3 {
    margin: 0;
    font-family: ${(props) => props.theme.fonts.title};
    font-size: 2.2rem;
    color: #fff;
  }

  h3 span {
    font-size: 1.5rem;
    font-weight: 500;
    color: rgba(219, 231, 255, 0.6);
  }
`;

export const ClassIcon = styled.span`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  border-radius: 12px;
  font-size: 2.8rem;
  color: #fff;
  background: linear-gradient(135deg, ${SAKURA}, #c77dff 50%, ${SYSTEM});
`;

export const Rank = styled.p`
  margin: 0.3rem 0 0;
  font-family: ${MONO};
  font-size: 1.25rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ $level }) => rankColor[$level] || SYSTEM};
`;

export const MainTag = styled.span`
  align-self: flex-start;
  padding: 0.3rem 0.9rem;
  border-radius: 999px;
  font-size: 1.1rem;
  font-weight: 700;
  color: #1a1203;
  background: ${GOLD};
  white-space: nowrap;
`;
