<div align="center">
  <h1>KissMINT Bubble</h1>
  <p>Show off your on-chain status with an animated bubble that grows with your wallet balance and NFT collection.</p>
  
  [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyour-username%2Fkissmint-bubble)
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  [![Twitter Follow](https://img.shields.io/twitter/follow/kissmintbubble?style=social)](https://twitter.com/kissmintbubble)
</div>

## ✨ Features

- **Multi-Chain Support**: Connect multiple wallets across different blockchains
- **Animated Bubble**: Beautiful, responsive bubble that grows with your on-chain status
- **Farcaster Integration**: Built with Farcaster MiniKit for social features
- **Real-time Updates**: Watch your bubble evolve with your on-chain activity
- **NFT Integration**: Show off your NFT collection and its impact on your status
- **Shareable**: Generate beautiful shareable images of your bubble

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Supabase account
- Vercel account (for deployment)

### Local Development

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/kissmint-bubble.git
   cd kissmint-bubble
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   ```

   Update the values in `.env.local` with your Supabase credentials and other required API keys.

4. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🧪 Testing

Run the test suite with:

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

## 🛠 Tech Stack

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type checking
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Supabase](https://supabase.com/) - Backend & Authentication
- [Farcaster MiniKit](https://github.com/farcasterxyz/minikit) - Farcaster integration
- [RainbowKit](https://www.rainbowkit.com/) - Wallet connection
- [Wagmi](https://wagmi.sh/) - Ethereum hooks
- [Vitest](https://vitest.dev/) - Testing framework
- [Playwright](https://playwright.dev/) - E2E testing

## 📦 Deployment

### Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-docs) from the creators of Next.js.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyour-username%2Fkissmint-bubble)

### Environment Variables

Make sure to set the following environment variables in your Vercel project:

- `NEXT_PUBLIC_SUPABASE_URL` - Your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Your Supabase anon/public key
- `NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID` - WalletConnect project ID
- `NEXT_PUBLIC_APP_URL` - Your app's URL (e.g., https://your-app.vercel.app)

## 🤝 Contributing

Contributions are welcome! Please read our [contributing guidelines](CONTRIBUTING.md) to get started.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Farcaster](https://farcaster.xyz/) for the amazing social protocol
- [Vercel](https://vercel.com/) for the awesome hosting and deployment experience
- [Supabase](https://supabase.com/) for the incredible open-source backend
- All the amazing open-source projects that made this possible

## More Supabase examples

- [Next.js Subscription Payments Starter](https://github.com/vercel/nextjs-subscription-payments)
- [Cookie-based Auth and the Next.js 13 App Router (free course)](https://youtube.com/playlist?list=PL5S4mPUpp4OtMhpnp93EFSo42iQ40XjbF)
- [Supabase Auth and the Next.js App Router](https://github.com/supabase/supabase/tree/master/examples/auth/nextjs)
