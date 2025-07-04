# KissMINT Bubble - Project Structure Document (PSD)

## Overview

This document outlines the complete project structure for KissMINT Bubble, a Farcaster Mini App that gamifies $GLICO token holding through animated bubble visualizations. The structure is designed for Next.js 14+ with TypeScript, optimized for development efficiency and maintainability.

## Root Directory Structure

```plaintext
kissmint-bubble/
├── .env.local                    # Environment variables
├── .env.example                  # Example environment file
├── .gitignore                    # Git ignore rules
├── .eslintrc.json               # ESLint configuration
├── .prettierrc                  # Prettier configuration
├── next.config.js               # Next.js configuration
├── package.json                 # Dependencies and scripts
├── tailwind.config.js           # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
├── vercel.json                  # Vercel deployment config
├── README.md                    # Project documentation
└── docs/                        # Additional documentation
    ├── API.md                   # API documentation
    ├── DEPLOYMENT.md            # Deployment guide
    └── CONTRIBUTING.md          # Contribution guidelines
```

## Source Directory (/src)

```plaintext
src/
├── app/                         # Next.js App Router
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Home page
│   ├── loading.tsx              # Global loading component
│   ├── error.tsx                # Global error component
│   ├── not-found.tsx            # 404 page
│   │
│   ├── mini/                    # Mini App routes
│   │   ├── page.tsx             # Mini App entry point
│   │   ├── layout.tsx           # Mini App layout
│   │   └── bubble/              # Bubble dashboard
│   │       ├── page.tsx         # Main bubble view
│   │       └── leaderboard/     # Leaderboard page
│   │           └── page.tsx
│   │
│   ├── profile/                 # User profile
│   │   ├── page.tsx             # Profile overview
│   │   ├── collection/          # NFT collection view (Phase 3)
│   │   │   └── page.tsx
│   │   └── settings/            # User settings
│   │       └── page.tsx
│   │
│   ├── api/                     # API routes
│   │   ├── auth/                # Authentication endpoints
│   │   ├── bubble/              # Bubble-related APIs
│   │   ├── leaderboard/         # Leaderboard APIs
│   │   ├── balance/             # Multi-chain balance aggregation
│   │   ├── snapshots/           # Weekly snapshot management (Phase 3)
│   │   ├── nft/                 # NFT collection APIs (Phase 3)
│   │   ├── eligibility/         # NFT mint eligibility (Phase 3)
│   │   ├── frame/               # Dynamic Frame image generation
│   │   │   ├── bubble/          # Bubble status frames
│   │   │   │   ├── route.ts     # Dynamic OG image endpoint
│   │   │   │   └── action/      # Frame interaction handler
│   │   │   │       └── route.ts
│   │   │   └── leaderboard/     # Leaderboard frames
│   │   │       └── route.ts
│   │   ├── cron/                # Scheduled jobs (Phase 3)
│   │   │   ├── snapshot/        # Weekly balance snapshots
│   │   │   └── whitelist/       # Mint.club whitelist management
│   │   └── webhooks/            # External webhooks
│   │
│   └── .well-known/             # Mini App manifest
│       └── farcaster.json/
│           └── route.ts
│
├── components/                  # Reusable UI components
│   │
│   ├── bubble/                  # Bubble system components
│   │   ├── GlicoBubble.tsx      # Main bubble component
│   │   ├── BubbleContainer.tsx  # Physics container
│   │   ├── BubbleRankBadge.tsx  # Rank indicator
│   │   ├── BubbleStats.tsx      # Statistics display
│   │   ├── EffectiveBalance.tsx # Token + NFT balance display
│   │   └── index.ts             # Barrel exports
│   │
│   ├── ui/                      # Base UI components
│   │   ├── Button.tsx           # Custom button component
│   │   ├── Card.tsx             # Card container
│   │   ├── Modal.tsx            # Modal component
│   │   ├── LoadingSpinner.tsx   # Loading indicator
│   │   ├── ErrorBoundary.tsx    # Error boundary wrapper
│   │   └── index.ts             # Barrel exports
│   │
│   ├── layout/                  # Layout components
│   │   ├── Header.tsx           # App header
│   │   ├── Footer.tsx           # App footer
│   │   ├── Navigation.tsx       # Navigation menu
│   │   ├── MiniAppLayout.tsx    # Mini App wrapper
│   │   └── index.ts             # Barrel exports
│   │
│   ├── auth/                    # Authentication components
│   │   ├── SignInButton.tsx     # Farcaster sign-in
│   │   ├── WalletConnect.tsx    # Multi-wallet connection
│   │   ├── AuthProvider.tsx     # Auth context provider
│   │   └── index.ts             # Barrel exports
│   │
│   ├── wallet/                  # Wallet management components
│   │   ├── WalletList.tsx       # Connected wallets display
│   │   ├── BalanceMonitor.tsx   # Real-time balance updates
│   │   ├── NetworkSelector.tsx  # Chain switching
│   │   └── index.ts             # Barrel exports
│   │
│   ├── leaderboard/             # Leaderboard components
│   │   ├── LeaderboardTable.tsx # Main leaderboard
│   │   ├── RankingCard.tsx      # Individual ranking
│   │   ├── FilterControls.tsx   # Time period filters
│   │   └── index.ts             # Barrel exports
│   │
│   ├── nft/                     # NFT system components (Phase 3)
│   │   ├── EligibilityChecker.tsx # Weekly eligibility display
│   │   ├── MintCountdown.tsx    # Mint window timer
│   │   ├── NFTGallery.tsx       # NFT collection display
│   │   ├── GrowthChart.tsx      # Balance growth visualization
│   │   ├── WeeklySnapshot.tsx   # Snapshot status display
│   │   └── index.ts             # Barrel exports
│   │
│   └── frames/                  # Farcaster Frame components
│       ├── FrameMeta.tsx        # Frame metadata
│       ├── ShareFrame.tsx       # Shareable frames
│       ├── BubbleFrame.tsx      # Bubble status frame
│       └── index.ts             # Barrel exports
│
├── lib/                         # Core libraries and utilities
│   │
│   ├── bubble/                  # Bubble system logic
│   │   ├── bubbleConfig.ts      # Rank and color definitions
│   │   ├── bubbleAnimations.ts  # Animation variants
│   │   ├── bubbleUtils.ts       # Size calculation helpers
│   │   ├── bubblePhysics.ts     # Movement calculations
│   │   ├── effectiveBalance.ts  # Token + NFT balance logic
│   │   └── types.ts             # TypeScript interfaces
│   │
│   ├── auth/                    # Authentication logic
│   │   ├── farcaster.ts         # Farcaster auth helpers
│   │   ├── wallet.ts            # Wallet connection utils
│   │   └── types.ts             # Auth type definitions
│   │
│   ├── blockchain/              # Blockchain integration
│   │   ├── wagmi.ts             # Wagmi configuration
│   │   ├── contracts.ts         # Contract addresses
│   │   ├── balance.ts           # Multi-chain balance tracking
│   │   ├── aggregation.ts       # Cross-chain balance aggregation
│   │   └── types.ts             # Blockchain types
│   │
│   ├── nft/                     # NFT system logic (Phase 3)
│   │   ├── mintClub.ts          # Mint.club integration
│   │   ├── eligibility.ts       # Growth verification logic
│   │   ├── snapshots.ts         # Weekly snapshot management
│   │   ├── whitelist.ts         # Whitelist management
│   │   └── types.ts             # NFT types
│   │
│   ├── database/                # Database integration
│   │   ├── supabase.ts          # Supabase client
│   │   ├── queries.ts           # Database queries
│   │   ├── mutations.ts         # Database mutations
│   │   ├── snapshots.sql        # Snapshot queries (Phase 3)
│   │   ├── schema.sql           # Database schema
│   │   └── types.ts             # Database types
│   │
│   ├── api/                     # External API integrations
│   │   ├── mint-club.ts         # Mint.club SDK integration
│   │   ├── farcaster-api.ts     # Farcaster API client
│   │   └── types.ts             # API type definitions
│   │
│   └── utils/                   # General utilities
│       ├── format.ts            # Number/date formatting
│       ├── validation.ts        # Input validation
│       ├── storage.ts           # Local storage helpers
│       ├── constants.ts         # App constants
│       └── types.ts             # Shared types
│
├── hooks/                       # Custom React hooks
│   ├── useBalance.ts            # Multi-wallet balance tracking
│   ├── useBubbleState.ts        # Bubble state management
│   ├── useEffectiveBalance.ts   # Token + NFT balance calculation
│   ├── useLeaderboard.ts        # Leaderboard data
│   ├── useNFTCollection.ts      # NFT collection hooks (Phase 3)
│   ├── useEligibility.ts        # NFT mint eligibility (Phase 3)
│   ├── useWeeklySnapshot.ts     # Snapshot tracking (Phase 3)
│   ├── useMiniKit.ts            # MiniKit integration
│   ├── useAnimationFrame.ts     # Animation utilities
│   ├── useLocalStorage.ts       # Local storage hook
│   └── index.ts                 # Barrel exports
│
├── context/                     # React context providers
│   ├── BubbleContext.tsx        # Bubble state context
│   ├── AuthContext.tsx          # Authentication context
│   ├── Web3Context.tsx          # Blockchain context
│   ├── NFTContext.tsx           # NFT system context (Phase 3)
│   ├── SettingsContext.tsx      # User settings context
│   └── index.ts                 # Barrel exports
│
├── styles/                      # Styling files
│   ├── globals.css              # Global CSS styles + KissMINT theme
│   ├── components.css           # Component-specific styles
│   ├── animations.css           # Animation keyframes
│   ├── tv-static.css           # TV static background signature
│   ├── variables.css            # CSS custom properties (KissMINT colors)
│   └── tailwind.css             # Tailwind imports
│
├── types/                       # Global TypeScript types
│   ├── bubble.ts                # Bubble-related types
│   ├── user.ts                  # User-related types
│   ├── nft.ts                   # NFT collection types (Phase 3)
│   ├── api.ts                   # API response types
│   ├── auth.ts                  # Authentication types
│   ├── balance.ts               # Balance and aggregation types
│   └── index.ts                 # Type exports
│
├── constants/                   # Application constants
│   ├── bubble.ts                # Bubble configuration
│   ├── contracts.ts             # Contract addresses
│   ├── nft.ts                   # NFT system constants (Phase 3)
│   ├── api.ts                   # API endpoints
│   └── index.ts                 # Constant exports
│
├── middleware.ts                # Next.js middleware
└── instrumentation.ts           # Observability setup
```

## Public Directory (/public)

```plaintext
public/
├── icons/                       # App icons and favicons
│   ├── icon-192x192.png
│   ├── icon-512x512.png
│   └── favicon.ico
│
├── images/                      # Static images
│   ├── bubble-preview.png       # Bubble preview image
│   ├── tv-static-bg.png         # TV static background texture
│   ├── rank-badges/             # Rank badge images
│   ├── nft-artwork/             # Weekly NFT artwork (Phase 3)
│   └── nft-placeholders/        # NFT placeholder images
│
├── frames/                      # Frame preview images
│   ├── bubble-frame.png
│   └── leaderboard-frame.png
│
├── fonts/                       # Custom fonts for OG generation
│   └── inter-bold.ttf           # Font for dynamic images
│
└── manifest.json                # Web app manifest
```

## Configuration Files

### Environment Variables (.env.local)

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

# Blockchain
NEXT_PUBLIC_GLICO_CONTRACT_ADDRESS=
NEXT_PUBLIC_BASE_RPC_URL=
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=

# APIs
MINT_CLUB_API_KEY=
FARCASTER_API_KEY=

# Mini App
NEXT_PUBLIC_MINI_APP_URL=
MINI_APP_SECRET=

# NFT System (Phase 3)
MINT_CLUB_WHITELIST_API_KEY=
NFT_MINT_COST_GLICO=500

# Analytics (optional)
NEXT_PUBLIC_ANALYTICS_ID=
```

### Package.json Dependencies & Scripts

```json
{
  "dependencies": {
    "@coinbase/onchainkit": "^0.38.latest",
    "@farcaster/frame-sdk": "^0.60.latest",
    "framer-motion": "^11.latest",
    "next": "^14.latest",
    "react": "^18.latest",
    "react-dom": "^18.latest",
    "typescript": "^5.latest",
    "@supabase/supabase-js": "^2.latest",
    "@supabase/ssr": "^0.latest",
    "wagmi": "^2.latest",
    "viem": "^2.latest",
    "@tanstack/react-query": "^5.latest",
    "@vercel/og": "^0.latest",
    "satori": "^0.latest",
    "@upstash/redis": "^1.latest",
    "mint.club": "^2.latest"
  },
  "devDependencies": {
    "tailwindcss": "^3.latest",
    "@types/react": "^18.latest",
    "@types/react-dom": "^18.latest",
    "eslint": "^8.latest",
    "eslint-config-next": "^14.latest",
    "prettier": "^3.latest",

    "vitest": "^1.latest",
    "@testing-library/react": "^14.latest",
    "@testing-library/jest-dom": "^6.latest",
    "@testing-library/user-event": "^14.latest",
    "@playwright/test": "^1.latest",
    "jsdom": "^23.latest",
    "msw": "^2.latest",
    "jest-axe": "^8.latest",
    "@vitejs/plugin-react": "^4.latest",
    "@types/jest-axe": "^3.latest"
  },
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "lint:fix": "next lint --fix",
    "type-check": "tsc --noEmit",

    "test": "vitest",
    "test:watch": "vitest --watch",
    "test:coverage": "vitest --coverage",
    "test:ui": "vitest --ui",
    "test:e2e": "playwright test",
    "test:e2e:ui": "playwright test --ui",
    "test:all": "npm run test:coverage && npm run test:e2e",

    "db:generate": "supabase gen types typescript",
    "db:push": "supabase db push",
    "db:reset": "supabase db reset"
  }
}
```

## Key Architectural Decisions

### Component Organization

- **Barrel Exports**: Each component directory includes an `index.ts` for clean imports
- **Co-location**: Related components grouped by feature (bubble, auth, leaderboard, nft)
- **Separation of Concerns**: Business logic in hooks/lib, presentation in components
- **Phase-Based Development**: NFT components clearly marked for Phase 3 implementation

### State Management Strategy

- **React Context**: Global state (auth, bubble state, settings)
- **Custom Hooks**: Component-level state and side effects
- **Supabase**: Server state and real-time subscriptions
- **Local Storage**: User preferences and cached data
- **Effective Balance**: Central calculation combining tokens + NFT values

### Animation Architecture

- **Framer Motion**: Primary animation library for all bubble animations
- **GPU Acceleration**: Transform3d for smooth mobile performance
- **Reduced Motion**: Respect accessibility preferences
- **Performance Budgets**: 30fps minimum on mid-range devices

### TypeScript Structure

- **Strict Mode**: Enabled for maximum type safety
- **Interface Segregation**: Small, focused interfaces
- **Type Guards**: Runtime type checking for API responses
- **Utility Types**: Leverage TypeScript's utility types for DRY code

### API Layer Design

- **tRPC-style**: Type-safe API routes with Next.js
- **Validation**: Zod schemas for request/response validation
- **Error Handling**: Consistent error response format
- **Rate Limiting**: Prevent API abuse

### Database Schema Strategy

- **Supabase PostgreSQL**: Primary database
- **Row Level Security**: User data protection
- **Real-time Subscriptions**: Live bubble updates
- **Optimized Indexes**: Performance for leaderboard queries
- **NFT Integration**: Effective balance calculations in database

## Development Workflow

### File Naming Conventions

- **Components**: PascalCase (`GlicoBubble.tsx`)
- **Hooks**: camelCase with `use` prefix (`useBubbleState.ts`)
- **Utilities**: camelCase (`bubbleUtils.ts`)
- **Types**: camelCase (`bubble.ts`)
- **Constants**: camelCase (`bubbleConfig.ts`)

### Import Organization

```typescript
// External libraries
import React from "react";
import { motion } from "framer-motion";

// Internal utilities
import { calculateBubbleSize } from "@/lib/bubble/bubbleUtils";
import { BUBBLE_RANKS } from "@/constants/bubble";

// Internal components
import { BubbleRankBadge } from "@/components/bubble";

// Types
import type { BubbleProps } from "@/types/bubble";
```

### Testing Strategy & Requirements

#### Testing Framework Stack

- **Unit Testing:** Vitest with native TypeScript and ESM support
- **Component Testing:** React Testing Library for user-focused testing
- **E2E Testing:** Playwright for cross-browser end-to-end testing
- **API Mocking:** MSW (Mock Service Worker) for realistic API testing
- **Visual Testing:** Playwright's visual comparison for UI regression testing
- **Accessibility:** jest-axe for automated a11y testing

#### Testing Structure

```plaintext
tests/
├── __mocks__/                   # Jest/Vitest mocks
│   ├── wagmi.ts                 # Wagmi mock
│   ├── framer-motion.ts         # Animation mocks
│   ├── supabase.ts              # Database mocks
│   └── mint-club.ts             # Mint.club API mocks (Phase 3)
│
├── setup/                       # Test configuration
│   ├── vitest.setup.ts          # Vitest global setup
│   ├── msw.setup.ts             # MSW server setup
│   └── test-utils.tsx           # Custom render utilities
│
├── unit/                        # Unit tests
│   ├── components/              # Component unit tests
│   │   ├── bubble/
│   │   │   ├── GlicoBubble.test.tsx
│   │   │   ├── BubbleContainer.test.tsx
│   │   │   ├── EffectiveBalance.test.tsx
│   │   │   └── BubbleRankBadge.test.tsx
│   │   ├── nft/                 # NFT component tests (Phase 3)
│   │   │   ├── EligibilityChecker.test.tsx
│   │   │   ├── MintCountdown.test.tsx
│   │   │   └── WeeklySnapshot.test.tsx
│   │   ├── auth/
│   │   └── ui/
│   ├── hooks/                   # Hook unit tests
│   │   ├── useBubbleState.test.ts
│   │   ├── useEffectiveBalance.test.ts
│   │   ├── useBalance.test.ts
│   │   ├── useEligibility.test.ts  # Phase 3
│   │   └── useLeaderboard.test.ts
│   ├── lib/                     # Utility unit tests
│   │   ├── bubble/
│   │   │   ├── bubbleUtils.test.ts
│   │   │   ├── effectiveBalance.test.ts
│   │   │   └── bubblePhysics.test.ts
│   │   ├── nft/                 # NFT logic tests (Phase 3)
│   │   │   ├── eligibility.test.ts
│   │   │   ├── snapshots.test.ts
│   │   │   └── mintClub.test.ts
│   │   └── utils/
│   └── api/                     # API route tests
│       ├── bubble.test.ts
│       ├── balance.test.ts
│       ├── snapshots.test.ts    # Phase 3
│       └── frame.test.ts
│
├── integration/                 # Integration tests
│   ├── bubble-system.test.tsx   # Full bubble system integration
│   ├── effective-balance.test.tsx # Token + NFT balance integration
│   ├── auth-flow.test.tsx       # Authentication integration
│   ├── nft-eligibility.test.tsx # NFT system integration (Phase 3)
│   └── frame-generation.test.tsx # Frame sharing integration
│
├── e2e/                         # End-to-end tests
│   ├── user-journeys/
│   │   ├── first-time-user.spec.ts
│   │   ├── returning-user.spec.ts
│   │   ├── bubble-interaction.spec.ts
│   │   └── nft-minting.spec.ts  # Phase 3
│   ├── mini-app/
│   │   ├── mobile-experience.spec.ts
│   │   └── farcaster-integration.spec.ts
│   └── performance/
│       ├── load-testing.spec.ts
│       └── animation-performance.spec.ts
│
└── fixtures/                    # Test data
    ├── users.json               # Mock user data
    ├── balances.json            # Mock balance data
    ├── nfts.json                # Mock NFT data (Phase 3)
    └── snapshots.json           # Mock snapshot data (Phase 3)
```

### Phase-Based Development Strategy

#### Phase 1: Core Functionality (Weeks 1-3)

**Files/Components to Implement:**

- Core bubble visualization system
- Multi-wallet balance aggregation
- Basic effective balance calculation (tokens only)
- Farcaster authentication and frames

#### Phase 2: Frame Integration (Week 4)

**Files/Components to Implement:**

- Dynamic OG image generation
- Frame sharing components
- Viral growth mechanics

#### Phase 3: NFT System (Weeks 5-7)

**Files/Components to Implement (Lower Priority):**

- NFT-related components in `/components/nft/`
- Weekly snapshot system in `/lib/nft/`
- Eligibility tracking hooks in `/hooks/`
- Mint.club integration
- Updated effective balance calculation including NFTs

#### Phase 4: Polish & Launch (Week 8)

**Files/Components to Implement:**

- Performance optimization
- Accessibility compliance
- Production deployment configuration

## LLM Development Rules for Testing

### Mandatory Testing Requirements

**For EVERY new component, the LLM must:**

1. **Create comprehensive unit tests** covering:

   - All props and state variations
   - User interactions (clicks, hovers, etc.)
   - Error handling and edge cases
   - Accessibility compliance
   - Animation behavior (if applicable)
   - Effective balance calculations (for bubble components)

2. **Write integration tests** for complex components:

   - Multi-component interactions
   - Data flow between components
   - Real API integration (with MSW mocking)
   - State management integration
   - NFT system integration (Phase 3)

3. **Implement E2E tests** for critical user flows:
   - Authentication flows
   - Bubble interaction and animation
   - Effective balance updates
   - Frame sharing functionality
   - NFT eligibility and minting (Phase 3)
   - Mobile responsiveness

### Component Test Template

```typescript
import { render, screen, fireEvent } from "@testing-library/react";
import { expect, describe, it, vi } from "vitest";
import { axe, toHaveNoViolations } from "jest-axe";
import userEvent from "@testing-library/user-event";

// Add jest-axe matcher
expect.extend(toHaveNoViolations);

describe("ComponentName", () => {
  // Required tests for ALL components:

  it("renders without crashing", () => {
    render(<ComponentName />);
    expect(screen.getByRole("...")).toBeInTheDocument();
  });

  it("handles all prop variations correctly", () => {
    // Test all possible prop combinations including NFT-related props
  });

  it("meets accessibility standards", async () => {
    const { container } = render(<ComponentName />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("calculates effective balance correctly", () => {
    // Test token + NFT balance calculations
  });

  it("handles NFT value updates appropriately", () => {
    // Test NFT contribution to effective balance (Phase 3)
  });
});
```

This comprehensive project structure document provides the foundation for building KissMINT Bubble with clear separation between core functionality and NFT features, ensuring efficient development progression and maintainable code architecture.
