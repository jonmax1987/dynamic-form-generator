# Dynamic Form Generator

A modern, responsive React application that dynamically generates forms based on JSON schema with real-time validation and accessibility features.

## Features

- **Dynamic Form Generation** - Renders forms based on API-provided JSON schema
- **Real-time Validation** - Uses React Hook Form with Zod for instant field validation
- **Mobile-First Design** - Fully responsive with modern UI components
- **Accessibility Compliant** - WCAG compliant with proper ARIA attributes and semantic HTML
- **Live JSON Preview** - Real-time preview of form data as users type
- **Smooth Animations** - Framer Motion animations for enhanced user experience
- **TypeScript** - Full type safety throughout the application
- **Comprehensive Testing** - Jest and React Testing Library test coverage

## Architecture

### Project Structure

```
src/
├── components/           # Component library with folder-based organization
│   ├── DynamicForm/     # Main form component
│   │   ├── DynamicForm.tsx
│   │   ├── DynamicForm.styled.ts
│   │   ├── DynamicForm.test.tsx
│   │   └── index.ts
│   ├── Modal/           # Submission modal component
│   ├── LoadingSkeleton/ # Loading state component
│   ├── JsonPreview/     # Live data preview component
│   └── Footer/          # Footer component
├── hooks/               # Custom React hooks
├── types/               # TypeScript type definitions
├── utils/               # Utility functions and validation schemas
└── styles/              # Global styles and theme
```

### Design Principles

- **Separation of Concerns** - Logic and styling are separated into distinct files
- **Component Co-location** - Each component folder contains all related files
- **Barrel Exports** - Clean import/export structure using index.ts files
- **Type Safety** - Comprehensive TypeScript coverage
- **Testability** - Each component includes unit tests

## Technology Stack

- **React 19** with TypeScript
- **Vite** for build tooling and development server
- **React Hook Form** for form state management
- **Zod** for schema validation
- **Styled Components** for CSS-in-JS styling
- **Framer Motion** for animations
- **Jest & React Testing Library** for testing

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building

Build for production:
```bash
npm run build
```

### Testing

Run the test suite:
```bash
npm test
```

Run linting:
```bash
npm run lint
```

## API Integration

The application fetches form schema from:
```
https://private-705dcb-formgenerator1.apiary-mock.com/form_fields
```

### Schema Format

The API returns a JSON array with form sections:

```json
[
  {
    "title": "Section Title",
    "fields": [
      {
        "type": "input|input_number|textarea|select",
        "label": "Field Label",
        "rules": {
          "required": {"value": true, "error_message": "Error message"},
          "min": {"value": 3, "error_message": "Min length error"},
          "max": {"value": 50, "error_message": "Max length error"},
          "regex": {"value": "^[A-Za-z]+$", "error_message": "Pattern error"}
        },
        "options": [{"key": "Display", "value": "value"}] // For select fields
      }
    ]
  }
]
```

## Form Validation

The application implements comprehensive validation:

- **Required Fields** - Prevents submission with empty required fields
- **Length Validation** - Min/max character limits
- **Pattern Matching** - Regex validation for formats (email, phone, etc.)
- **Type Validation** - Number inputs restrict to numeric values
- **Real-time Feedback** - Validation errors appear instantly

## Accessibility Features

- **Semantic HTML** - Uses proper form elements (`fieldset`, `legend`, `label`)
- **ARIA Attributes** - `aria-invalid`, `aria-describedby`, `role="alert"`
- **Keyboard Navigation** - Full keyboard support for all interactions
- **Screen Reader Support** - Descriptive labels and error announcements
- **Focus Management** - Proper focus handling throughout the application
- **Color Contrast** - WCAG AA compliant color schemes

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Performance

- **Code Splitting** - Optimized bundle size with Vite
- **Lazy Loading** - Components load on demand
- **Memoization** - Optimized re-renders with React optimizations
- **Efficient Validation** - Debounced validation to prevent excessive API calls

## Testing Strategy

- **Unit Tests** - Individual component testing
- **Integration Tests** - Form submission and validation flows  
- **Accessibility Tests** - ARIA compliance and keyboard navigation
- **Visual Regression** - Styled component consistency

---

Built by Jonathan Max — React + TS