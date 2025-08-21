import {useEffect, useRef} from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { AnimatePresence } from 'framer-motion';
import type { FormSchema, FormField } from '../../types/form';
import { createValidationSchema } from '../../utils/validationSchema';
import {
  FormContainer,
  SectionTitle,
  FieldContainer,
  Label,
  Input,
  NumberInput,
  Select,
  Textarea,
  ErrorMessage,
  SubmitButton
} from './DynamicForm.styled';

export interface DynamicFormProps {
  schema: FormSchema;
  onSubmit: (data: any) => void;
  onDataChange?: (data: any) => void;
}

export const DynamicForm: React.FC<DynamicFormProps> = ({ 
  schema, 
  onSubmit, 
  onDataChange 
}) => {
  const validationSchema = createValidationSchema(schema);
  
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid }
  } = useForm({
    resolver: zodResolver(validationSchema),
    mode: 'onChange'
  });

  const watchedData = watch();
  const previousDataRef = useRef<string>('');

  useEffect(() => {
    const currentDataString = JSON.stringify(watchedData);
    if (onDataChange && currentDataString !== previousDataRef.current) {
      previousDataRef.current = currentDataString;
      onDataChange(watchedData);
    }
  }, [watchedData, onDataChange]);

  const renderField = (field: FormField) => {
    const fieldKey = field.label.toLowerCase().replace(/\s+/g, '_');
    const error = errors[fieldKey];

    const fieldProps = {
      id: fieldKey,
      'aria-invalid': !!error,
      'aria-describedby': error ? `${fieldKey}-error` : undefined,
      ...register(fieldKey, { 
        valueAsNumber: field.type === 'input_number' 
      })
    };

    let inputElement;

    switch (field.type) {
      case 'input_number':
        inputElement = (
          <NumberInput
            {...fieldProps}
            placeholder={`Enter ${field.label.toLowerCase()}`}
          />
        );
        break;
      case 'textarea':
        inputElement = (
          <Textarea
            {...fieldProps}
            placeholder={`Enter ${field.label.toLowerCase()}`}
          />
        );
        break;
      case 'select':
        inputElement = (
          <Select {...fieldProps}>
            <option value="">Select {field.label.toLowerCase()}</option>
            {field.options?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.key}
              </option>
            ))}
          </Select>
        );
        break;
      default:
        inputElement = (
          <Input
            {...fieldProps}
            type="text"
            placeholder={`Enter ${field.label.toLowerCase()}`}
          />
        );
    }

    return (
      <FieldContainer key={fieldKey}>
        <Label htmlFor={fieldKey}>{field.label}</Label>
        {inputElement}
        <AnimatePresence mode="wait">
          {error && (
            <ErrorMessage
              role="alert"
              id={`${fieldKey}-error`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {error.message}
            </ErrorMessage>
          )}
        </AnimatePresence>
      </FieldContainer>
    );
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)} noValidate>
      {schema.map((section) => (
        <fieldset key={section.title}>
          <legend>
            <SectionTitle>{section.title}</SectionTitle>
          </legend>
          {section.fields.map(renderField)}
        </fieldset>
      ))}
      
      <SubmitButton type="submit" disabled={!isValid}>
        Submit Form
      </SubmitButton>
    </FormContainer>
  );
};