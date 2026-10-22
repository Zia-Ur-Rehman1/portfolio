import styled, { keyframes } from 'styled-components';

const rise = keyframes`
  from { opacity: 0; transform: translateY(16px) scale(0.98); }
  to { opacity: 1; transform: translateY(0) scale(1); }
`;

const pulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(56, 189, 248, 0.5), 0 12px 30px rgba(0, 0, 0, 0.35); }
  70% { box-shadow: 0 0 0 16px rgba(56, 189, 248, 0), 0 12px 30px rgba(0, 0, 0, 0.35); }
  100% { box-shadow: 0 0 0 0 rgba(56, 189, 248, 0), 0 12px 30px rgba(0, 0, 0, 0.35); }
`;

const blink = keyframes`
  0%, 80%, 100% { opacity: 0.25; transform: translateY(0); }
  40% { opacity: 1; transform: translateY(-3px); }
`;

export const Wrapper = styled.div`
  position: fixed;
  right: 24px;
  bottom: 24px;
  z-index: 70;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1.2rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    right: 16px;
    bottom: 16px;
  }
`;

export const Bubble = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  height: 56px;
  padding: 0 1.6rem;
  border: 0;
  border-radius: 999px;
  cursor: pointer;
  color: ${(props) => props.theme.colors.textBright};
  background: ${(props) => props.theme.colors.brandGradient};
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.35);
  animation: ${({ $open }) => ($open ? 'none' : pulse)} 2.6s ease-in-out infinite;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }

  &:focus-visible {
    outline: 2px solid ${(props) => props.theme.colors.borderInputFocus};
    outline-offset: 3px;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const BubbleLabel = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  white-space: nowrap;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: none;
  }
`;

export const Panel = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  height: min(600px, calc(100vh - 120px));
  overflow: hidden;
  border-radius: 18px;
  background: ${(props) => props.theme.colors.modalBg};
  border: 1px solid ${(props) => props.theme.colors.borderSoft};
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.55);
  animation: ${rise} 0.22s ease-out both;

  @media ${(props) => props.theme.breakpoints.sm} {
    position: fixed;
    inset: 0;
    width: auto;
    height: auto;
    border-radius: 0;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  padding: 1.4rem 1.6rem;
  background: ${(props) => props.theme.colors.cardBg};
  border-bottom: 1px solid ${(props) => props.theme.colors.borderSoft};

  > span {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 38px;
    height: 38px;
    border-radius: 12px;
    font-weight: 700;
    font-size: 1.4rem;
    color: ${(props) => props.theme.colors.textBright};
    background: ${(props) => props.theme.colors.ctaGradient};
  }

  div {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  strong {
    font-size: 1.6rem;
    color: ${(props) => props.theme.colors.textBright};
  }

  small {
    font-size: 1.2rem;
    color: ${(props) => props.theme.colors.textMuted};
  }

  button {
    display: inline-flex;
    padding: 0.6rem;
    border: 0;
    border-radius: 8px;
    cursor: pointer;
    font-size: 2rem;
    color: ${(props) => props.theme.colors.textMuted};
    background: transparent;
  }

  button:hover {
    color: ${(props) => props.theme.colors.textBright};
    background: rgba(255, 255, 255, 0.08);
  }
`;

export const Messages = styled.div`
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.6rem;
`;

export const Message = styled.div`
  max-width: 85%;
  padding: 1rem 1.3rem;
  border-radius: 14px;
  font-size: 1.45rem;
  line-height: 1.55;
  white-space: pre-wrap;
  overflow-wrap: anywhere;
  align-self: ${({ $role }) => ($role === 'user' ? 'flex-end' : 'flex-start')};
  color: ${({ $role, $error, theme }) =>
    $error ? theme.colors.accentErrorLight : $role === 'user' ? theme.colors.textBright : theme.colors.textBody};
  background: ${({ $role, theme }) => ($role === 'user' ? theme.colors.accentBlue : theme.colors.cardBg)};
  border-bottom-right-radius: ${({ $role }) => ($role === 'user' ? '4px' : '14px')};
  border-bottom-left-radius: ${({ $role }) => ($role === 'user' ? '14px' : '4px')};

  a {
    color: ${(props) => props.theme.colors.accentCyanGlow};
  }
`;

export const Typing = styled.span`
  display: inline-flex;
  gap: 4px;
  padding: 0.4rem 0;

  i {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: currentColor;
    animation: ${blink} 1.2s infinite ease-in-out;
  }

  i:nth-child(2) { animation-delay: 0.15s; }
  i:nth-child(3) { animation-delay: 0.3s; }
`;

export const Suggestions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-top: 0.4rem;

  button {
    padding: 0.7rem 1.2rem;
    border-radius: 999px;
    cursor: pointer;
    font-size: 1.3rem;
    color: ${(props) => props.theme.colors.textBright};
    background: transparent;
    border: 1px solid ${(props) => props.theme.colors.borderInputFocus};
    transition: background 0.2s ease;
  }

  button:hover {
    background: rgba(56, 189, 248, 0.12);
  }
`;

export const Actions = styled.div`
  display: flex;
  gap: 0.6rem;
  padding: 1rem 1.6rem 0;

  a {
    flex: 1;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.7rem 0.4rem;
    border-radius: 10px;
    font-size: 1.25rem;
    font-weight: 600;
    text-decoration: none;
    white-space: nowrap;
    color: ${(props) => props.theme.colors.textBright};
    background: ${(props) => props.theme.colors.cardBg};
    border: 1px solid ${(props) => props.theme.colors.borderSoft};
  }

  a:first-child {
    background: ${(props) => props.theme.colors.ctaGradient};
    border-color: transparent;
  }

  a:hover {
    filter: brightness(1.12);
  }
`;

export const Composer = styled.form`
  display: flex;
  gap: 0.8rem;
  padding: 1rem 1.6rem 0.6rem;

  input {
    flex: 1;
    min-width: 0;
    padding: 1.1rem 1.3rem;
    border-radius: 12px;
    font-size: 1.45rem;
    color: ${(props) => props.theme.colors.textBright};
    background: ${(props) => props.theme.colors.inputBg};
    border: 1px solid ${(props) => props.theme.colors.borderSoft};
    outline: none;
  }

  input:focus {
    border-color: ${(props) => props.theme.colors.borderInputFocus};
  }

  button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    border: 0;
    border-radius: 12px;
    cursor: pointer;
    font-size: 1.8rem;
    color: ${(props) => props.theme.colors.textBright};
    background: ${(props) => props.theme.colors.ctaGradient};
  }

  button:disabled {
    opacity: 0.4;
    cursor: default;
  }
`;

export const Footnote = styled.p`
  margin: 0;
  padding: 0 1.6rem 1.2rem;
  font-size: 1.1rem;
  text-align: center;
  color: ${(props) => props.theme.colors.textFaint};
`;
