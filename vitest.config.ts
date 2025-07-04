import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths({
      // Ensure path aliases work in tests
      projects: ['./tsconfig.json'],
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./test/setup.ts'],
    testTimeout: 10000, // 10 seconds
    clearMocks: true,
    mockReset: true,
    restoreMocks: true,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'test/',
        '**/*.d.ts',
        '**/*.test.{js,jsx,ts,tsx}',
        '**/*.spec.{js,jsx,ts,tsx}',
        '**/__tests__/**',
        '**/*.stories.{js,jsx,ts,tsx}',
        '**/.next/**',
      ],
    },
    // Enable test isolation
    isolate: true,
    // Show test location in output
    fileParallelism: true,
    // Show test names in console
    passWithNoTests: true,
    // Show test duration
    watch: false,
    // Show test output
    silent: false,
  },
  // Resolve module aliases
  resolve: {
    alias: {
      // Ensure consistent module resolution
      '^@/(.*)$': '<rootDir>/$1',
    },
  },
});
