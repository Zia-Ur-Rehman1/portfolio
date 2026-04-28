import { IoIosArrowDropdown } from 'react-icons/io';
import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  padding: 1rem;
  padding-top: 2rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 60px);
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;
  }
`;
export const Div2 = styled.div`
  grid-area: 1 / 1 / 2 / 4; /* Adjusted grid area to span the left side */
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start; /* Align links to the left */
  align-items: center;
  gap: 1.25rem; /* Add spacing between links */
  margin-top: 0.75em;
  list-style: none;
  padding: 0;

  li { list-style: none; }

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 2 / 1 / 3 / 6;
    justify-content: center; /* Center links on smaller screens */
    gap: 0.75rem;
  }
`;

export const Div3 = styled.div`
  grid-area: 1 / 4 / 2 / 6;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  gap: 4px;

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 1 / 1 / 2 / 6;
    align-items: center;
  }
`;

// Navigation Links
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
    font-size: 1.5rem;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.25rem 0.4rem;
    font-size: 1.3rem;
  }
`;

/// DropDown Contact
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

  &:focus {
    outline: none;
  }
  &:hover {
    color: ${(props) => props.theme.colors.textBright};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.4rem 0;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0;
  }
`;

export const NavProductsIcon = styled(IoIosArrowDropdown)`
  margin-left: 8px;
  display: flex;
  align-self: center;
  transition: 0.3s ease;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '.75')};
  transform: ${({ isOpen }) => (isOpen ? 'scaleY(-1)' : 'scaleY(1)')};

  &:hover {
    opacity: 1;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 2px 0 0 2px;
    width: 15px;
  }
`;


export const Tagline = styled.p`
  font-size: 12px;
  color: ${(props) => props.theme.colors.tagline}; /* greenish accent */
  margin: 0 0 4px 0;
  text-align: right;
  max-width: 420px;

  @media ${(props) => props.theme.breakpoints.sm} {
    text-align: center;
    font-size: 11px;
    max-width: 100%;
  }
`;

// Social Icons 

export const SocialContainer = styled.div`
	display: flex;
  align-items: center;

	@media ${props => props.theme.breakpoints.md}{
		justify-content: center;
		padding-right: 16px;
		flex-wrap: wrap;
	}
`

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
`