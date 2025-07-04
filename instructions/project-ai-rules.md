# KissMINT Bubble: Project Workspace Rules

## Project Overview

KissMINT Bubble is a real-time wallet balance visualization platform built with Next.js 14, TypeScript, and TailwindCSS that displays users' cryptocurrency holdings as animated bubbles through the Farcaster social media platform. The application uses Farcaster authentication, integrates with multi-chain blockchain networks for balance aggregation, and implements a weekly NFT rewards system for users demonstrating balance growth.

## 🔄 Project Awareness & Context

- **Always read project documents** at the start of conversations:
  - `project-requirements.md` - Core functionality and specifications
  - `project-structure.md` - Architecture and file organization
  - `project-tasks.md` - Implementation phases and current priorities
  - `frontend-guidelines.md` - React patterns and component standards
- **Check task phases** before implementing features:
  - Phase 1-2: Core bubble functionality (CRITICAL)
  - Phase 3: NFT rewards system (LOWER PRIORITY - only after PMF validation)
- **Use consistent naming conventions** from project structure document
- **Reference bubble-specific terminology** consistently throughout codebase

## Bubble-Specific Development Guidelines

### Visualization-First Principles

1. **Visualization-First Approach**: Prioritize smooth, responsive bubble animations and real-time updates over other considerations.
2. **Performance Optimization**: Optimize for 60fps bubble animations and minimal balance update latency.
3. **Real-time Responsiveness**: Ensure balance changes reflect immediately in bubble size and color transitions.
4. **Mobile-First Design**: Ensure bubbles render correctly across mobile, tablet, and desktop with appropriate scaling.
5. **Accessibility Compliance**: Provide reduced motion options and proper ARIA labels for bubble visualizations.

### Bubble Animation Guidelines

1. **Smooth Transitions**: All bubble size and color changes must use smooth, eased transitions via Framer Motion.
2. **Physics-Based Movement**: Implement realistic floating animations with figure-8 or sine wave patterns.
3. **Performance Constraints**: Maintain 60fps even with multiple animated bubbles on screen.
4. **GPU Acceleration**: Use `transform` and `opacity` properties for hardware acceleration.
5. **State Preservation**: Maintain animation state during component re-renders and balance updates.

### KissMINT Bubble UI/UX Guidelines

1. **Bubble Interface**:

   - Central bubble as the primary focal point with rank-based coloring
   - Clear effective balance display (tokens + NFT values)
   - Smooth size transitions when balance changes across chains
   - Hover states with subtle scale and glow effects

2. **Responsive Design**:

   - Mobile: Single large bubble with touch-friendly interactions
   - Tablet: Grid layout with medium-sized bubbles
   - Desktop: Complex layouts with multiple bubble sizes and leaderboards

3. **Animation Philosophy**:

   - Subtle idle animations (floating, gentle pulsing)
   - Dramatic animations for rank changes and milestones
   - Immediate feedback for balance updates across connected wallets
   - Smooth entrance/exit animations for bubble appearance

4. **Color System**:
   - Rank-based color progression: Mint Green → Bubblegum Pink → Grape Bubble → Orange Burst → Golden Honey
   - Smooth color transitions between ranks with glow effects
   - High contrast ratios for accessibility compliance
   - Consistent brand colors across bubble and UI elements

### KissMINT Bubble-Specific Styling

1. **TailwindCSS Extensions**: Leverage custom bubble-specific utility classes and animations defined in config.
2. **CSS Custom Properties**: Use CSS variables for dynamic bubble sizing and coloring based on rank.
3. **Framer Motion Integration**: Implement complex animations using Framer Motion's layout animations and spring physics.
4. **SVG Components**: Use SVG for crisp bubble rendering at all sizes with proper gradients and effects.

### KissMINT Bubble React Patterns

1. **Custom Animation Hooks**: Extract bubble animation logic into reusable hooks (`useBubbleAnimation`, `useEffectiveBalance`).
2. **Real-time State Management**: Use Zustand for bubble state with Supabase real-time subscriptions for live updates.
3. **Performance Optimization**: Implement React.memo and useCallback optimization for bubble components to prevent unnecessary re-renders.
4. **Error Boundaries**: Wrap bubble components in error boundaries for graceful degradation when animations fail.

### Multi-Chain & Wallet Integration

1. **Multi-Wallet Support**: Support connection to multiple wallets simultaneously via Rainbow Kit.
2. **Multi-Chain Balance Aggregation**: Aggregate balances across Base, Ethereum, Polygon, and Arbitrum networks.
3. **Real-time Balance Updates**: Use Wagmi's watch mode for automatic balance updates with 30-second intervals.
4. **Effective Balance Calculation**: Always calculate `tokenBalance + (nftCount × 500 $GLICO)` for bubble sizing.
5. **Error Handling**: Gracefully handle network errors, connection failures, and timeout issues.
6. **Gas Optimization**: Minimize unnecessary blockchain calls and cache results appropriately.

### Farcaster Integration

1. **MiniKit Integration**: Leverage Farcaster MiniKit for seamless Mini App experience within Farcaster clients.
2. **Frame Sharing**: Generate dynamic OG images showing bubble visualizations with current rank and balance.
3. **Social Features**: Enable sharing of bubble achievements and rank progressions to Farcaster feeds.
4. **Authentication**: Use Farcaster Auth Kit for user identity and profile management.

### Database & Real-time Features

1. **Supabase Integration**: Use Supabase for user profiles, balance history, and real-time leaderboard updates.
2. **Real-time Subscriptions**: Implement live leaderboard updates and bubble synchronization across users.
3. **Data Optimization**: Efficiently query and cache large datasets for optimal performance.
4. **Schema Design**: Follow normalized database design patterns for scalability.

### NFT System Guidelines (Phase 3 - Lower Priority)

1. **Mint.club Integration**: Create ERC1155 NFTs as child tokens of $GLICO with flat 500 $GLICO pricing.
2. **Weekly Eligibility**: Implement Friday midnight GMT snapshots and Saturday-Sunday mint windows.
3. **Growth Verification**: Verify net positive balance growth over 7-day periods for NFT eligibility.
4. **Manual Process**: Account for manual minting and transfer workflow until Mint.club automation available.
5. **Effective Balance**: Always include NFT values in bubble calculations to maintain rank after purchases.

### Testing Requirements

1. **Bubble Animation Testing**: Test bubble animations across different devices and performance profiles.
2. **Real-time Testing**: Verify real-time balance updates work correctly under various network conditions.
3. **Multi-wallet Testing**: Test with multiple connected wallets and cross-chain balance changes.
4. **Performance Testing**: Ensure smooth performance with many animated bubbles on screen.
5. **Accessibility Testing**: Test with screen readers and reduced motion preferences using jest-axe.

## 🧱 Code Structure & Modularity

- **Never create a file longer than 500 lines of code.** Split bubble components into smaller, focused modules.
- **Organize code by feature**: Group bubble, wallet, NFT, and frame components separately.
- **Use barrel exports**: Include `index.ts` files in component directories for clean imports.
- **Separate concerns**: Keep animation logic in hooks, business logic in utils, and presentation in components.

## 🧪 Testing & Reliability

- **Always create Vitest unit tests** for new bubble components and hooks.
- **Include accessibility tests** using jest-axe for all UI components.
- **Test animation behavior** including smooth transitions and performance.
- **Mock external dependencies** (Wagmi, Supabase, Mint.club) in tests.
- **Tests should live in `__tests__` folders** next to components or in dedicated `/tests` directory.
  - Include at least:
    - 1 test for expected bubble behavior
    - 1 test for edge cases (zero balance, network errors)
    - 1 test for accessibility compliance
    - 1 test for animation performance

## ✅ Task Completion & Phase Management

- **Check current phase** before implementing features:
  - Phase 1-2: Focus on core bubble functionality and frames
  - Phase 3: Only implement NFT features after PMF validation
- **Mark completed tasks** in `project-tasks.md` immediately after finishing them.
- **Respect priority levels**: CRITICAL > HIGH > MEDIUM > LOW
- **Add discovered tasks** to appropriate phase sections in project tasks.

## 📎 Style & Conventions

- **Use TypeScript** as the primary language with strict mode enabled.
- **No explicit any**: Follow typescript-eslint rules for type safety.
- **Use Next.js 14** with App Router for all routing and API endpoints.
- **Framer Motion**: Use for all bubble animations and transitions.
- **Component naming**: Use PascalCase for components (`GlicoBubble.tsx`).
- **Hook naming**: Use camelCase with `use` prefix (`useBubbleState.ts`).
- **Utility naming**: Use camelCase for utility functions (`bubbleUtils.ts`).
- **Constants**: Use UPPER_SNAKE_CASE for constants (`BUBBLE_RANKS`).

### Bubble-Specific Code Examples

```typescript
// Example: Bubble component structure
interface GlicoBubbleProps {
  balance: bigint;
  nftCount: number;
  rank: BubbleRank;
  size: number;
  className?: string;
  onBubbleClick?: () => void;
}

const GlicoBubble = ({
  balance,
  nftCount,
  rank,
  size,
  className,
  onBubbleClick,
}: GlicoBubbleProps) => {
  const { animationProps, isAnimating } = useBubbleAnimation({ rank, size });
  const effectiveBalance = useMemo(
    () => balance + BigInt(nftCount) * parseEther("500"),
    [balance, nftCount]
  );

  return (
    <motion.div
      className={cn("bubble-container", `bubble-${rank}`, className)}
      {...animationProps}
      onClick={onBubbleClick}
    >
      {/* Bubble content */}
    </motion.div>
  );
};
```

## Bubble Component Reference

### Core Components

- **GlicoBubble**: Main animated bubble component with rank-based styling
- **BubbleContainer**: Physics container for multiple bubbles
- **BubbleRankBadge**: Visual rank indicator with progression
- **EffectiveBalanceDisplay**: Shows token + NFT value breakdown
- **BubbleGrid**: Responsive layout for multiple bubble displays
- **BubbleShareFrame**: Farcaster Frame component for social sharing
- **WalletConnectionPanel**: Multi-wallet management interface
- **LeaderboardBubble**: Specialized bubble for leaderboard display

### Custom Hooks Reference

- **useBubbleState**: Core bubble state management with real-time updates
- **useEffectiveBalance**: Token + NFT balance calculation and caching
- **useBubbleAnimation**: Framer Motion animation controls and variants
- **useMultiWalletBalance**: Cross-chain balance aggregation
- **useWeeklySnapshot**: NFT eligibility tracking (Phase 3)
- **useLeaderboard**: Real-time leaderboard data with Supabase subscriptions

### Style Reference

Bubble-specific CSS custom properties:

```css
:root {
  /* Bubble Rank Colors */
  --bubble-mint-green: #3dffc0;
  --bubble-bubblegum-pink: #ff6eb3;
  --bubble-grape-bubble: #9d4edd;
  --bubble-orange-burst: #ff8500;
  --bubble-golden-honey: #ffd700;

  /* Bubble Glow Effects */
  --bubble-glow-mint: rgba(61, 255, 192, 0.3);
  --bubble-glow-pink: rgba(255, 110, 179, 0.3);
  --bubble-glow-grape: rgba(157, 78, 221, 0.4);
  --bubble-glow-orange: rgba(255, 133, 0, 0.4);
  --bubble-glow-gold: rgba(255, 215, 0, 0.5);

  /* Animation Properties */
  --bubble-transition-fast: 0.3s;
  --bubble-transition-medium: 0.6s;
  --bubble-transition-slow: 1.2s;
  --bubble-float-distance: 10px;
  --bubble-float-duration: 4s;
}
```

### Key Utilities Reference

- **bubbleUtils.ts**: Core bubble calculation and ranking utilities
- **effectiveBalance.ts**: Token + NFT balance aggregation functions
- **animationUtils.ts**: Framer Motion animation configurations
- **balanceAggregation.ts**: Multi-chain balance monitoring
- **frameUtils.ts**: Farcaster Frame generation utilities
- **eligibilityUtils.ts**: NFT mint eligibility verification (Phase 3)

### Bubble Terminology Reference

- **Effective Balance**: Total value including tokens + (NFT count × 500 $GLICO)
- **Bubble Rank**: Tier based on effective balance (Mint Green → Golden Honey)
- **Multi-Chain Balance**: Aggregated token values across Base, Ethereum, Polygon, Arbitrum
- **Real-time Updates**: Live balance monitoring with 30-second refresh intervals
- **Frame Sharing**: Dynamic Farcaster Frame generation for social media sharing
- **Weekly Snapshot**: Friday midnight GMT balance capture for NFT eligibility
- **Growth Verification**: Net positive balance change over 7-day periods

## 🧠 AI Behavior Rules

- **Never assume missing context about bubble mechanics** - ask questions about rank calculations, animation requirements, or NFT integration.
- **Always verify Framer Motion and Wagmi syntax** - these are critical dependencies for bubble animations and Web3 integration.
- **Confirm multi-chain balance calculations** before implementing aggregation logic.
- **Check phase priorities** - avoid implementing NFT features (Phase 3) unless explicitly requested.
- **Never delete existing bubble animation code** unless explicitly instructed or part of a specific task.
- **Always include accessibility considerations** for bubble visualizations and interactions.
- **Verify effective balance calculations** include both token and NFT values correctly.

## 🖥️ Development Environment

- **Operating System**: macOS and Ubuntu Linux support
- **IDE**: VSCode with extensions (ESLint, Prettier, Tailwind CSS IntelliSense, TypeScript)
- **Package Manager**: npm/yarn
- **Version Control**: Git with GitHub
- **Testing Framework**: Vitest with React Testing Library and jest-axe for accessibility
- **Linting**: ESLint + Prettier for code formatting
- **Animation Testing**: Framer Motion DevTools for debugging animations
- **Web3 Testing**: Wagmi test utilities for blockchain integration testing
