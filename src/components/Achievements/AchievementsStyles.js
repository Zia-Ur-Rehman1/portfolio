import styled from 'styled-components';

export const Section = styled.section`
  padding: 3rem 0;
  background: #0f172a; /* Deep blue background for section */
`;

export const SectionTitle = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
  color: #9cc9e3; /* Matches title tone from projects */
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
  background: #1e293b; /* Dark card background */
  padding: 1.8rem;
  border-radius: 15px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.3);
  }
`;

export const Role = styled.h3`
  color: #9cc9e3;
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
`;

export const Company = styled.h4`
  color: #38bdf8;
  font-weight: 500;
  margin: 0.25rem 0;
`;

export const Duration = styled.p`
  color: #94a3b8; /* Muted text */
  font-size: 0.95rem;
  margin-bottom: 1rem;
`;

export const List = styled.ul`
  list-style: none; /* Remove default bullet */
  margin-left: 0;
  padding-left: 0;
    font-size: 1.4rem;
  line-height: 1.5;
  color: #e4e6e7;
  li::before {
    content: '🔹 ';
    color: #2575fc; /* Keep the bullet blue */
    font-size: 1.5rem;
  }
`;
