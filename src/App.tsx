import { useState, useCallback } from 'react';
import { useFormSchema } from './hooks/useFormSchema';
import { DynamicForm } from './components/DynamicForm';
import { LoadingSkeleton } from './components/LoadingSkeleton';
import { JsonPreview } from './components/JsonPreview';
import { Footer } from './components/Footer';
import { Modal } from './components/Modal';
import {
  GlobalStyle,
  AppContainer,
  Header,
  Title,
  Subtitle,
  MainContent,
  ErrorContainer,
  ErrorTitle,
  ErrorMessage
} from './App.styled';

function App() {
  const { schema, loading, error } = useFormSchema();
  const [formData, setFormData] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submittedData, setSubmittedData] = useState({});

  const handleSubmit = (data: any) => {
    console.log('Form submitted:', data);
    setSubmittedData(data);
    setIsModalOpen(true);
  };

  const handleDataChange = useCallback((data: any) => {
    setFormData(data);
  }, []);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Header>
          <Title>Dynamic Form Generator</Title>
          <Subtitle>A responsive form built with React, TypeScript, and real-time validation</Subtitle>
        </Header>

        <MainContent>
          {loading && <LoadingSkeleton />}
          
          {error && (
            <ErrorContainer>
              <ErrorTitle>Error Loading Form</ErrorTitle>
              <ErrorMessage>{error}</ErrorMessage>
            </ErrorContainer>
          )}

          {schema && !loading && !error && (
            <>
              <DynamicForm 
                schema={schema} 
                onSubmit={handleSubmit}
                onDataChange={handleDataChange}
              />
              <JsonPreview data={formData} />
            </>
          )}
        </MainContent>

        <Footer />
        
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          title="Form Submission Successful!"
          data={submittedData}
        />
      </AppContainer>
    </>
  );
}

export default App;