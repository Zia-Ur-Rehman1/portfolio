import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { SocialIcons } from '../Header/HeaderStyles';
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from './FooterStyles';

const Footer = () => {
  const year = new Date().getFullYear();

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.pushState(null, null, `#${targetId}`);
    }
  };

  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Explore</LinkTitle>
          <LinkItem href="#current-focus" onClick={(e) => handleSmoothScroll(e, 'current-focus')}>Now</LinkItem>
          <LinkItem href="#achievements" onClick={(e) => handleSmoothScroll(e, 'achievements')}>Experience</LinkItem>
          <LinkItem href="#projects" onClick={(e) => handleSmoothScroll(e, 'projects')}>Projects</LinkItem>
          <LinkItem href="#testimonials" onClick={(e) => handleSmoothScroll(e, 'testimonials')}>Testimonials</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Get in touch</LinkTitle>
          <LinkItem href="mailto:zia.rehman.web@gmail.com">zia.rehman.web@gmail.com</LinkItem>
          <LinkItem href="https://wa.me/+923131407828" target="_blank" rel="noopener noreferrer">WhatsApp</LinkItem>
          <LinkItem href="tel:+923131407828">+92 313 1407828</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Based in</LinkTitle>
          <LinkItem as="span">Pakistan (PKT, UTC+5)</LinkItem>
          <LinkItem as="span">Open to remote roles globally</LinkItem>
          <LinkItem as="span">Worked across US · UAE · KSA timezones</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>&copy; {year} Zia Ur Rehman. All rights reserved.</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/Zia-Ur-Rehman1" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/zia1/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;