import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(56, 189, 248, 0.55), 0 12px 30px rgba(0, 0, 0, 0.35); }
  70% { box-shadow: 0 0 0 18px rgba(56, 189, 248, 0), 0 12px 30px rgba(0, 0, 0, 0.35); }
  100% { box-shadow: 0 0 0 0 rgba(56, 189, 248, 0), 0 12px 30px rgba(0, 0, 0, 0.35); }
`;

const slideIn = keyframes`
  from { opacity: 0; transform: translateY(20px) scale(0.85); }
  to { opacity: 1; transform: translateY(0) scale(1); }
`;

export const FabContainer = styled.div`
  position: fixed;
  right: 24px;
  bottom: 24px;
  z-index: 60;
  pointer-events: ${({ $hidden }) => ($hidden ? 'none' : 'auto')};
  opacity: ${({ $hidden }) => ($hidden ? '0' : '1')};
  transform: translateY(${({ $hidden }) => ($hidden ? '12px' : '0')});
  transition: opacity 0.25s ease, transform 0.25s ease;
  animation: ${slideIn} 0.4s ease both;

  @media ${(props) => props.theme.breakpoints.sm} {
    right: 16px;
    bottom: 16px;
  }
`;

export const IconWrap = styled.span`
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.18);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.textBright};

  svg { font-size: 1.2rem; }
`;

export const Label = styled.span`
  white-space: nowrap;
  letter-spacing: 0.01em;
  max-width: 0;
  opacity: 0;
  overflow: hidden;
  transition: max-width 0.35s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.25s ease, margin-left 0.25s ease;
  margin-left: 0;
`;

export const FabLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  height: 56px;
  width: 56px;
  border-radius: 999px;
  background: ${(props) => props.theme.colors.brandGradient};
  color: ${(props) => props.theme.colors.textBright};
  font-weight: 700;
  font-size: 1rem;
  text-decoration: none;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.35);
  cursor: pointer;
  overflow: hidden;
  box-sizing: border-box;
  transition: width 0.35s cubic-bezier(0.22, 1, 0.36, 1), padding 0.35s ease, box-shadow 0.25s ease, transform 0.2s ease;
  animation: ${({ $pulsing }) => ($pulsing ? pulse : 'none')} 2.4s ease-in-out infinite;

  &:hover,
  &:focus-visible {
    width: 240px;
    padding: 10px 22px 10px 10px;
    box-shadow: 0 16px 38px rgba(0, 0, 0, 0.45);
    transform: translateY(-2px);
    animation: none;
  }

  &:hover ${Label},
  &:focus-visible ${Label} {
    max-width: 200px;
    opacity: 1;
    margin-left: 0.6rem;
  }

  &:focus-visible {
    outline: 3px solid ${(props) => props.theme.colors.borderInputFocusGlow};
    outline-offset: 3px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    height: 52px;
    width: 52px;

    &:hover,
    &:focus-visible {
      width: 220px;
      padding: 8px 18px 8px 8px;
    }
  }
`;
