import styled from 'styled-components';


export const HookBanner = styled.div`
  width: 100%;
  max-width: 740px;
  padding: 1.0rem 2.4rem;
  border-radius: 26px;
  border: 1px solid rgba(148, 93, 214, 0.45);
  background: radial-gradient(circle at top, rgba(13, 202, 240, 0.35), rgba(15, 23, 42, 0.6));
  box-shadow: 0 30px 70px rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(12px);
`;

export const HookLabel = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.9rem;
  border-radius: 999px;
  border: 1px solid rgba(248, 250, 252, 0.5);
  text-transform: uppercase;
  letter-spacing: 0.3rem;
  font-size: 0.78rem;
  color: #f8fafc;
  opacity: 0.85;
`;

export const HookText = styled.p`
  font-size: 1.65rem;
  line-height: 1.6;
  color: #e2e8f0;
  font-weight: 500;
`;