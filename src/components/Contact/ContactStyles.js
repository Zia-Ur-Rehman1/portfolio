import styled, { css } from 'styled-components';

export const ContactCard = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 1rem 0 0 0;
  padding: 3rem;
  border-radius: 34px;
  background: ${(props) => props.theme.colors.contactCardBg};
  border: 1px solid ${(props) => props.theme.colors.borderIndigo};
  box-shadow: ${(props) => props.theme.colors.shadowContact};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    padding: 1px;
    background: ${(props) => props.theme.colors.contactDecorative};
    -webkit-mask:
      linear-gradient(#000 0 0) content-box,
      linear-gradient(#000 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 2.25rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 1.5rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const FormRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.25rem;
`;

const fieldStyles = css`
  width: 100%;
  padding: 1rem 1.25rem;
  border-radius: 16px;
  border: 1px solid ${(props) => props.theme.colors.borderPurpleSoft};
  background: ${(props) => props.theme.colors.inputBg};
  color: ${(props) => props.theme.colors.contactInputText};
  font-size: 1rem;
  transition: border 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;

  &::placeholder {
    color: ${(props) => props.theme.colors.contactInputPlaceholder};
    font-size: 1.5rem;
  }

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.borderInputFocus};
    box-shadow: 0 0 0 2px ${(props) => props.theme.colors.borderInputFocusGlow};
    transform: translateY(-1px);
  }
`;

export const Input = styled.input`
  ${fieldStyles}
`;

export const TextArea = styled.textarea`
  ${fieldStyles}
  min-height: 170px;
  resize: vertical;
`;

export const SubmitButton = styled.button`
  justify-self: flex-start;
  padding: 0.95rem 2.9rem;
  border-radius: 40px;
  border: none;
  background: ${(props) => props.theme.colors.ctaGradient};
  color: ${(props) => props.theme.colors.textOnGradient};
  font-size: 1.05rem;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px) scale(1.01);
    box-shadow: ${(props) => props.theme.colors.shadowSubmit};
  }

  &:focus {
    outline: none;
    box-shadow: ${(props) => props.theme.colors.shadowSubmitFocus};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

export const StatusMessage = styled.p`
  margin-top: 1rem;
  font-size: 1rem;
  color: ${(props) => (props.error ? props.theme.colors.statusErrorText : props.theme.colors.statusSuccessText)};
  font-weight: 500;
`;

export const FallbackText = styled.p`
  margin: 0.5rem 0 0;
  font-size: 0.95rem;
  line-height: 1.6;
  color: ${(props) => props.theme.colors.textMuted};
`;

export const FallbackLink = styled.a`
  color: ${(props) => props.theme.colors.borderInputFocus};
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;

  &:hover {
    color: ${(props) => props.theme.colors.textBright};
    text-decoration: underline;
  }
`;
