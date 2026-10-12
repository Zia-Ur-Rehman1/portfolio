import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.6rem;
  padding: 0 2rem;

  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: 1fr;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0;
  }
`;

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  padding: 2rem;
  border-radius: 16px;
  background: ${(props) => props.theme.colors.cardBg};
  border: 1px solid ${(props) => props.theme.colors.borderSoft};
  box-shadow: ${(props) => props.theme.colors.shadowMd};
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: ${(props) => props.theme.colors.shadowMdHover};
    border-color: ${(props) => props.theme.colors.borderInputFocus};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 1.6rem;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

export const IconWrap = styled.div`
  flex-shrink: 0;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  color: ${(props) => props.theme.colors.textBright};
  background: ${(props) => props.theme.colors.ctaGradient};
`;

export const HeaderText = styled.div`
  flex: 1;
  min-width: 0;
`;

export const Title = styled.h3`
  margin: 0;
  font-size: 1.8rem;
  line-height: 1.3;
  color: ${(props) => props.theme.colors.accentLightBlue};
`;

export const Project = styled.p`
  margin: 0.2rem 0 0;
  font-size: 1.25rem;
  color: ${(props) => props.theme.colors.textFaint};
`;

export const Status = styled.span`
  flex-shrink: 0;
  align-self: flex-start;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.3rem 0.9rem;
  border-radius: 999px;
  font-size: 1.15rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.accentMint};
  background: rgba(34, 197, 94, 0.1);
  border: 1px solid rgba(34, 197, 94, 0.3);

  &::before {
    content: '';
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${(props) => props.theme.colors.accentGreen};
  }
`;

export const Desc = styled.p`
  margin: 0;
  font-size: 1.4rem;
  line-height: 1.6;
  color: ${(props) => props.theme.colors.textBodyAlt2};
`;

export const Flow = styled.ol`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.6rem;
  margin: 0;
  padding: 1rem;
  list-style: none;
  border-radius: 12px;
  background: ${(props) => props.theme.colors.sectionBg};
  border: 1px dashed ${(props) => props.theme.colors.borderSoft};

  li {
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    font-size: 1.2rem;
    color: ${(props) => props.theme.colors.textBody};
  }

  li span {
    padding: 0.3rem 0.9rem;
    border-radius: 8px;
    background: ${(props) => props.theme.colors.cardBgAlt};
    border: 1px solid ${(props) => props.theme.colors.borderSoft};
    white-space: nowrap;
  }

  li svg {
    color: ${(props) => props.theme.colors.accentCyan};
  }
`;

export const Outcome = styled.p`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin: 0;
  font-size: 1.4rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.textBright};

  svg {
    flex-shrink: 0;
    color: ${(props) => props.theme.colors.accentGreen};
  }
`;

export const Stack = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin: auto 0 0;
  padding: 0;
  list-style: none;

  li {
    padding: 0.3rem 0.9rem;
    border-radius: 999px;
    font-size: 1.15rem;
    color: ${(props) => props.theme.colors.textSoft};
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid ${(props) => props.theme.colors.borderFaint};
  }
`;
