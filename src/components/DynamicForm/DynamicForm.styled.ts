import styled from 'styled-components';
import { motion } from 'framer-motion';

export const FormContainer = styled.form`
  max-width: 600px;
  margin: 0 auto;
  padding: 16px;

  @media (min-width: 768px) {
    padding: 24px;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 24px;
  color: #1f2937;

  @media (min-width: 768px) {
    font-size: 1.75rem;
  }
`;

export const FieldContainer = styled.div`
  margin-bottom: 24px;
`;

export const Label = styled.label`
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
  margin-bottom: 8px;
`;

const baseInputStyles = `
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #d1d5db;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.2s ease-in-out;
  background-color: #fff;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }

  &:invalid {
    border-color: #ef4444;
  }

  @media (min-width: 768px) {
    padding: 14px 18px;
  }
`;

export const Input = styled.input`
  ${baseInputStyles}
`;

export const NumberInput = styled.input.attrs({ type: 'number' })`
  ${baseInputStyles}
`;

export const Select = styled.select`
  ${baseInputStyles}
  cursor: pointer;
`;

export const Textarea = styled.textarea`
  ${baseInputStyles}
  min-height: 120px;
  resize: vertical;
`;

export const ErrorMessage = styled(motion.div)`
  color: #ef4444;
  font-size: 0.875rem;
  margin-top: 8px;
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 14px 24px;
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover:not(:disabled) {
    background-color: #2563eb;
    transform: translateY(-1px);
  }

  &:disabled {
    background-color: #9ca3af;
    cursor: not-allowed;
    transform: none;
  }

  @media (min-width: 768px) {
    padding: 16px 32px;
    font-size: 1.125rem;
  }
`;