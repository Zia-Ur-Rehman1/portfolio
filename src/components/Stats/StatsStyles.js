// StatsStyles.js
import styled from 'styled-components';

// In StatsStyles.js or wherever <Section> is defined
export const StatonBG = styled.div`

    display: block;
    position: absolute;
    top: 100px;
    right: 15px;
`;
export const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 150px;
  margin-top: 32px;

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

export const StatCard = styled.div`
  background: #1e293b;
  border-radius: 12px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-4px);
  }
`;

export const StatIconWrapper = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: radial-gradient(circle, #3b82f6, #8b5cf6);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 16px; /* Center horizontally, space below */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);

  svg {
    width: 24px;
    height: 24px;
    color: white;
  }
`;

export const StatValue = styled.h3`
  font-size: 24px;
  font-weight: bold;
  color: #f8fafc;
  margin-bottom: 6px;
`;

export const StatLabel = styled.p`
  font-size: 14px;
  color: #cbd5e1;
  line-height: 1.4;
`;