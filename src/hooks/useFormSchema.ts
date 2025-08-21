import { useState, useEffect } from 'react';
import type { FormSchema } from '../types/form';

interface UseFormSchemaReturn {
  schema: FormSchema | null;
  loading: boolean;
  error: string | null;
}

export const useFormSchema = (): UseFormSchemaReturn => {
  const [schema, setSchema] = useState<FormSchema | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSchema = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch('https://private-705dcb-formgenerator1.apiary-mock.com/form_fields');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setSchema(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch form schema');
      } finally {
        setLoading(false);
      }
    };

    fetchSchema();
  }, []);

  return { schema, loading, error };
};