import styled, { keyframes } from 'styled-components';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const LeftSection = styled.div`
  width: 100%;
  animation: ${fadeInUp} 1s ease-out;

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;

export const GradientText = styled.span`
  background: ${(props) => props.theme.colors.heroTextGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;

  /* Optional: Add a subtle second gradient or keep it clean white-to-transparent which looks premium on dark */
  /* OR a color gradient if preferred: */
   background: ${(props) => props.theme.colors.brandGradientCool};
   -webkit-background-clip: text;
   -webkit-text-fill-color: transparent;
`;


export const StyledButtonLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ $alt }) => ($alt ? '150px' : '262px')};
  height: ${({ $alt }) => ($alt ? '52px' : '64px')};
  border-radius: 50px;
  font-size: ${({ $alt }) => ($alt ? '20px' : '24px')};
  font-weight: 600;
  color: ${(props) => props.theme.colors.textBright};
  background: ${({ $alt, theme }) =>
    $alt
      ? theme.colors.brandGradientWarm
      : theme.colors.brandGradientCool};
  text-decoration: none;
  cursor: pointer;
  transition: 0.5s ease;
  position: relative;
  overflow: hidden;
  opacity: ${({ disabled }) => (disabled ? '.5' : '1')};

  &:hover {
    opacity: 0.8;
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px ${(props) => props.theme.colors.borderInputFocusGlow};
  }

  &:active {
    background: ${(props) => props.theme.colors.brandGradientCool};
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15),
      inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }

  &:disabled {
    background: ${(props) => props.theme.colors.brandGradientCool};
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    width: ${({ $alt }) => ($alt ? '150px' : '184px')};
    height: ${({ $alt }) => ($alt ? '52px' : '48px')};
    font-size: ${({ $alt }) => ($alt ? '20px' : '16px')};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    height: 32px;
    font-size: 14px;
  }
`;

export const CtaRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 1.25rem;
  align-items: center;
`;

export const SecondaryButtonLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 0 22px;
  height: 52px;
  border-radius: 50px;
  font-size: 16px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.textBright};
  background: transparent;
  border: 1.5px solid ${(props) => props.theme.colors.secondaryBtnBorder};
  text-decoration: none;
  cursor: pointer;
  transition: 0.25s ease;

  &:hover {
    background: ${(props) => props.theme.colors.cardBgHover};
    color: ${(props) => props.theme.colors.secondaryBtnHoverText};
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px ${(props) => props.theme.colors.borderInputFocusGlow};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    height: 44px;
    font-size: 14px;
  }
`;

export const CredentialBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  align-self: flex-start;
  margin: 0 0 2.4rem;
  padding: 0.6rem 1.4rem 0.6rem 0.8rem;
  border-radius: 999px;
  border: 1px solid rgba(34, 197, 94, 0.35);
  background: rgba(34, 197, 94, 0.08);
  color: ${(props) => props.theme.colors.textBody};
  font-size: 1.4rem;
  line-height: 1.4;

  svg {
    flex-shrink: 0;
    color: ${(props) => props.theme.colors.accentGreen};
  }

  strong {
    color: ${(props) => props.theme.colors.textBright};
    font-weight: 600;
  }

  small {
    color: ${(props) => props.theme.colors.textFaint};
    font-size: 1.2rem;
  }

  a {
    text-decoration: none;
  }

  a:hover strong,
  a:hover .verify {
    text-decoration: underline;
  }

  .verify {
    color: ${(props) => props.theme.colors.accentMint};
    font-weight: 600;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    border-radius: 14px;
    font-size: 1.3rem;
  }
`;

export const Headline = styled.p`
  max-width: 680px;
  margin: 0 0 1.6rem;
  font-size: 2.8rem;
  line-height: 1.35;
  font-weight: 400;
  color: ${(props) => props.theme.colors.textSecondary};

  strong {
    font-weight: 700;
    color: ${(props) => props.theme.colors.textBright};
  }

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 2.3rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 2rem;
  }
`;

export const Supporting = styled.p`
  max-width: 640px;
  margin: 0 0 2.4rem;
  font-size: 1.8rem;
  line-height: 1.6;
  font-weight: 300;
  color: ${(props) => props.theme.colors.textMuted};

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.6rem;
  }
`;

export const Chips = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin: 0 0 2rem;
  padding: 0;
  list-style: none;

  li {
    padding: 0.6rem 1.2rem;
    border-radius: 999px;
    font-size: 1.35rem;
    font-weight: 500;
    color: ${(props) => props.theme.colors.textBody};
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid ${(props) => props.theme.colors.borderSoft};
  }
`;

export const MoreAbout = styled.details`
  max-width: 680px;
  margin: 0 0 2.8rem;

  summary {
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    cursor: pointer;
    list-style: none;
    font-size: 1.5rem;
    font-weight: 600;
    color: ${(props) => props.theme.colors.accentCyan};
  }

  summary::-webkit-details-marker {
    display: none;
  }

  summary:hover {
    text-decoration: underline;
  }

  summary:focus-visible {
    outline: 2px solid ${(props) => props.theme.colors.borderInputFocus};
    outline-offset: 4px;
    border-radius: 4px;
  }

  summary svg {
    transition: transform 0.2s ease;
  }

  &[open] summary svg {
    transform: rotate(180deg);
  }

  div {
    margin-top: 1.6rem;
    padding-left: 1.6rem;
    border-left: 2px solid ${(props) => props.theme.colors.borderSoft};
  }

  p {
    margin: 0 0 1.2rem;
    font-size: 1.6rem;
    line-height: 1.7;
    color: ${(props) => props.theme.colors.textMuted};
  }

  p:last-child {
    margin-bottom: 0;
  }

  strong {
    color: ${(props) => props.theme.colors.textBright};
    font-weight: 600;
  }
`;
