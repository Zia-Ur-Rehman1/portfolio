import styled from 'styled-components';

export const ContactCard = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 1rem 0 0 0;
  padding: 3rem;
  border-radius: 34px;
  background: rgba(9, 15, 28, 0.9);
  border: 1px solid rgba(110, 112, 255, 0.35);
  box-shadow: 0 45px 120px rgba(2, 6, 23, 0.75);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    padding: 1px;
    background: linear-gradient(120deg, rgba(56, 189, 248, 0.55), rgba(148, 93, 214, 0.55));
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

const fieldStyles = `
  width: 100%;
  padding: 1rem 1.25rem;
  border-radius: 16px;
  border: 1px solid rgba(148, 93, 214, 0.35);
  background: rgba(15, 23, 42, 0.65);
  color: #eef2ff;
  font-size: 1rem;
  transition: border 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;

  &::placeholder {
    color: rgba(226, 232, 240, 0.75);
    font-size: 1.5rem;
  }

  &:focus {
    outline: none;
    border-color: #38bdf8;
    box-shadow: 0 0 0 2px rgba(56, 189, 248, 0.25);
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
  background: linear-gradient(120deg, #13adc7 0%, #945dd6 100%);
  color: #0f172a;
  font-size: 1.05rem;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px) scale(1.01);
    box-shadow: 0 18px 30px rgba(148, 93, 214, 0.35);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(19, 173, 199, 0.45);
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
  color: ${(props) => (props.error ? '#fecdd3' : '#a5f3fc')};
  font-weight: 500;
`;
