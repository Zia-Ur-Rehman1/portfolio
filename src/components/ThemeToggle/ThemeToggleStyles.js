import styled from 'styled-components';

export const ToggleButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid ${(props) => props.theme.colors.borderSoft};
  background: transparent;
  color: ${(props) => props.theme.colors.textPrimary};
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease, transform 0.2s ease, border-color 0.2s ease;
  padding: 0;

  &:hover {
    transform: scale(1.08);
    background: ${(props) => props.theme.colors.socialIconHoverBg};
    border-color: ${(props) => props.theme.colors.accentCyan};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${(props) => props.theme.colors.borderInputFocusGlow};
  }
`;
