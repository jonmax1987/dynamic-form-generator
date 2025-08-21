export interface FormRule {
  value: boolean | number | string;
  error_message: string;
}

export interface FormFieldRules {
  required?: FormRule;
  min?: FormRule;
  max?: FormRule;
  regex?: FormRule;
}

export interface SelectOption {
  key: string;
  value: string;
}

export interface FormField {
  type: 'input' | 'input_number' | 'textarea' | 'select';
  label: string;
  rules: FormFieldRules;
  options?: SelectOption[];
}

export interface FormSection {
  title: string;
  fields: FormField[];
}

export type FormSchema = FormSection[];

export interface FormData {
  [key: string]: string | number;
}