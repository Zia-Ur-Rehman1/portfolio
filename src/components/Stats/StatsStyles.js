// StatsStyles.js
import styled from 'styled-components';

// In StatsStyles.js or wherever <Section> is defined
export const StatDiv = styled.div `
  grid-row: 1;
  grid-column: 2;
  z-index: 2;
  @media ${(props) => props.theme.breakpoints.md} {
  display: grid;
  }

`
export const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 50px;
  margin-top: 32px;

  @media ${(props) => props.theme.breakpoints.lg} {
    grid-template-columns: 1fr;
    gap: 16px;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: 2fr 2fr;
    gap: 150px;  
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

`;

export const StatCard = styled.div`
  background: ${(props) => props.theme.colors.cardBg};
  border-radius: 12px;
  padding: 20px;
  text-align: center;
  box-shadow: ${(props) => props.theme.colors.shadowStat};
  transition: transform 0.2s ease;
  width: 85%;
  @media ${(props) => props.theme.breakpoints.md} {
  width: 190px
  }
  &:hover {
    transform: translateY(-4px);
  }
`;

export const StatIconWrapper = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: ${(props) => props.theme.colors.statIconGradient};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 16px; /* Center horizontally, space below */
  box-shadow: ${(props) => props.theme.colors.shadowStatIcon};

  svg {
    width: 24px;
    height: 24px;
    color: ${(props) => props.theme.colors.textBright};
  }
`;

export const StatValue = styled.h3`
  font-size: 24px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.textPrimary};
  margin-bottom: 6px;
`;

export const StatLabel = styled.p`
  font-size: 14px;
  color: ${(props) => props.theme.colors.textSoft};
  line-height: 1.4;
`;