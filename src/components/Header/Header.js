import React, { useState } from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { FiMenu, FiX } from 'react-icons/fi';
import {
  Container,
  Div2,
  Div3,
  HamburgerButton,
  NavLink,
  SocialContainer,
  SocialIcons,
} from './HeaderStyles';
import { RESUME_PDF_URL } from '../../constants/site';

const NAV_ITEMS = [
  { id: 'current-focus', label: 'Now' },
  { id: 'achievements', label: 'Experience' },
  { id: 'ai-native', label: 'AI-Native' },
  { id: 'services', label: 'Services' },
  { id: 'projects', label: 'Projects' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      window.history.pushState(null, null, `#${targetId}`);
    }
    closeMenu();
  };

  return (
    <Container>
      <HamburgerButton
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isMenuOpen}
        aria-controls="primary-nav"
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        {isMenuOpen ? <FiX size="2.4rem" /> : <FiMenu size="2.4rem" />}
      </HamburgerButton>

      <Div2 id="primary-nav" isOpen={isMenuOpen}>
        {NAV_ITEMS.map((item) => (
          <li key={item.id}>
            <NavLink
              href={`#${item.id}`}
              onClick={(e) => handleSmoothScroll(e, item.id)}
            >
              {item.label}
            </NavLink>
          </li>
        ))}
        <li>
          <NavLink
            href={RESUME_PDF_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            Resume
          </NavLink>
        </li>
      </Div2>

      <Div3>
        <SocialContainer>
          <SocialIcons
            href="https://github.com/Zia-Ur-Rehman1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <AiFillGithub size="3rem" />
          </SocialIcons>

          <SocialIcons
            href="https://www.linkedin.com/in/zia1/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </Div3>
    </Container>
  );
};

export default Header;
