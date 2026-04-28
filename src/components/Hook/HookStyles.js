import styled from 'styled-components';


export const HookBanner = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  width: auto;
  max-width: min(720px, 90vw);
  margin: 0 auto;
  padding: 0.9rem 2rem;
  border-radius: 999px;
  border: 1px solid ${(props) => props.theme.colors.borderPurple};
  background: ${(props) => props.theme.colors.hookGradient};
  box-shadow: ${(props) => props.theme.colors.shadowDeep};
  backdrop-filter: blur(12px);

  &::after {
    content: '';
    position: absolute;
    top: -4px;
    right: -4px;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: ${(props) => props.theme.colors.accentGreen};
    border: 2px solid ${(props) => props.theme.colors.background || '#0f172a'};
    box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.25);
  }
`;

export const HookLabel = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.9rem;
  border-radius: 999px;
  border: 1px solid ${(props) => props.theme.colors.borderHero};
  text-transform: uppercase;
  letter-spacing: 0.3rem;
  font-size: 0.78rem;
  color: ${(props) => props.theme.colors.textPrimary};
  opacity: 0.85;
`;

export const HookText = styled.p`
  margin: 0;
  font-size: 1.5rem;
  line-height: 1.4;
  color: ${(props) => props.theme.colors.textBody};
  font-weight: 500;
  white-space: normal;
  text-align: center;
`;