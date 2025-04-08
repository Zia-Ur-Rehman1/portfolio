import styled from 'styled-components';

export const Boxes = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
  margin-top: 24px;

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 16px;
  }
`;

export const Box = styled.div`
  background: #1e293b; /* Darker background for better contrast */
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: left; /* Align text to the left for better readability */
  overflow: hidden;
  word-wrap: break-word; /* Ensures long words break to the next line */
  hyphens: auto; /* Adds hyphenation for better word breaking */
  color: #e2e8f0; /* Light text color for better contrast */
`;

export const BoxTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 8px;
  color: #f8fafc; /* Slightly brighter color for titles */
`;

export const BoxText = styled.p`
  font-size: 16px;
  color: #cbd5e1; /* Softer color for body text */
  line-height: 1.5;
  word-wrap: break-word; /* Ensures text wraps within the box */
  overflow-wrap: break-word; /* Handles long unbreakable strings */
  white-space: pre-wrap; /* Preserves whitespace and ensures wrapping */
  margin: 4px 0; /* Adds spacing between text lines */
`;

export const Join = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 80px;

  @media ${(props) => props.theme.breakpoints.md} {
    padding-bottom: 64px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: column;
    padding-bottom: 32px;
  }
`;

export const JoinText = styled.h5`
  font-size: 24px;
  line-height: 40px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.5);

  @media ${(props) => props.theme.breakpoints.md} {
    line-height: 32px;
    font-size: 20px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
    margin: 0 0 16px;
  }
`;

export const IconContainer = styled.div`
  display: flex;

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 160px;
    justify-content: space-between;
  }
`;
