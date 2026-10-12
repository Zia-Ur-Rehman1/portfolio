import styled, { createGlobalStyle } from 'styled-components';

// Keep section headings clear of the sticky bar when jumping via anchors
export const ScrollOffset = createGlobalStyle`
  main [id] { scroll-margin-top: 96px; }
`;

export const Wrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  padding: 1.2rem 1rem;

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 1rem 1.25rem;
  }
`;

export const Bar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.6rem;
  padding: 0.8rem 1rem 0.8rem 1.6rem;
  border-radius: 999px;
  border: 1px solid
    ${({ scrolled, theme }) => (scrolled ? theme.colors.borderSoft : 'transparent')};
  background: ${({ scrolled }) =>
    scrolled ? 'rgba(15, 22, 36, 0.88)' : 'transparent'};
  backdrop-filter: ${({ scrolled }) => (scrolled ? 'blur(14px) saturate(140%)' : 'none')};
  -webkit-backdrop-filter: ${({ scrolled }) =>
    scrolled ? 'blur(14px) saturate(140%)' : 'none'};
  box-shadow: ${({ scrolled }) =>
    scrolled ? '0 10px 30px rgba(0, 0, 0, 0.35)' : 'none'};
  transition: background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;

  @media ${(props) => props.theme.breakpoints.md} {
    border-radius: 16px;
    padding: 0.8rem 0.8rem 0.8rem 1.2rem;
    flex-wrap: wrap;
    row-gap: 0;
  }
`;

export const Brand = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
  flex-shrink: 0;
`;

export const Monogram = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 12px;
  background: ${(props) => props.theme.colors.ctaGradient};
  color: ${(props) => props.theme.colors.textBright};
  font-family: ${(props) => props.theme.fonts.title};
  font-weight: 700;
  font-size: 1.5rem;
  letter-spacing: 0.02em;
  box-shadow: 0 4px 14px rgba(148, 93, 214, 0.35);
`;

export const BrandName = styled.span`
  font-family: ${(props) => props.theme.fonts.title};
  font-weight: 600;
  font-size: 1.7rem;
  color: ${(props) => props.theme.colors.textBright};

  @media ${(props) => props.theme.breakpoints.xl} {
    display: none;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    display: inline;
  }
  @media screen and (max-width: 360px) {
    display: none;
  }
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 0.2rem;
  margin: 0;
  padding: 0.4rem;
  list-style: none;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid ${(props) => props.theme.colors.borderFaint};

  li { list-style: none; }

  @media ${(props) => props.theme.breakpoints.md} {
    order: 3;
    flex-basis: 100%;
    flex-direction: column;
    align-items: stretch;
    gap: 0.2rem;
    border-radius: 12px;
    padding: ${({ isOpen }) => (isOpen ? '0.6rem' : '0 0.6rem')};
    margin-top: ${({ isOpen }) => (isOpen ? '0.8rem' : '0')};
    max-height: ${({ isOpen }) => (isOpen ? '600px' : '0')};
    opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
    visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
    overflow: hidden;
    border-color: ${({ isOpen, theme }) => (isOpen ? theme.colors.borderSoft : 'transparent')};
    transition:
      max-height 0.3s ease,
      opacity 0.25s ease,
      padding 0.25s ease,
      margin 0.25s ease,
      visibility 0s linear ${({ isOpen }) => (isOpen ? '0s' : '0.3s')};
  }
`;

export const NavLink = styled.a`
  display: block;
  padding: 0.6rem 1.2rem;
  border-radius: 999px;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 1.6;
  white-space: nowrap;
  text-decoration: none;
  color: ${({ active, theme }) => (active ? theme.colors.textBright : theme.colors.textMuted)};
  background: ${({ active }) => (active ? 'rgba(255, 255, 255, 0.1)' : 'transparent')};
  transition: color 0.2s ease, background 0.2s ease;

  &:hover {
    color: ${(props) => props.theme.colors.textBright};
    background: rgba(255, 255, 255, 0.07);
  }

  &:focus-visible {
    outline: 2px solid ${(props) => props.theme.colors.borderInputFocus};
    outline-offset: 2px;
  }

  @media ${(props) => props.theme.breakpoints.xl} {
    padding: 0.6rem 0.9rem;
    font-size: 1.3rem;
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    padding: 0.6rem 0.7rem;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 1.5rem;
    padding: 0.9rem 1.2rem;
    border-radius: 10px;
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  flex-shrink: 0;
  margin-left: auto;
`;

export const SocialIcon = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 999px;
  color: ${(props) => props.theme.colors.textMuted};
  transition: color 0.2s ease, background 0.2s ease;

  &:hover {
    color: ${(props) => props.theme.colors.textBright};
    background: rgba(255, 255, 255, 0.08);
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    display: none;
  }
`;

export const ResumeButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  margin-left: 0.6rem;
  padding: 0.8rem 1.6rem;
  border-radius: 999px;
  background: ${(props) => props.theme.colors.ctaGradient};
  color: ${(props) => props.theme.colors.textBright};
  font-size: 1.4rem;
  font-weight: 600;
  text-decoration: none;
  white-space: nowrap;
  box-shadow: 0 4px 14px rgba(19, 173, 199, 0.25);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 6px 20px rgba(148, 93, 214, 0.4);
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin-left: 0;
    padding: 0;
    width: 40px;
    height: 40px;
    justify-content: center;

    span { display: none; }
  }

  &:focus-visible {
    outline: 2px solid ${(props) => props.theme.colors.borderInputFocus};
    outline-offset: 2px;
  }
`;

export const HamburgerButton = styled.button`
  display: none;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  margin-left: 0.4rem;
  border-radius: 10px;
  background: transparent;
  border: 1px solid ${(props) => props.theme.colors.borderSoft};
  color: ${(props) => props.theme.colors.textBright};
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: ${(props) => props.theme.colors.cardBgHover};
  }

  &:focus-visible {
    outline: 2px solid ${(props) => props.theme.colors.borderInputFocus};
    outline-offset: 2px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    display: inline-flex;
  }
`;

// Used by the footer
export const SocialIcons = styled.a`
  transition: 0.3s ease;
  color: ${(props) => props.theme.colors.textBright};
  border-radius: 50px;
  padding: 8px;
  &:hover {
    background-color: ${(props) => props.theme.colors.socialIconHoverBg};
    transform: scale(1.2);
    cursor: pointer;
  }
`;
