import styled, { css } from 'styled-components';

export const ContactCard = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 1rem auto 0;
  padding: 0;
  border-radius: 24px;
  background: ${(props) => props.theme.colors.contactCardBg};
  border: 1px solid ${(props) => props.theme.colors.borderIndigo};
  box-shadow: ${(props) => props.theme.colors.shadowContact};
  position: relative;
  overflow: hidden;
  display: grid;
  grid-template-columns: 380px 1fr;

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
    grid-template-columns: 1fr;
  }
`;

export const InfoPanel = styled.div`
  padding: 3rem 2.25rem;
  background: ${(props) => props.theme.colors.contactDecorative};
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border-right: 1px solid ${(props) => props.theme.colors.borderIndigo};

  @media ${(props) => props.theme.breakpoints.md} {
    border-right: none;
    border-bottom: 1px solid ${(props) => props.theme.colors.borderIndigo};
    padding: 2.25rem 2rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 1.75rem 1.5rem;
    gap: 1.5rem;
  }
`;

export const InfoHeading = styled.h3`
  margin: 0;
  font-size: 2.6rem;
  color: ${(props) => props.theme.colors.textPrimary};
  font-weight: 700;
  line-height: 1.2;
`;

export const InfoSubText = styled.p`
  margin: 0.75rem 0 0;
  font-size: 1.7rem;
  line-height: 1.5;
  color: ${(props) => props.theme.colors.textPrimary};
  opacity: 0.92;
`;

export const InfoChannelList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const InfoChannel = styled.li`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.7rem;
  color: ${(props) => props.theme.colors.textPrimary};

  a {
    color: inherit;
    text-decoration: none;
    transition: color 0.2s ease;
    &:hover {
      color: ${(props) => props.theme.colors.textBright};
    }
  }

  svg {
    flex-shrink: 0;
    color: ${(props) => props.theme.colors.borderInputFocus};
  }
`;

export const InfoFootnote = styled.div`
  margin-top: auto;
  padding-top: 1.5rem;
  border-top: 1px solid ${(props) => props.theme.colors.borderSoft};
  font-size: 1.4rem;
  color: ${(props) => props.theme.colors.textPrimary};
  opacity: 0.9;
  line-height: 1.6;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 3rem 2.5rem;

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 2.25rem 2rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 1.75rem 1.5rem;
  }
`;

export const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: 1fr;
  }
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

export const Label = styled.label`
  font-size: 1.6rem;
  font-weight: 600;
  letter-spacing: 0.01em;
  color: ${(props) => props.theme.colors.textPrimary};
`;

const fieldStyles = css`
  width: 100%;
  padding: 1.25rem 1.4rem;
  border-radius: 12px;
  border: 1px solid ${(props) => props.theme.colors.borderPurpleSoft};
  background: ${(props) => props.theme.colors.inputBg};
  color: ${(props) => props.theme.colors.contactInputText};
  font-size: 1.7rem;
  font-family: inherit;
  line-height: 1.5;
  transition: border 0.15s ease, box-shadow 0.15s ease;

  &::placeholder {
    color: ${(props) => props.theme.colors.contactInputPlaceholder};
    font-size: 1.6rem;
    opacity: 0.95;
  }

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.borderInputFocus};
    box-shadow: 0 0 0 3px ${(props) => props.theme.colors.borderInputFocusGlow};
  }
`;

export const Input = styled.input`
  ${fieldStyles}
`;

export const TextArea = styled.textarea`
  ${fieldStyles}
  min-height: 200px;
  resize: vertical;
  font-family: inherit;
`;

export const SubmitRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 0.5rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const SubmitButton = styled.button`
  padding: 1.25rem 3rem;
  border-radius: 12px;
  border: none;
  background: ${(props) => props.theme.colors.ctaGradient};
  color: ${(props) => props.theme.colors.textOnGradient};
  font-size: 1.7rem;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease, opacity 0.15s ease;

  &:hover:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: ${(props) => props.theme.colors.shadowSubmit};
  }

  &:focus {
    outline: none;
    box-shadow: ${(props) => props.theme.colors.shadowSubmitFocus};
  }

  &:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }
`;

export const SubmitHint = styled.span`
  font-size: 1.4rem;
  color: ${(props) => props.theme.colors.textPrimary};
  opacity: 0.85;
`;

export const StatusMessage = styled.p`
  margin: 0;
  padding: 1.15rem 1.4rem;
  border-radius: 10px;
  font-size: 1.55rem;
  background: ${(props) =>
    props.error
      ? 'rgba(239, 68, 68, 0.08)'
      : 'rgba(34, 197, 94, 0.08)'};
  color: ${(props) =>
    props.error ? props.theme.colors.statusErrorText : props.theme.colors.statusSuccessText};
  border: 1px solid ${(props) =>
    props.error ? 'rgba(239, 68, 68, 0.3)' : 'rgba(34, 197, 94, 0.3)'};
`;
