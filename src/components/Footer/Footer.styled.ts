import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #f8fafc;
  border-top: 1px solid #e2e8f0;
  padding: 24px 16px;
  margin-top: 48px;
  text-align: center;

  @media (min-width: 768px) {
    padding: 32px 24px;
  }
`;

export const FooterText = styled.p`
  color: #64748b;
  font-size: 0.875rem;
  margin: 0;
  
  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

export const TechStack = styled.span`
  font-weight: 600;
  color: #3b82f6;
`;