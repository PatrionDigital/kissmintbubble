# Contributing to KissMINT Bubble

First off, thanks for taking the time to contribute! 🎉 We're excited to have you on board. Here's how you can help make KissMINT Bubble better.

## 🏗 Project Structure

```plaintext
.
├── app/                    # App router pages and layouts
├── components/             # Reusable UI components
├── lib/                    # Utility functions and configurations
├── public/                 # Static files
├── styles/                 # Global styles
├── test/                   # Test files
└── types/                  # TypeScript type definitions
```

## 🛠 Development Setup

1. **Fork the repository** and clone it locally
2. **Install dependencies**:

   ```bash
   npm install
   # or
   yarn
   ```

3. **Set up environment variables**:

   ```bash
   cp .env.example .env.local
   ```

   Update the values in `.env.local` with your own API keys and configuration.

4. **Start the development server**:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

## 🧪 Testing

We use the following testing tools:

- **Unit Tests**: Vitest + React Testing Library
- **E2E Tests**: Playwright
- **Linting**: ESLint + Prettier
- **Type Checking**: TypeScript

Run the test suite:

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage

# Run E2E tests
npm run test:e2e
```

## 📝 Code Style

- Follow the [Next.js Style Guide](https://nextjs.org/docs/pages/building-your-application/configuring/eslint#eslint-config)
- Use TypeScript for all new code
- Write meaningful commit messages following [Conventional Commits](https://www.conventionalcommits.org/)
- Keep components small and focused on a single responsibility
- Use Tailwind CSS for styling

## 🚀 Submitting a Pull Request

1. **Create a feature branch** from `main`:

   ```bash
   git checkout -b feature/amazing-feature
   ```

2. **Make your changes** and write tests for new functionality

3. **Run the test suite** to ensure everything passes

4. **Commit your changes** with a descriptive message:

   ```bash
   git commit -m "feat: add amazing feature"
   ```

5. **Push your changes** to your fork:

   ```bash
   git push origin feature/amazing-feature
   ```

6. **Open a Pull Request** with a clear title and description

## 🐛 Reporting Bugs

Found a bug? Please open an issue and include:

1. A clear description of the problem
2. Steps to reproduce the issue
3. Expected vs. actual behavior
4. Screenshots if applicable
5. Browser/device information

## 💡 Feature Requests

Have an idea for a new feature? Open an issue and describe:

1. What you'd like to see
2. Why this would be valuable
3. Any examples or references

## 📜 License

By contributing, you agree that your contributions will be licensed under the [MIT License](LICENSE).

## 🙌 Thank You

Your contributions make open source amazing. Thank you for being part of our community! 💜
