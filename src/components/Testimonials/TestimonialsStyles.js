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
  background: #212d45;
  border-radius: 16px;
  padding: 24px; /* Reduced from 32px */
  flex: 0 0 auto; /* Prevent shrinking */
  width: 450px; /* Fixed width for carousel items */
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.1);
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.05);
  scroll-snap-align: center;
  height: auto; /* allow content to define height */

  &:hover {
    transform: translateY(-4px); /* reduced hover lift */
    box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.25);
    background: #2b3952;
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
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  transition: 0.3s ease;
  font-size: 20px;

  &:hover {
    background: linear-gradient(270deg, #13ADC7 0%, #945DD6 100%);
    transform: scale(1.1);
  }
`;

export const Quote = styled.p`
  font-family: 'Inter', sans-serif;
  font-style: italic;
  font-weight: 300;
  font-size: 14px; /* Reduced from 16px */
  line-height: 24px; /* Reduced from 26px */
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 16px; /* Reduced from 24px */
  position: relative;
  z-index: 1;

  &::before {
    content: '"';
    font-size: 48px; /* Reduced from 60px */
    color: rgba(255, 255, 255, 0.1);
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
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

export const AuthorImage = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: linear-gradient(270deg, #13ADC7 0%, #945DD6 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 18px;
  color: white;
  text-transform: uppercase;
`;

export const AuthorText = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AuthorName = styled.h4`
  font-weight: 700;
  font-size: 16px;
  color: #fff;
  margin: 0;
  margin-bottom: 4px;
`;

export const AuthorRole = styled.p`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.5);
  margin: 0;
`;
