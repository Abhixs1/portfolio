# Setup Guide for Improved Codebase

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Variables
Create a `.env.local` file in the root directory with your EmailJS credentials:
```env
VITE_APP_EMAILJS_SERVICE_ID=your_service_id
VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

### 3. Start Development Server
```bash
npm run dev
```

## Code Quality

### Linting
Before committing code, ensure it passes linting:
```bash
npm run lint      # Check for issues
npm run lint:fix  # Auto-fix issues
```

### Formatting
Keep code consistent with Prettier:
```bash
npm run format    # Format all files
```

### Combined Check
Check both lint and format:
```bash
npm run lint && npm run format:check
```

## Development Workflow

### Adding a New Component
1. Create component in `src/components/`
2. Add to `src/components/index.js` exports
3. Import and use in parent components

### Using Color Tokens
Instead of hardcoding colors, import from `src/constants/colors.js`:
```javascript
import { colors } from '../constants/colors';
// Or use existing Tailwind classes with the design colors
```

### Handling Form Validation
Use validation utilities for user inputs:
```javascript
import { validateContactForm } from '../utils/validation';

const validation = validateContactForm(formData);
if (!validation.isValid) {
  // Show errors
  console.log(validation.errors);
}
```

### Showing User Notifications
Use the toast system instead of `alert()`:
```javascript
import { useToast } from '../context/ToastContext';

const { addToast } = useToast();

// Success notification
addToast('Changes saved!', 'success');

// Error notification
addToast('Something went wrong', 'error');

// Custom duration (0 = no auto-dismiss)
addToast('Loading...', 'info', 0);
```

### Sending Emails
Use the email service for all email operations:
```javascript
import { sendEmail } from '../services/emailService';

const result = await sendEmail({
  name: 'John Doe',
  email: 'john@example.com',
  message: 'Hello!'
});

if (result.success) {
  // Handle success
} else {
  // Handle error - result.message contains error details
}
```

## Accessibility Checklist

When adding interactive elements:
- [ ] Icon-only buttons have `aria-label`
- [ ] Form inputs have `id` and `aria-required="true"`
- [ ] Form inputs with errors have `aria-invalid="true"`
- [ ] Menu toggles have `aria-expanded` attribute
- [ ] Images have meaningful `alt` text
- [ ] Interactive elements are keyboard accessible

## Testing the Features

### Test Form Validation
1. Navigate to contact section
2. Try submitting empty form
3. Try submitting with invalid email
4. Try submitting with short message
5. Verify error messages appear

### Test Toast Notifications
- Submit form successfully → success toast
- Trigger an error → error toast
- Check auto-dismiss behavior

### Test Error Boundary
1. Open browser console
2. The error boundary will catch and display errors gracefully
3. Click "Refresh Page" to recover

### Test Accessibility
1. Use keyboard Tab to navigate
2. Use Screen reader (NVDA/JAWS) to verify labels
3. Check focus indicators are visible

## Troubleshooting

### Linting Errors
```bash
npm run lint:fix  # Auto-fix most issues
```

### Formatting Issues
```bash
npm run format    # Auto-format code
```

### Missing Environment Variables
If you see "Missing required environment variables" error:
1. Create `.env.local` file
2. Add EmailJS credentials
3. Restart development server

### Toast Notifications Not Showing
- Ensure `ToastProvider` wraps the app in `App.jsx`
- Ensure `ToastContainer` is rendered
- Check browser console for errors

## Production Build

```bash
npm run build     # Create production build
npm run preview   # Preview production build locally
```

## Performance Tips

1. Use `SocialLinks` component instead of duplicating code
2. Import only needed utilities to reduce bundle size
3. Check build output: `npm run build`

## Next Steps

- [ ] Setup Git hooks to run linting automatically
- [ ] Add pre-commit hooks with Husky
- [ ] Setup CI/CD pipeline
- [ ] Add unit tests
- [ ] Monitor code quality metrics
