import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
  padding: 0 2rem;

  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: 1fr;
    padding: 0 1rem;
  }
`;

export const Card = styled.article`
  background: ${(props) => props.theme.colors.cardBg};
  border: 1px solid ${(props) => props.theme.colors.borderSoft};
  border-radius: 15px;
  padding: 1.6rem 1.5rem 1.4rem;
  box-shadow: ${(props) => props.theme.colors.shadowMd};
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  &:hover {
    transform: translateY(-3px);
    box-shadow: ${(props) => props.theme.colors.shadowMdHover};
    border-color: ${(props) => props.theme.colors.borderInputFocus};
  }
`;

export const IconWrap = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.accentLightBlue};
  background: ${(props) => props.theme.colors.sectionBg};
  border: 1px solid ${(props) => props.theme.colors.borderSoft};
  font-size: 1.6rem;
`;

export const Title = styled.h3`
  margin: 0;
  color: ${(props) => props.theme.colors.accentLightBlue};
  font-size: 1.75rem;
`;

export const Desc = styled.p`
  margin: 0;
  color: ${(props) => props.theme.colors.textBodyAlt2};
  font-size: 1.25rem;
  line-height: 1.6;
`;

export const Bullets = styled.ul`
  list-style: none;
  margin: 0.5rem 0 0;
  padding: 0;
  color: ${(props) => props.theme.colors.textBodyAlt2};
  font-size: 1.2rem;
  line-height: 1.6;

  li {
    padding-left: 1.4rem;
    position: relative;
    margin-bottom: 0.5rem;
  }

  li::before {
    content: '▸';
    color: ${(props) => props.theme.colors.borderInputFocus};
    position: absolute;
    left: 0;
    top: 0;
  }
`;
