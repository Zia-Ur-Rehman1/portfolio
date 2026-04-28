import styled from 'styled-components';


export const HookBanner = styled.div`
  position: relative;
  width: 100%;
  max-width: 740px;
  padding: 1.0rem 2.4rem;
  border-radius: 26px;
  border: 1px solid ${(props) => props.theme.colors.borderPurple};
  background: ${(props) => props.theme.colors.hookGradient};
  box-shadow: ${(props) => props.theme.colors.shadowDeep};
  backdrop-filter: blur(12px);

  &::after {
    content: '';
    position: absolute;
    top: 14px;
    right: 14px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: ${(props) => props.theme.colors.accentGreen};
    box-shadow: 0 0 0 4px rgba(34, 197, 94, 0.25);
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
  font-size: 1.65rem;
  line-height: 1.6;
  color: ${(props) => props.theme.colors.textBody};
  font-weight: 500;
`;