import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { Container, Div2, Div3, NavLink, SocialContainer, SocialIcons } from './HeaderStyles';

const Header = () => (
  <Container>
    <Div2>
      <li>
        <Link href="#projects" scroll={false}>
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#skills" scroll={false}>
          <NavLink>Skills</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about" scroll={false}>
          <NavLink>About</NavLink>
        </Link>
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

export default Header;
