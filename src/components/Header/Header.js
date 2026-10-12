import React, { useEffect, useState } from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { FiMenu, FiX, FiDownload } from 'react-icons/fi';
import {
  Actions,
  Bar,
  Brand,
  BrandName,
  HamburgerButton,
  Monogram,
  NavLink,
  NavList,
  ResumeButton,
  ScrollOffset,
  SocialIcon,
  Wrapper,
} from './HeaderStyles';
import { RESUME_PDF_URL } from '../../constants/site';

const NAV_ITEMS = [
  { id: 'current-focus', label: 'Now' },
  { id: 'achievements', label: 'Experience' },
  { id: 'ai-native', label: 'AI-Native' },
  { id: 'automation', label: 'Automation' },
  { id: 'services', label: 'Services' },
  { id: 'projects', label: 'Projects' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Highlight the nav item for whichever section is in the upper part of the viewport
  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(Boolean);
    if (!sections.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

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

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.history.pushState(null, null, window.location.pathname);
    closeMenu();
  };

  return (
    <Wrapper>
      <ScrollOffset />
      <Bar scrolled={scrolled || isMenuOpen}>
        <Brand href="#" onClick={scrollToTop} aria-label="Zia Ur Rehman, back to top">
          <Monogram>ZR</Monogram>
          <BrandName>Zia Ur Rehman</BrandName>
        </Brand>

        <NavList id="primary-nav" isOpen={isMenuOpen}>
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <NavLink
                href={`#${item.id}`}
                active={activeId === item.id}
                aria-current={activeId === item.id ? 'true' : undefined}
                onClick={(e) => handleSmoothScroll(e, item.id)}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </NavList>

        <Actions>
          <SocialIcon
            href="https://github.com/Zia-Ur-Rehman1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <AiFillGithub size="2rem" />
          </SocialIcon>
          <SocialIcon
            href="https://www.linkedin.com/in/zia1/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <AiFillLinkedin size="2rem" />
          </SocialIcon>
          <ResumeButton href={RESUME_PDF_URL} target="_blank" rel="noopener noreferrer" aria-label="Resume (PDF)">
            <FiDownload size="1.5rem" />
            <span>Resume</span>
          </ResumeButton>
          <HamburgerButton
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            aria-controls="primary-nav"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <FiX size="2rem" /> : <FiMenu size="2rem" />}
          </HamburgerButton>
        </Actions>
      </Bar>
    </Wrapper>
  );
};

export default Header;
