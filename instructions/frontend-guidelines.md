# KissMINT Bubble - Frontend Development Guidelines

## Overview

This document establishes coding standards, patterns, and best practices for frontend development on the KissMINT Bubble project. It focuses on **how to write code** rather than project structure or requirements.

## 🎯 Core Development Principles

### 1. Performance First

- **Target**: 60fps animations on mobile devices
- **Bundle Size**: Keep initial bundle under 500KB
- **Real-time Updates**: Balance accuracy with performance (30s intervals)

### 2. Type Safety

- **Strict TypeScript**: No `any` types allowed
- **Runtime Validation**: Use Zod for API responses
- **Component Props**: Always define interfaces

### 3. Accessibility by Default

- **WCAG 2.1 AA**: Minimum compliance standard
- **Reduced Motion**: Always provide alternatives
- **Screen Readers**: Test with NVDA/VoiceOver

## 📝 Code Style Standards

### TypeScript Conventions

```typescript
// ✅ Good: Strict typing with descriptive interfaces
interface BubbleComponentProps {
  balance: bigint;
  nftCount: number;
  rank: BubbleRank;
  onRankChange?: (newRank: BubbleRank) => void;
}

// ❌ Bad: Using any or loose typing
interface BadProps {
  data: any;
  callback: Function;
}

// ✅ Good: Utility types for cleaner code
type BubbleUpdatePayload = Pick<Bubble, "id" | "size" | "rank">;
type OptionalBubbleProps = Partial<BubbleComponentProps>;

// ✅ Good: Discriminated unions for state
type LoadingState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: BubbleData }
  | { status: "error"; error: string };
```

### Component Patterns

```typescript
// ✅ Good: Component structure pattern
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ComponentProps {
  // Props interface
}

export const ComponentName = ({ prop1, prop2 }: ComponentProps) => {
  // 1. Hooks (custom hooks first, then React hooks)
  const customData = useCustomHook(prop1);
  const [localState, setLocalState] = useState(initialValue);

  // 2. Computed values
  const computedValue = useMemo(() => {
    return expensiveCalculation(prop1, prop2);
  }, [prop1, prop2]);

  // 3. Event handlers
  const handleClick = useCallback(() => {
    // Handler logic
  }, [dependency]);

  // 4. Effects (if needed)
  useEffect(() => {
    // Effect logic
  }, [dependencies]);

  // 5. Early returns
  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorDisplay error={error} />;

  // 6. Render
  return (
    <motion.div className={cn("base-classes", additionalClasses)}>
      {children}
    </motion.div>
  );
};

// 7. Default export
export default ComponentName;
```

### Custom Hook Patterns

```typescript
// ✅ Good: Custom hook with clear return type
interface UseEffectiveBalanceReturn {
  tokenBalance: bigint;
  nftValue: bigint;
  effectiveBalance: bigint;
  isLoading: boolean;
  error: Error | null;
}

export const useEffectiveBalance = (
  addresses: string[],
  nftCount: number
): UseEffectiveBalanceReturn => {
  // Hook implementation
  return {
    tokenBalance,
    nftValue,
    effectiveBalance,
    isLoading,
    error,
  };
};

// ✅ Good: Hook with configuration options
interface UseBubbleAnimationOptions {
  autoPlay?: boolean;
  duration?: number;
  easing?: string;
}

export const useBubbleAnimation = (options: UseBubbleAnimationOptions = {}) => {
  const { autoPlay = true, duration = 2000, easing = "easeOut" } = options;
  // Implementation
};
```

## 🎨 Styling Guidelines

### TailwindCSS Best Practices

```typescript
// ✅ Good: Use cn() utility for conditional classes
import { cn } from '@/lib/utils'

const buttonClasses = cn(
  // Base classes
  "px-4 py-2 rounded-lg font-medium transition-colors",
  // Conditional classes
  variant === 'primary' && "bg-blue-500 text-white hover:bg-blue-600",
  variant === 'secondary' && "bg-gray-200 text-gray-900 hover:bg-gray-300",
  isDisabled && "opacity-50 cursor-not-allowed",
  className // Allow prop override
)

// ✅ Good: Bubble-specific utility classes
const bubbleClasses = cn(
  "bubble-base", // Defined in globals.css
  `bubble-${rank}`, // Dynamic rank class
  size > 100 && "bubble-large",
  isAnimating && "bubble-floating"
)

// ❌ Bad: Inline styles for dynamic values that could be classes
<div style={{ backgroundColor: rankColor, width: size }} />

// ✅ Good: CSS custom properties for dynamic values
<div
  className="bubble-container"
  style={{
    '--bubble-color': rankColor,
    '--bubble-size': `${size}px`
  }}
/>
```

### CSS Custom Properties

```css
/* globals.css - Bubble system variables */
:root {
  /* Bubble Colors */
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

  /* Animation Timings */
  --bubble-transition-fast: 300ms;
  --bubble-transition-normal: 600ms;
  --bubble-transition-slow: 1200ms;
}

/* Bubble utility classes */
.bubble-base {
  border-radius: 50%;
  position: relative;
  transition: all var(--bubble-transition-normal) ease-out;
  background: radial-gradient(
    circle at 30% 30%,
    color-mix(in srgb, var(--bubble-color) 80%, white),
    var(--bubble-color)
  );
  box-shadow: 0 0 20px var(--bubble-glow), inset -10px -10px 20px rgba(0, 0, 0, 0.1);
}

.bubble-floating {
  animation: bubble-float 6s ease-in-out infinite;
}

@keyframes bubble-float {
  0%,
  100% {
    transform: translateY(0px) translateX(0px);
  }
  25% {
    transform: translateY(-10px) translateX(5px);
  }
  50% {
    transform: translateY(-5px) translateX(-8px);
  }
  75% {
    transform: translateY(-15px) translateX(3px);
  }
}
```

## 🎭 Animation Standards

### Framer Motion Patterns

```typescript
// ✅ Good: Reusable animation variants
export const bubbleVariants = {
  initial: {
    scale: 0,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
  hover: {
    scale: 1.05,
    transition: { duration: 0.2 },
  },
  tap: {
    scale: 0.95,
    transition: { duration: 0.1 },
  },
};

// ✅ Good: Performance-optimized animations
const BubbleComponent = () => {
  return (
    <motion.div
      variants={bubbleVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      whileTap="tap"
      layout // Enable layout animations
      layoutId="bubble-main" // For shared element transitions
    >
      {content}
    </motion.div>
  );
};

// ✅ Good: Conditional animations based on user preferences
const useReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) =>
      setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return prefersReducedMotion;
};

// Usage in component
const AnimatedBubble = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      animate={prefersReducedMotion ? {} : { y: [-5, 5, -5] }}
      transition={prefersReducedMotion ? {} : { duration: 4, repeat: Infinity }}
    >
      {content}
    </motion.div>
  );
};
```

## 🔗 Web3 Integration Patterns

### Wagmi Hook Usage

```typescript
// ✅ Good: Error handling and loading states
export const useTokenBalance = (address: string) => {
  const {
    data: balance,
    isLoading,
    error,
    refetch,
  } = useBalance({
    address: address as `0x${string}`,
    token: GLICO_TOKEN_ADDRESS,
    watch: true, // Real-time updates
    enabled: !!address,
    refetchInterval: 30_000, // 30 seconds
    staleTime: 10_000, // Consider data stale after 10 seconds
  });

  // Transform to app-specific format
  const formattedBalance = useMemo(() => {
    if (!balance?.value) return 0n;
    return balance.value;
  }, [balance?.value]);

  return {
    balance: formattedBalance,
    isLoading,
    error,
    refetch,
  };
};

// ✅ Good: Multi-chain aggregation pattern
export const useMultiChainBalance = (addresses: string[]) => {
  const queries = useQueries({
    queries: addresses.flatMap((address) =>
      SUPPORTED_CHAINS.map((chain) => ({
        queryKey: ["balance", address, chain.id],
        queryFn: () => fetchBalanceForChain(address, chain.id),
        enabled: !!address,
        staleTime: 30_000,
      }))
    ),
  });

  const aggregatedBalance = useMemo(() => {
    return queries.reduce((total, query) => {
      if (query.data?.success) {
        return total + query.data.balance;
      }
      return total;
    }, 0n);
  }, [queries]);

  const isLoading = queries.some((q) => q.isLoading);
  const hasErrors = queries.some((q) => q.error);

  return { aggregatedBalance, isLoading, hasErrors };
};
```

### Error Handling Patterns

```typescript
// ✅ Good: Specific error handling for Web3
export const useWeb3ErrorHandler = () => {
  const handleError = useCallback((error: unknown) => {
    if (error instanceof Error) {
      // Wagmi/Viem specific errors
      if (error.message.includes("User rejected")) {
        toast.info("Transaction cancelled by user");
        return;
      }

      if (error.message.includes("insufficient funds")) {
        toast.error("Insufficient funds for transaction");
        return;
      }

      // Network errors
      if (error.message.includes("network")) {
        toast.error("Network error. Please check your connection.");
        return;
      }
    }

    // Generic fallback
    toast.error("An unexpected error occurred");
    console.error("Web3 Error:", error);
  }, []);

  return { handleError };
};
```

## 🔄 Real-time Update Patterns

### Supabase Real-time Integration

```typescript
// ✅ Good: Real-time leaderboard updates
export const useRealtimeLeaderboard = () => {
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initial fetch
    const fetchInitialData = async () => {
      const { data, error } = await supabase
        .from("leaderboard")
        .select("*")
        .order("effective_balance", { ascending: false })
        .limit(100);

      if (data && !error) {
        setLeaderboard(data);
      }
      setIsLoading(false);
    };

    fetchInitialData();

    // Set up real-time subscription
    const subscription = supabase
      .channel("leaderboard-updates")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "leaderboard",
        },
        (payload) => {
          setLeaderboard((current) => {
            switch (payload.eventType) {
              case "INSERT":
                return [...current, payload.new as LeaderboardEntry]
                  .sort((a, b) =>
                    Number(b.effective_balance - a.effective_balance)
                  )
                  .slice(0, 100);

              case "UPDATE":
                return current
                  .map((entry) =>
                    entry.id === payload.new.id
                      ? { ...entry, ...payload.new }
                      : entry
                  )
                  .sort((a, b) =>
                    Number(b.effective_balance - a.effective_balance)
                  );

              case "DELETE":
                return current.filter((entry) => entry.id !== payload.old.id);

              default:
                return current;
            }
          });
        }
      )
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return { leaderboard, isLoading };
};
```

## 🧪 Testing Patterns

### Component Testing

```typescript
// ✅ Good: Comprehensive component testing
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe, toHaveNoViolations } from "jest-axe";
import { GlicoBubble } from "./GlicoBubble";

expect.extend(toHaveNoViolations);

// Test wrapper with providers
const renderWithProviders = (ui: React.ReactElement) => {
  return render(
    <QueryClientProvider client={testQueryClient}>
      <WagmiProvider config={testWagmiConfig}>{ui}</WagmiProvider>
    </QueryClientProvider>
  );
};

describe("GlicoBubble", () => {
  const defaultProps = {
    balance: 1000000000000000000n, // 1 token
    nftCount: 0,
    rank: "silver" as const,
    size: 100,
  };

  it("renders with correct rank styling", () => {
    renderWithProviders(<GlicoBubble {...defaultProps} />);

    const bubble = screen.getByRole("button", { name: /bubble/i });
    expect(bubble).toHaveClass("bubble-silver");
  });

  it("handles effective balance calculation correctly", () => {
    const propsWithNFTs = { ...defaultProps, nftCount: 2 };
    renderWithProviders(<GlicoBubble {...propsWithNFTs} />);

    // Should show effective balance including NFT values
    expect(screen.getByText(/2\.0/)).toBeInTheDocument(); // 1 + (2 * 0.5)
  });

  it("meets accessibility standards", async () => {
    const { container } = renderWithProviders(
      <GlicoBubble {...defaultProps} />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("handles user interactions correctly", async () => {
    const user = userEvent.setup();
    const mockClick = vi.fn();

    renderWithProviders(
      <GlicoBubble {...defaultProps} onBubbleClick={mockClick} />
    );

    const bubble = screen.getByRole("button");
    await user.click(bubble);

    expect(mockClick).toHaveBeenCalledTimes(1);
  });

  it("animates rank changes properly", async () => {
    const { rerender } = renderWithProviders(<GlicoBubble {...defaultProps} />);

    // Change rank and verify animation
    rerender(<GlicoBubble {...defaultProps} rank="gold" />);

    await waitFor(() => {
      const bubble = screen.getByRole("button");
      expect(bubble).toHaveClass("bubble-gold");
    });
  });
});
```

### Hook Testing

```typescript
// ✅ Good: Hook testing with proper setup
import { renderHook, waitFor } from "@testing-library/react";
import { useEffectiveBalance } from "./use-effective-balance";

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <WagmiProvider config={testConfig}>
    <QueryClientProvider client={testQueryClient}>
      {children}
    </QueryClientProvider>
  </WagmiProvider>
);

describe("useEffectiveBalance", () => {
  it("calculates effective balance correctly", async () => {
    const { result } = renderHook(() => useEffectiveBalance(["0x123"], 2), {
      wrapper,
    });

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });

    // Verify calculation: tokenBalance + (nftCount * 500 GLICO)
    expect(result.current.effectiveBalance).toBe(
      result.current.tokenBalance + 2n * parseEther("500")
    );
  });
});
```

## 🚨 Error Handling & Loading States

### Error Boundary Pattern

```typescript
// ✅ Good: Bubble-specific error boundary
export class BubbleErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log to error tracking service
    console.error("Bubble component error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center p-4 text-center">
          <div className="space-y-3">
            <div className="w-16 h-16 mx-auto bg-red-100 rounded-full flex items-center justify-center">
              <AlertTriangle className="w-8 h-8 text-red-500" />
            </div>
            <h3 className="font-medium text-gray-900">Bubble Error</h3>
            <p className="text-sm text-gray-600">
              Something went wrong with the bubble visualization.
            </p>
            <button
              onClick={() => this.setState({ hasError: false, error: null })}
              className="btn-primary"
            >
              Try Again
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
```

### Loading State Patterns

```typescript
// ✅ Good: Contextual loading states
export const BubbleWithLoading = ({ address }: { address: string }) => {
  const { balance, isLoading, error } = useTokenBalance(address);

  if (error) {
    return <BubbleErrorState error={error} />;
  }

  if (isLoading) {
    return (
      <div className="relative">
        {/* Skeleton bubble */}
        <div className="w-24 h-24 rounded-full bg-gray-200 animate-pulse" />
        <div className="absolute inset-0 flex items-center justify-center">
          <Spinner className="w-6 h-6" />
        </div>
      </div>
    );
  }

  return <GlicoBubble balance={balance} />;
};
```

## 🎯 Performance Guidelines

### Optimization Checklist

```typescript
// ✅ Good: Memoization for expensive calculations
const BubbleGrid = ({ bubbles }: { bubbles: Bubble[] }) => {
  const sortedBubbles = useMemo(() => {
    return bubbles
      .sort((a, b) => Number(b.effectiveBalance - a.effectiveBalance))
      .slice(0, 50); // Limit for performance
  }, [bubbles]);

  const renderBubble = useCallback(
    (bubble: Bubble) => <GlicoBubble key={bubble.id} {...bubble} />,
    []
  );

  return (
    <div className="grid grid-cols-auto-fit gap-4">
      {sortedBubbles.map(renderBubble)}
    </div>
  );
};

// ✅ Good: Debounced updates for real-time data
export const useDebouncedBalance = (balance: bigint, delay = 500) => {
  const [debouncedBalance, setDebouncedBalance] = useState(balance);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedBalance(balance);
    }, delay);

    return () => clearTimeout(timer);
  }, [balance, delay]);

  return debouncedBalance;
};
```

This frontend guidelines document focuses specifically on **how to write code** for the KissMINT Bubble project, providing practical patterns and standards without repeating project structure or requirements information.
