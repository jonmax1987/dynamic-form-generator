import React from 'react';
import { AnimatePresence } from 'framer-motion';
import {
  Overlay,
  ModalContainer,
  ModalHeader,
  ModalTitle,
  CloseButton,
  DataContainer,
  DataTitle,
  DataItem,
  DataLabel,
  DataValue,
  JsonContainer,
  ButtonContainer,
  Button
} from './Modal.styled';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  data: any;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, data }) => {
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  React.useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(JSON.stringify(data, null, 2));
  };

  const formatLabel = (key: string) => {
    return key.split('_').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  const filteredData = Object.fromEntries(
    Object.entries(data || {}).filter(([_, value]) => 
      value !== undefined && value !== '' && value !== null
    )
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <Overlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleOverlayClick}
        >
          <ModalContainer
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <ModalHeader>
              <ModalTitle>{title}</ModalTitle>
              <CloseButton onClick={onClose} aria-label="Close modal">
                ×
              </CloseButton>
            </ModalHeader>

            <DataContainer>
              <DataTitle>Submitted Form Data</DataTitle>
              {Object.entries(filteredData).map(([key, value]) => (
                <DataItem key={key}>
                  <DataLabel>{formatLabel(key)}:</DataLabel>
                  <DataValue>{String(value)}</DataValue>
                </DataItem>
              ))}
            </DataContainer>

            <DataTitle>JSON Format</DataTitle>
            <JsonContainer>
              {JSON.stringify(filteredData, null, 2)}
            </JsonContainer>

            <ButtonContainer>
              <Button variant="secondary" onClick={copyToClipboard}>
                Copy JSON
              </Button>
              <Button variant="primary" onClick={onClose}>
                Close
              </Button>
            </ButtonContainer>
          </ModalContainer>
        </Overlay>
      )}
    </AnimatePresence>
  );
};