import React from 'react';
import {
  FooterContainer,
  FooterText,
  TechStack
} from './Footer.styled';

export const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterText>
        Built by <strong>Jonathan Max</strong> — <TechStack>React + TS</TechStack>
      </FooterText>
    </FooterContainer>
  );
};