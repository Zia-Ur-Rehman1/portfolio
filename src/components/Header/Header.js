import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { Container, Div2, Div3, NavLink, SocialContainer, SocialIcons, Tagline } from './HeaderStyles';

const Header = () => {
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
  };

  return (
    <Container>
      <Div2>
        <li>
          <NavLink href="#projects" onClick={(e) => handleSmoothScroll(e, 'projects')}>
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink href="#skills" onClick={(e) => handleSmoothScroll(e, 'skills')}>
            Skills
          </NavLink>
        </li>
        <li>
          <NavLink href="#about" onClick={(e) => handleSmoothScroll(e, 'about')}>
            About
          </NavLink>
        </li>
      
      </Div2>

      <Div3>
       
        <SocialContainer>
          <SocialIcons href="https://github.com/Zia-Ur-Rehman1" target="_blank" rel="noopener noreferrer">
            <AiFillGithub size="3rem" />
          </SocialIcons>
       
          <SocialIcons href="https://www.linkedin.com/in/zia1/" target="_blank" rel="noopener noreferrer">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
       
        </SocialContainer>
      </Div3>
    </Container>
  );
};

export default Header;
