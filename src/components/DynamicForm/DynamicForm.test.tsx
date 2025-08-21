import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { DynamicForm } from './DynamicForm';
import type { FormSchema } from '../../types/form';

const mockSchema: FormSchema = [
  {
    title: 'Test Form',
    fields: [
      {
        type: 'input',
        label: 'First Name',
        rules: {
          required: { value: true, error_message: 'This field is required' },
          min: { value: 2, error_message: 'Minimum 2 characters' }
        }
      },
      {
        type: 'input',
        label: 'Email',
        rules: {
          required: { value: true, error_message: 'Email is required' },
          regex: { value: '^[^@]+@[^@]+\\.[^@]+$', error_message: 'Invalid email format' }
        }
      },
      {
        type: 'select',
        label: 'Gender',
        options: [
          { key: 'Male', value: 'M' },
          { key: 'Female', value: 'F' }
        ],
        rules: {
          required: { value: true, error_message: 'Please select an option' }
        }
      }
    ]
  }
];

describe('DynamicForm', () => {
  const mockOnSubmit = jest.fn();
  const mockOnDataChange = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders form fields based on schema', () => {
    render(
      <DynamicForm 
        schema={mockSchema} 
        onSubmit={mockOnSubmit}
        onDataChange={mockOnDataChange}
      />
    );

    expect(screen.getByText('Test Form')).toBeInTheDocument();
    expect(screen.getByLabelText('First Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Gender')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Submit Form' })).toBeInTheDocument();
  });

  test('shows validation errors for required fields', async () => {
    const user = userEvent.setup();
    
    render(
      <DynamicForm 
        schema={mockSchema} 
        onSubmit={mockOnSubmit}
        onDataChange={mockOnDataChange}
      />
    );

    const firstNameInput = screen.getByLabelText('First Name');
    await user.type(firstNameInput, 'a');
    await user.clear(firstNameInput);

    await waitFor(() => {
      expect(screen.getByText('This field is required')).toBeInTheDocument();
    });
  });

  test('shows minimum length validation error', async () => {
    const user = userEvent.setup();
    
    render(
      <DynamicForm 
        schema={mockSchema} 
        onSubmit={mockOnSubmit}
        onDataChange={mockOnDataChange}
      />
    );

    const firstNameInput = screen.getByLabelText('First Name');
    await user.type(firstNameInput, 'a');

    await waitFor(() => {
      expect(screen.getByText('Minimum 2 characters')).toBeInTheDocument();
    });
  });

  test('disables submit button when form is invalid', () => {
    render(
      <DynamicForm 
        schema={mockSchema} 
        onSubmit={mockOnSubmit}
        onDataChange={mockOnDataChange}
      />
    );

    const submitButton = screen.getByRole('button', { name: 'Submit Form' });
    expect(submitButton).toBeDisabled();
  });

  test('enables submit button when form is valid', async () => {
    const user = userEvent.setup();
    
    render(
      <DynamicForm 
        schema={mockSchema} 
        onSubmit={mockOnSubmit}
        onDataChange={mockOnDataChange}
      />
    );

    await user.type(screen.getByLabelText('First Name'), 'John');
    await user.type(screen.getByLabelText('Email'), 'john@example.com');
    await user.selectOptions(screen.getByLabelText('Gender'), 'M');

    await waitFor(() => {
      const submitButton = screen.getByRole('button', { name: 'Submit Form' });
      expect(submitButton).toBeEnabled();
    });
  });

  test('calls onSubmit when form is submitted with valid data', async () => {
    const user = userEvent.setup();
    
    render(
      <DynamicForm 
        schema={mockSchema} 
        onSubmit={mockOnSubmit}
        onDataChange={mockOnDataChange}
      />
    );

    await user.type(screen.getByLabelText('First Name'), 'John');
    await user.type(screen.getByLabelText('Email'), 'john@example.com');
    await user.selectOptions(screen.getByLabelText('Gender'), 'M');

    await waitFor(() => {
      const submitButton = screen.getByRole('button', { name: 'Submit Form' });
      expect(submitButton).toBeEnabled();
    });

    await user.click(screen.getByRole('button', { name: 'Submit Form' }));

    await waitFor(() => {
      expect(mockOnSubmit).toHaveBeenCalledWith({
        first_name: 'John',
        email: 'john@example.com',
        gender: 'M'
      });
    });
  });

  test('calls onDataChange when form data changes', async () => {
    const user = userEvent.setup();
    
    render(
      <DynamicForm 
        schema={mockSchema} 
        onSubmit={mockOnSubmit}
        onDataChange={mockOnDataChange}
      />
    );

    await user.type(screen.getByLabelText('First Name'), 'J');

    await waitFor(() => {
      expect(mockOnDataChange).toHaveBeenCalledWith(
        expect.objectContaining({
          first_name: 'J'
        })
      );
    });
  });
});