import styled from 'styled-components';

export const Section = styled.section`
  padding: 3rem 0;
  background: ${(props) => props.theme.colors.sectionBg};
`;

export const SectionTitle = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
  color: ${(props) => props.theme.colors.accentLightBlue};
  letter-spacing: 0.5px;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
  justify-content: center;
  align-items: stretch;
  padding: 0 2rem;
`;

export const Card = styled.div`
  background: ${(props) => props.theme.colors.cardBg};
  padding: 0;
  border-radius: 15px;
  box-shadow: ${(props) => props.theme.colors.shadowMd};
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  overflow: hidden;
  border: 1px solid ${(props) =>
    props.isOpen
      ? props.theme.colors.borderInputFocus
      : 'transparent'};

  &:hover {
    transform: translateY(-3px);
    box-shadow: ${(props) => props.theme.colors.shadowMdHover};
  }
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.5rem 1.8rem;
  cursor: pointer;
  user-select: none;
  outline: none;

  &:focus-visible {
    box-shadow: inset 0 0 0 2px ${(props) => props.theme.colors.borderInputFocus};
    border-radius: 15px;
  }
`;

export const CardHeaderText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  flex: 1;
  min-width: 0;
`;

export const ChevronWrap = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.accentLightBlue};
  transition: transform 0.3s ease;
  transform: ${(props) => (props.isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
  background: ${(props) => props.theme.colors.sectionBg};
  border: 1px solid ${(props) => props.theme.colors.borderSoft};
  border-radius: 50%;
  width: 36px;
  height: 36px;
`;

export const Role = styled.h3`
  color: ${(props) => props.theme.colors.accentLightBlue};
  font-size: 1.75rem;
  margin: 0;
`;

export const Company = styled.h4`
  color: ${(props) => props.theme.colors.borderInputFocus};
  font-weight: 500;
  font-size: 1.25rem;
  margin: 0.25rem 0 0;
`;

export const Duration = styled.p`
  color: ${(props) => props.theme.colors.textMutedAlt};
  font-size: 1.1rem;
  margin: 0.25rem 0 0;
`;

export const ToggleHint = styled.span`
  margin-top: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.textMutedAlt};
  letter-spacing: 0.02em;
`;

export const CollapseRegion = styled.div`
  max-height: ${(props) => (props.isOpen ? '4000px' : '0')};
  opacity: ${(props) => (props.isOpen ? '1' : '0')};
  overflow: hidden;
  transition: max-height 0.4s ease, opacity 0.25s ease, padding 0.25s ease;
  padding: ${(props) => (props.isOpen ? '0 1.8rem 1.5rem' : '0 1.8rem')};
`;

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 1.4rem;
  line-height: 1.5;
  color: ${(props) => props.theme.colors.textBodyAlt2};

  li {
    padding-left: 1.6rem;
    position: relative;
    margin-bottom: 0.6rem;
  }

  li::before {
    content: '🔹';
    color: ${(props) => props.theme.colors.achievementBullet};
    font-size: 1.2rem;
    position: absolute;
    left: 0;
    top: 0.1em;
  }
`;
