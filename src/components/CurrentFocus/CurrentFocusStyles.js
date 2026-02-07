import styled from 'styled-components';

export const FocusGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
  width: 100%;
`;

export const FocusCard = styled.div`
  border-radius: 18px;
  padding: 1.75rem;
  background: linear-gradient(135deg, rgba(56, 189, 248, 0.15), rgba(147, 51, 234, 0.15));
  border: 1px solid rgba(147, 51, 234, 0.35);
  backdrop-filter: blur(8px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.35);
  min-height: 90px;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 45px rgba(0, 0, 0, 0.45);
  }
`;

export const FocusTitle = styled.h4`
  font-size: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 0.08rem;
  color: #a5f3fc;
  margin: 0;
`;

export const FocusHook = styled.p`
  margin: 0;
  font-size: 1.25rem;
  line-height: 1.5;
  font-weight: 600;
  color: #e2e8f0;
`;
