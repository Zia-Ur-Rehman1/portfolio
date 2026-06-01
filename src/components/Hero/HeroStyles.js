import styled, { keyframes } from 'styled-components';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const LeftSection = styled.div`
  width: 100%;
  animation: ${fadeInUp} 1s ease-out;

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;

export const GradientText = styled.span`
  background: ${(props) => props.theme.colors.heroTextGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;

  /* Optional: Add a subtle second gradient or keep it clean white-to-transparent which looks premium on dark */
  /* OR a color gradient if preferred: */
   background: ${(props) => props.theme.colors.brandGradientCool};
   -webkit-background-clip: text;
   -webkit-text-fill-color: transparent;
`;


export const StyledButtonLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ $alt }) => ($alt ? '150px' : '262px')};
  height: ${({ $alt }) => ($alt ? '52px' : '64px')};
  border-radius: 50px;
  font-size: ${({ $alt }) => ($alt ? '20px' : '24px')};
  font-weight: 600;
  color: ${(props) => props.theme.colors.textBright};
  background: ${({ $alt, theme }) =>
    $alt
      ? theme.colors.brandGradientWarm
      : theme.colors.brandGradientCool};
  text-decoration: none;
  cursor: pointer;
  transition: 0.5s ease;
  position: relative;
  overflow: hidden;
  opacity: ${({ disabled }) => (disabled ? '.5' : '1')};

  &:hover {
    opacity: 0.8;
  }

  &:active {
    background: ${(props) => props.theme.colors.brandGradientCool};
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15),
      inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }

  &:disabled {
    background: ${(props) => props.theme.colors.brandGradientCool};
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    width: ${({ $alt }) => ($alt ? '150px' : '184px')};
    height: ${({ $alt }) => ($alt ? '52px' : '48px')};
    font-size: ${({ $alt }) => ($alt ? '20px' : '16px')};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    height: 32px;
    font-size: 14px;
  }
`;

export const CtaRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 1.25rem;
  align-items: center;
`;

export const SecondaryButtonLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 0 22px;
  height: 52px;
  border-radius: 50px;
  font-size: 16px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.textBright};
  background: transparent;
  border: 1.5px solid ${(props) => props.theme.colors.secondaryBtnBorder};
  text-decoration: none;
  cursor: pointer;
  transition: 0.25s ease;

  &:hover {
    background: ${(props) => props.theme.colors.cardBgHover};
    color: ${(props) => props.theme.colors.secondaryBtnHoverText};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    height: 44px;
    font-size: 14px;
  }
`;
