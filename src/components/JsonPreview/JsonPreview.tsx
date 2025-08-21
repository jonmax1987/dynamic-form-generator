import React from 'react';
import {
  PreviewContainer,
  PreviewTitle,
  JsonContainer,
  EmptyState
} from './JsonPreview.styled';

export interface JsonPreviewProps {
  data: any;
}

export const JsonPreview: React.FC<JsonPreviewProps> = ({ data }) => {
  const hasData = data && Object.keys(data).some(key => 
    data[key] !== undefined && data[key] !== '' && data[key] !== null
  );

  const filteredData = hasData 
    ? Object.fromEntries(
        Object.entries(data).filter(([_, value]) => 
          value !== undefined && value !== '' && value !== null
        )
      )
    : {};

  return (
    <PreviewContainer>
      <PreviewTitle>Live JSON Preview</PreviewTitle>
      {hasData ? (
        <JsonContainer>
          {JSON.stringify(filteredData, null, 2)}
        </JsonContainer>
      ) : (
        <EmptyState>
          Start filling out the form to see the JSON preview
        </EmptyState>
      )}
    </PreviewContainer>
  );
};