// Basic test setup with minimal mocks
import { vi } from 'vitest';
import '@testing-library/jest-dom';

// Mock next/navigation
const mockPush = vi.fn();
const mockReplace = vi.fn();
const mockPrefetch = vi.fn();

vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: mockPush,
    replace: mockReplace,
    prefetch: mockPrefetch,
    pathname: '/',
    query: {},
    asPath: '/',
  }),
  usePathname: () => '/',
  useSearchParams: () => new URLSearchParams(),
  useParams: () => ({}),
}));

// Mock next-themes
vi.mock('next-themes', () => ({
  useTheme: () => ({
    theme: 'light',
    setTheme: vi.fn(),
    systemTheme: 'light',
  }),
}));

// Mock supabase client
vi.mock('@/lib/supabase/client', () => ({
  __esModule: true,
  default: {
    auth: {
      onAuthStateChange: vi.fn(),
      signIn: vi.fn(),
      signOut: vi.fn(),
      getSession: vi.fn().mockResolvedValue({ data: { session: null } }),
    },
  },
}));

// Simple mock for next/head
vi.mock('next/head', () => {
  return function MockHead() {
    return null;
  };
});

// Mock matchMedia for browser tests
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});
