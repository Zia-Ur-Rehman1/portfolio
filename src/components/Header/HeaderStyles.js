import { IoIosArrowDropdown } from 'react-icons/io';
import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  padding: 1rem;
  padding-top: 2rem;
  position: relative;

  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: 1fr auto;
    grid-template-rows: auto;
    grid-column-gap: 1rem;
    padding: 1rem 1.25rem;
    padding-top: 1.5rem;
  }
`;

export const HamburgerButton = styled.button`
  display: none;
  background: transparent;
  border: 1px solid ${(props) => props.theme.colors.borderSoft};
  border-radius: 8px;
  width: 44px;
  height: 44px;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.textBright};
  cursor: pointer;
  transition: background 0.2s ease;
  z-index: 30;

  &:hover {
    background: ${(props) => props.theme.colors.cardBgHover};
  }

  &:focus-visible {
    outline: 2px solid ${(props) => props.theme.colors.borderInputFocus};
    outline-offset: 2px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    display: inline-flex;
    grid-column: 1 / 2;
    justify-self: start;
  }
`;

export const Div2 = styled.ul`
  grid-area: 1 / 1 / 2 / 4;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 1.25rem;
  margin: 0;
  margin-top: 0.75em;
  list-style: none;
  padding: 0;

  li { list-style: none; }

  @media ${(props) => props.theme.breakpoints.md} {
    grid-column: 1 / -1;
    grid-row: 2 / 3;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    margin-top: 1rem;
    padding: ${({ isOpen }) => (isOpen ? '1rem 1.25rem' : '0 1.25rem')};
    max-height: ${({ isOpen }) => (isOpen ? '600px' : '0')};
    opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
    visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
    overflow: hidden;
    background: ${(props) => props.theme.colors.cardBg};
    border: ${({ isOpen, theme }) =>
      isOpen ? `1px solid ${theme.colors.borderSoft}` : '1px solid transparent'};
    border-radius: 12px;
    transition:
      max-height 0.3s ease,
      opacity 0.25s ease,
      padding 0.25s ease,
      visibility 0s linear ${({ isOpen }) => (isOpen ? '0s' : '0.3s')};

    li { width: 100%; }
  }
`;

export const Div3 = styled.div`
  grid-area: 1 / 4 / 2 / 6;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  gap: 4px;

  @media ${(props) => props.theme.breakpoints.md} {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    align-items: flex-end;
  }
`;

export const NavLink = styled.a`
  font-size: 1.6rem;
  line-height: 32px;
  color: ${(props) => props.theme.colors.textTertiary};
  transition: 0.4s ease;
  white-space: nowrap;
  &:hover {
    color: ${(props) => props.theme.colors.textBright};
    opacity: 1;
    cursor: pointer;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 1.6rem;
    display: block;
    padding: 0.5rem 0;
  }
`;

export const ContactDropDown = styled.button`
  border: none;
  display: flex;
  position: relative;
  background: none;
  font-size: 1.7rem;
  line-height: 32px;
  color: ${(props) => props.theme.colors.textTertiary};
  cursor: pointer;
  transition: 0.3s ease;

  &:focus { outline: none; }
  &:hover { color: ${(props) => props.theme.colors.textBright}; }

  @media ${(props) => props.theme.breakpoints.sm} { padding: 0.4rem 0; }
  @media ${(props) => props.theme.breakpoints.md} { padding: 0; }
`;

export const NavProductsIcon = styled(IoIosArrowDropdown)`
  margin-left: 8px;
  display: flex;
  align-self: center;
  transition: 0.3s ease;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '.75')};
  transform: ${({ isOpen }) => (isOpen ? 'scaleY(-1)' : 'scaleY(1)')};

  &:hover { opacity: 1; }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 2px 0 0 2px;
    width: 15px;
  }
`;

export const Tagline = styled.p`
  font-size: 12px;
  color: ${(props) => props.theme.colors.tagline};
  margin: 0 0 4px 0;
  text-align: right;
  max-width: 420px;

  @media ${(props) => props.theme.breakpoints.sm} {
    text-align: center;
    font-size: 11px;
    max-width: 100%;
  }
`;

export const SocialContainer = styled.div`
  display: flex;
  align-items: center;

  @media ${(props) => props.theme.breakpoints.md} {
    justify-content: flex-end;
    flex-wrap: wrap;
  }
`;

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
