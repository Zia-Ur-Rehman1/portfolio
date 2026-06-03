import React from 'react'
import styled from 'styled-components'

import BookCallFab from '../components/BookCallFab/BookCallFab'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { Container } from './LayoutStyles'

const SkipLink = styled.a`
  position: absolute;
  left: -9999px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
  z-index: 100;

  &:focus {
    position: fixed;
    top: 12px;
    left: 12px;
    width: auto;
    height: auto;
    padding: 0.6rem 1rem;
    background: ${(props) => props.theme.colors.cardBg};
    color: ${(props) => props.theme.colors.textBright};
    border: 2px solid ${(props) => props.theme.colors.borderInputFocus};
    border-radius: 6px;
    font-weight: 600;
    text-decoration: none;
    outline: none;
  }
`

export const Layout = ({ children }) => {
  return (
    <Container>
      <SkipLink href="#main-content">Skip to main content</SkipLink>
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
      <BookCallFab />
    </Container>
  )
}
