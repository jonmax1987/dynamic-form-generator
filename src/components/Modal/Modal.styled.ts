import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 16px;
`;

export const ModalContainer = styled(motion.div)`
  background: white;
  border-radius: 12px;
  padding: 24px;
  max-width: 90vw;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  
  @media (min-width: 768px) {
    max-width: 600px;
    padding: 32px;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

export const ModalTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #1f2937;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 1.75rem;
  }
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #6b7280;
  padding: 4px;
  border-radius: 4px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #f3f4f6;
    color: #374151;
  }

  &:focus {
    outline: 2px solid #3b82f6;
    outline-offset: 2px;
  }
`;

export const DataContainer = styled.div`
  background-color: #f8fafc;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 24px;
`;

export const DataTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 16px;
`;

export const DataItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
  
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

export const DataLabel = styled.span`
  font-weight: 500;
  color: #374151;
  min-width: 140px;
  margin-bottom: 4px;

  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 12px;
  }
`;

export const DataValue = styled.span`
  color: #1f2937;
  background-color: #ffffff;
  padding: 4px 8px;
  border-radius: 4px;
  border: 1px solid #d1d5db;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 0.875rem;
`;

export const JsonContainer = styled.pre`
  background-color: #1f2937;
  color: #f9fafb;
  padding: 16px;
  border-radius: 8px;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 0.875rem;
  line-height: 1.6;
  overflow-x: auto;
  margin-bottom: 24px;

  @media (min-width: 768px) {
    padding: 20px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 12px;
  justify-content: flex-end;
`;

export const Button = styled.button<{ variant?: 'primary' | 'secondary' }>`
  padding: 10px 20px;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border: none;

  ${props => props.variant === 'primary' ? `
    background-color: #3b82f6;
    color: white;
    
    &:hover {
      background-color: #2563eb;
    }
  ` : `
    background-color: #f3f4f6;
    color: #374151;
    
    &:hover {
      background-color: #e5e7eb;
    }
  `}

  &:focus {
    outline: 2px solid #3b82f6;
    outline-offset: 2px;
  }
`;