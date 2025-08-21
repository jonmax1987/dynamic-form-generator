import { z } from 'zod';
import type { FormField, FormSchema } from '../types/form';

const createFieldSchema = (field: FormField): z.ZodString | z.ZodNumber => {
  const { rules, type } = field;
  
  if (type === 'input_number') {
    let schema = z.number();
    
    if (rules.required?.value) {
      schema = schema.min(1, rules.required.error_message);
    }
    
    if (rules.min?.value) {
      schema = schema.min(Number(rules.min.value), 
        rules.min.error_message.replace('{{value}}', String(rules.min.value)));
    }
    
    if (rules.max?.value) {
      schema = schema.max(Number(rules.max.value), 
        rules.max.error_message.replace('{{value}}', String(rules.max.value)));
    }
    
    return schema;
  }
  
  let schema = z.string();
  
  if (rules.required?.value) {
    schema = schema.min(1, rules.required.error_message);
  }
  
  if (rules.min?.value) {
    schema = schema.min(Number(rules.min.value), 
      rules.min.error_message.replace('{{value}}', String(rules.min.value)));
  }
  
  if (rules.max?.value) {
    schema = schema.max(Number(rules.max.value), 
      rules.max.error_message.replace('{{value}}', String(rules.max.value)));
  }
  
  if (rules.regex?.value) {
    schema = schema.regex(new RegExp(String(rules.regex.value)), rules.regex.error_message);
  }
  
  return schema;
};

export const createValidationSchema = (formSchema: FormSchema) => {
  const schemaObject: Record<string, z.ZodString | z.ZodNumber> = {};
  
  formSchema.forEach(section => {
    section.fields.forEach(field => {
      const fieldKey = field.label.toLowerCase().replace(/\s+/g, '_');
      schemaObject[fieldKey] = createFieldSchema(field);
    });
  });
  
  return z.object(schemaObject);
};