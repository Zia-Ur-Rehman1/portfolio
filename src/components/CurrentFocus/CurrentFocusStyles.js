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
  background: ${(props) => props.theme.colors.focusCardGradient};
  border: 1px solid ${(props) => props.theme.colors.focusCardBorder};
  backdrop-filter: blur(8px);
  box-shadow: ${(props) => props.theme.colors.shadowFocusCard};
  min-height: 90px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: ${(props) => props.theme.colors.shadowFocusCardHover};
  }
`;

export const FocusTitle = styled.h4`
  font-size: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 0.08rem;
  color: ${(props) => props.theme.colors.focusCardTitle};
  margin: 0;
`;

export const FocusHook = styled.p`
  margin: 0;
  font-size: 1.25rem;
  line-height: 1.5;
  font-weight: 600;
  color: ${(props) => props.theme.colors.textBody};
`;
