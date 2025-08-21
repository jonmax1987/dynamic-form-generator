import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #ffffff;
    color: #1f2937;
    line-height: 1.6;
  }

  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
`;

export const AppContainer = styled.div`
  flex: 1;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  background-color: #3b82f6;
  color: white;
  padding: 24px 16px;
  text-align: center;

  @media (min-width: 768px) {
    padding: 32px 24px;
  }
`;

export const Title = styled.h1`
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 8px;

  @media (min-width: 768px) {
    font-size: 2.25rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1rem;
  opacity: 0.9;

  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`;

export const MainContent = styled.main`
  flex: 1;
  padding: 32px 0;
`;

export const ErrorContainer = styled.div`
  max-width: 600px;
  margin: 48px auto;
  padding: 24px;
  background-color: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 8px;
  text-align: center;
  color: #991b1b;
`;

export const ErrorTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 8px;
`;

export const ErrorMessage = styled.p`
  font-size: 1rem;
`;