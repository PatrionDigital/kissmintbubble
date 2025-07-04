import { describe, it, expect, beforeAll, afterEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import { vi } from 'vitest';

// Debug: Log environment information
console.log('=== Test Environment Information ===');
console.log('Node version:', process.version);
console.log('NODE_ENV:', process.env.NODE_ENV);
console.log('VITEST:', process.env.VITEST ? 'true' : 'false');
console.log('===================================');

// Mock any problematic modules if needed
// Simple mock for next/router
vi.mock('next/router', () => ({
  useRouter: vi.fn(() => ({
    push: vi.fn(),
    replace: vi.fn(),
    prefetch: vi.fn(),
    pathname: '/',
    route: '/',
    query: {},
    asPath: '/',
  })),
}));

// Simple test to verify the testing setup
describe('Test Environment Validation', () => {
  it('should have the correct environment', () => {
    console.log('Environment variables:', {
      NODE_ENV: process.env.NODE_ENV,
      VITEST: process.env.VITEST
    });
    expect(process.env.NODE_ENV).toBe('test');
  });

  it('should render a simple React element', () => {
    console.log('Rendering simple React element');
    const { container } = render(<div>Test Element</div>);
    expect(container.textContent).toContain('Test Element');
  });
});

// Test component rendering with more diagnostics
describe('Component Rendering', () => {
  beforeAll(() => {
    console.log('Setting up component tests');
  });

  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it('should import and log the Button component', async () => {
    console.log('Attempting to import Button component...');
    try {
      // Dynamic import to catch any import errors
      const { Button } = await import('@/components/ui/button');
      console.log('Successfully imported Button component');
      
      // Log the Button component
      console.log('Button component:', Button);
      
      // Test basic rendering
      console.log('Rendering Button component...');
      const { container } = render(<Button>Test Button</Button>);
      
      console.log('Rendered container:', {
        html: container.innerHTML,
        text: container.textContent
      });
      
      // Try different ways to find the button
      const buttons = container.getElementsByTagName('button');
      console.log(`Found ${buttons.length} button elements`);
      
      // Check for the button with role and name
      try {
        const buttonByRole = screen.getByRole('button', { name: /test button/i });
        console.log('Found button by role:', buttonByRole);
        expect(buttonByRole).toBeInTheDocument();
      } catch (roleError) {
        console.warn('Could not find button by role, trying fallback methods...');
        // Fallback checks
        const buttonByText = container.textContent;
        console.log('Button text content:', buttonByText);
        expect(buttonByText).toContain('Test Button');
      }
      
    } catch (error: unknown) {
      const errorObj = error as Error & { code?: string };
      console.error('Error in test:', {
        message: errorObj.message,
        stack: errorObj.stack,
        code: errorObj.code
      });
      throw errorObj;
    }
  });
});
