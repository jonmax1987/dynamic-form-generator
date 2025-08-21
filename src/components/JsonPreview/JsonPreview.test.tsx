import { render, screen } from '@testing-library/react';
import { JsonPreview } from './JsonPreview';

describe('JsonPreview', () => {
  test('shows empty state when no data', () => {
    render(<JsonPreview data={{}} />);
    
    expect(screen.getByText('Live JSON Preview')).toBeInTheDocument();
    expect(screen.getByText('Start filling out the form to see the JSON preview')).toBeInTheDocument();
  });

  test('shows JSON data when provided', () => {
    const testData = {
      first_name: 'John',
      email: 'john@example.com'
    };

    render(<JsonPreview data={testData} />);
    
    expect(screen.getByText('Live JSON Preview')).toBeInTheDocument();
    expect(screen.getByText(/"first_name": "John"/)).toBeInTheDocument();
    expect(screen.getByText(/"email": "john@example.com"/)).toBeInTheDocument();
  });

  test('filters out empty values', () => {
    const testData = {
      first_name: 'John',
      email: '',
      age: null,
      gender: undefined
    };

    render(<JsonPreview data={testData} />);
    
    expect(screen.getByText(/"first_name": "John"/)).toBeInTheDocument();
    expect(screen.queryByText(/"email"/)).not.toBeInTheDocument();
    expect(screen.queryByText(/"age"/)).not.toBeInTheDocument();
    expect(screen.queryByText(/"gender"/)).not.toBeInTheDocument();
  });
});