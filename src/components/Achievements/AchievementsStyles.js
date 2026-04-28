import styled from 'styled-components';

export const Section = styled.section`
  padding: 3rem 0;
  background: ${(props) => props.theme.colors.sectionBg}; /* Deep blue background for section */
`;

export const SectionTitle = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
  color: ${(props) => props.theme.colors.accentLightBlue}; /* Matches title tone from projects */
  letter-spacing: 0.5px;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  justify-content: center;
  align-items: stretch;
  padding: 0 2rem;
`;

export const Card = styled.div`
  background: ${(props) => props.theme.colors.cardBg}; /* Dark card background */
  padding: 1.8rem;
  border-radius: 15px;
  box-shadow: ${(props) => props.theme.colors.shadowMd};
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${(props) => props.theme.colors.shadowMdHover};
  }
`;

export const Role = styled.h3`
  color: ${(props) => props.theme.colors.accentLightBlue};
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
`;

export const Company = styled.h4`
  color: ${(props) => props.theme.colors.borderInputFocus};
  font-weight: 500;
  margin: 0.25rem 0;
`;

export const Duration = styled.p`
  color: ${(props) => props.theme.colors.textMutedAlt}; /* Muted text */
  font-size: 0.95rem;
  margin-bottom: 1rem;
`;

export const List = styled.ul`
  list-style: none; /* Remove default bullet */
  margin-left: 0;
  padding-left: 0;
    font-size: 1.4rem;
  line-height: 1.5;
  color: ${(props) => props.theme.colors.textBodyAlt2};
  li::before {
    content: '🔹 ';
    color: ${(props) => props.theme.colors.achievementBullet}; /* Keep the bullet blue */
    font-size: 1.5rem;
  }
`;
