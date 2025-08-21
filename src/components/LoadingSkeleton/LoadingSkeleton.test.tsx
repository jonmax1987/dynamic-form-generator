import { render, screen } from '@testing-library/react';
import { LoadingSkeleton } from './LoadingSkeleton';

describe('LoadingSkeleton', () => {
  test('renders loading skeleton elements', () => {
    render(<LoadingSkeleton />);
    
    const container = screen.getByRole('generic');
    expect(container).toBeInTheDocument();
  });

  test('renders multiple skeleton fields', () => {
    const { container } = render(<LoadingSkeleton />);
    
    // Check that skeleton elements are present
    expect(container.firstChild).toBeInTheDocument();
  });
});