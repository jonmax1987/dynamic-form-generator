import styled from 'styled-components';

export const PreviewContainer = styled.div`
  max-width: 600px;
  margin: 32px auto 0;
  padding: 16px;

  @media (min-width: 768px) {
    padding: 24px;
  }
`;

export const PreviewTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 16px;
  color: #1f2937;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const JsonContainer = styled.pre`
  background-color: #f8fafc;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  padding: 16px;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 0.875rem;
  line-height: 1.6;
  overflow-x: auto;
  max-height: 400px;
  overflow-y: auto;
  color: #1e293b;

  @media (min-width: 768px) {
    padding: 20px;
    font-size: 0.9rem;
  }
`;

export const EmptyState = styled.div`
  background-color: #f8fafc;
  border: 2px dashed #cbd5e1;
  border-radius: 8px;
  padding: 32px;
  text-align: center;
  color: #64748b;
  font-style: italic;

  @media (min-width: 768px) {
    padding: 40px;
  }
`;