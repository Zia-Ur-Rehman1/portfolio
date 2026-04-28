import styled from 'styled-components';

export const TestimonialsContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0 auto;
  max-width: 1040px;
  box-sizing: content-box;
  position: relative;
  overflow: hidden;

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0 48px; 
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0 16px;
    width: calc(100vw - 32px);
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  gap: 24px;
  margin-top: 3rem;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  padding-bottom: 20px; /* Space for scrollbar if visible, or aesthetics */
  
  /* Hide scrollbar for cleaner look */
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  @media ${(props) => props.theme.breakpoints.md} {
    gap: 16px;
  }
`;

export const Card = styled.div`
  background: ${(props) => props.theme.colors.cardBgAlt};
  border-radius: 16px;
  padding: 24px; /* Reduced from 32px */
  flex: 0 0 auto; /* Prevent shrinking */
  width: 450px; /* Fixed width for carousel items */
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: ${(props) => props.theme.colors.shadowCard};
  transition: all 0.3s ease;
  border: 1px solid ${(props) => props.theme.colors.borderFaint};
  scroll-snap-align: center;
  height: auto; /* allow content to define height */

  &:hover {
    transform: translateY(-4px); /* reduced hover lift */
    box-shadow: ${(props) => props.theme.colors.shadowCardHover};
    background: ${(props) => props.theme.colors.cardBgHover};
  }

  @media ${(props) => props.theme.breakpoints.md} {
    width: 350px;
    padding: 20px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 85vw; /* Almost full width on mobile */
    min-width: unset;
    padding: 16px;
  }
`;

export const CarouselButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: 24px;
`;

export const CarouselButton = styled.button`
  background: ${(props) => props.theme.colors.borderSoft};
  border: none;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.textBright};
  cursor: pointer;
  transition: 0.3s ease;
  font-size: 20px;

  &:hover {
    background: ${(props) => props.theme.colors.brandGradient};
    transform: scale(1.1);
  }
`;

export const Quote = styled.p`
  font-family: 'Inter', sans-serif;
  font-style: italic;
  font-weight: 300;
  font-size: 14px; /* Reduced from 16px */
  line-height: 24px; /* Reduced from 26px */
  color: ${(props) => props.theme.colors.textSecondary};
  margin-bottom: 16px; /* Reduced from 24px */
  position: relative;
  z-index: 1;

  &::before {
    content: '"';
    font-size: 48px; /* Reduced from 60px */
    color: ${(props) => props.theme.colors.textVeryFaint};
    position: absolute;
    top: -20px;
    left: -10px;
    z-index: -1;
    font-family: serif;
  }
`;

export const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: auto;
  padding-top: 16px;
  border-top: 1px solid ${(props) => props.theme.colors.borderSoft};
`;

export const AuthorImage = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: ${(props) => props.theme.colors.brandGradient};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 18px;
  color: ${(props) => props.theme.colors.textBright};
  text-transform: uppercase;
`;

export const AuthorText = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AuthorName = styled.h4`
  font-weight: 700;
  font-size: 16px;
  color: ${(props) => props.theme.colors.textBright};
  margin: 0;
  margin-bottom: 4px;
`;

export const AuthorRole = styled.p`
  font-size: 12px;
  color: ${(props) => props.theme.colors.textMuted};
  margin: 0;
`;

export const ReadMoreButton = styled.button`
  background: transparent;
  border: none;
  color: ${(props) => props.theme.colors.accentReadMore};
  font-size: 12px;
  padding: 0;
  margin-top: 8px;
  cursor: pointer;
  text-align: left;

  &:hover {
    text-decoration: underline;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: ${(props) => props.theme.colors.overlayDim};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

export const ModalContent = styled.div`
  background: ${(props) => props.theme.colors.modalBg};
  border-radius: 16px;
  max-width: 640px;
  width: 90vw;
  padding: 24px 24px 20px;
  color: ${(props) => props.theme.colors.textBodyAlt};
  box-shadow: ${(props) => props.theme.colors.shadowModal};
`;

export const ModalClose = styled.button`
  background: transparent;
  border: none;
  color: ${(props) => props.theme.colors.textModalRole};
  font-size: 14px;
  cursor: pointer;
  float: right;

  &:hover {
    color: #f9fafb;
  }
`;
