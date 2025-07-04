# KissMINT Bubble - Streamlined Implementation Plan

## GitHub Management Strategy (Solo Developer)

### **Simplified Approach: Issues + Labels**

For solo development with Windsurf LLM:

- **Issues**: One per feature/component
- **Labels**: `priority:critical/high/medium/low`, `area:bubble/auth/ui/api/nft`, `size:S/M/L`
- **Milestones**: Core (Phase 1), Frames (Phase 2), NFTs (Phase 3), Launch (Phase 4)
- **Projects Board**: Simple Kanban with To Do, In Progress, Review, Done

### **Windsurf LLM Rules Integration**

- Each issue becomes a prompt for the LLM
- Include testing requirements in issue description
- LLM builds feature + tests in single session
- Focus on getting working code fast, iterate later
- **NFT features marked as lower priority after core PMF validation**

---

## Core Implementation Tasks

### **Phase 1: Essential Foundation & Core Bubble System (Weeks 1-3)**

#### _Priority: CRITICAL - Must validate PMF before NFT development_

#### **Issue #1: Project Setup & Config**

**Size**: S | **Area**: Setup | **Priority**: Critical

- Next.js 14 + TypeScript + Tailwind + Vitest setup
- Vercel deployment pipeline
- Environment variables structure
- Testing framework (Vitest + RTL + Playwright + jest-axe)

#### **Issue #2: Farcaster Auth + MiniKit**

**Size**: M | **Area**: Auth | **Priority**: Critical

- MiniKit integration with Farcaster auth
- User context provider
- Basic auth UI components
- Auth state persistence

#### **Issue #3: Supabase Integration**

**Size**: M | **Area**: Backend | **Priority**: Critical

- Database schema + RLS policies
- TypeScript types generation
- Basic CRUD operations
- Connection testing

#### **Issue #4: Multi-Wallet Connection System**

**Size**: L | **Area**: Wallet | **Priority**: Critical

- Rainbow Kit integration for multi-wallet support
- Wagmi integration for multi-chain balance tracking
- Real-time balance monitoring with useBalance
- Balance aggregation logic across chains

#### **Issue #5: Core Bubble Calculation Engine**

**Size**: M | **Area**: Bubble | **Priority**: Critical

- Multi-chain balance aggregation utilities
- Bubble rank calculation system (Bronze → Diamond)
- **Basic effective balance calculation (tokens only for Phase 1)**
- Balance conversion utilities for different tokens

#### **Issue #6: Animated Bubble Component**

**Size**: L | **Area**: Bubble | **Priority**: Critical

- GlicoBubble SVG component with rank-based styling
- Framer Motion animation integration
- Responsive sizing for mobile/tablet/desktop
- Performance optimization for 60fps

#### **Issue #7: Real-time Balance Integration**

**Size**: L | **Area**: Integration | **Priority**: Critical

- Connect balance calculations to bubble visualization
- Real-time updates trigger bubble size/color changes
- Loading states and error handling
- Optimistic updates for smooth UX

### **Phase 2: Frame Integration & Viral Growth (Week 4)**

#### _Priority: HIGH - Essential for user acquisition_

#### **Issue #8: Dynamic OG Image Generation**

**Size**: L | **Area**: API | **Priority**: High

- Vercel OG + Satori setup
- Dynamic bubble frame images with rank colors
- TV static background integration
- Proper caching headers

#### **Issue #9: Farcaster Frame Sharing**

**Size**: M | **Area**: Social | **Priority**: High

- Share button components
- Frame metadata generation
- Deep linking integration
- Frame engagement analytics

#### **Issue #10: Basic Leaderboard System**

**Size**: M | **Area**: Social | **Priority**: High

- Real-time leaderboard with Supabase subscriptions
- Ranking calculation and display
- Time-based filtering (daily, weekly, monthly)
- Responsive design for mobile

### **Phase 3: NFT Rewards System (Weeks 5-7)**

#### _Priority: MEDIUM - Value-add feature dependent on core PMF validation_

**⚠️ IMPORTANT: Only implement Phase 3 if Phase 1-2 shows strong PMF indicators:**

- 100+ DAU with 30%+ weekly retention
- 50+ daily frame shares with positive community feedback
- Stable technical performance and user engagement

#### **Issue #11: Effective Balance System Enhancement**

**Size**: M | **Area**: Bubble | **Priority**: Medium

- **Update effective balance calculation: `tokenBalance + (nftCount × 500 $GLICO)`**
- NFT value contribution to bubble size and rank
- Database schema updates for NFT tracking
- UI updates to show effective vs token balance

#### **Issue #12: Weekly Snapshot System**

**Size**: L | **Area**: Backend | **Priority**: Medium

- Cron job for Friday 00:00 GMT balance snapshots
- Balance growth calculation and verification
- Database schema for snapshot storage
- Error handling and retry logic

#### **Issue #13: Mint.club NFT Integration**

**Size**: XL | **Area**: Blockchain | **Priority**: Medium

- ERC1155 NFT creation as $GLICO child tokens via Mint.club
- Flat bonding curve configuration (500 $GLICO constant price)
- Manual minting workflow documentation
- **Integration pending Mint.club whitelist feature**

#### **Issue #14: NFT Eligibility & Mint UI**

**Size**: M | **Area**: UI | **Priority**: Medium

- Eligibility checker showing growth over past week
- Mint window countdown timer (Saturday-Sunday)
- NFT collection gallery with owned tokens
- Growth visualization charts

#### **Issue #15: Automated Whitelist Management**

**Size**: L | **Area**: Backend | **Priority**: Medium
_⚠️ Dependent on Mint.club whitelist feature completion_

- Cron job to update Mint.club whitelist every Friday
- Automated whitelist closure on Sunday 23:59 GMT
- Webhook integration for mint notifications
- Manual override capabilities for edge cases

### **Phase 4: Polish & Production Launch (Week 8)**

#### _Priority: HIGH - Essential for successful launch_

#### **Issue #16: Performance Optimization**

**Size**: M | **Area**: Performance | **Priority**: High

- Lighthouse score optimization (>90 all metrics)
- Bundle size optimization and code splitting
- Animation performance tuning for mobile devices
- Database query optimization

#### **Issue #17: Accessibility & Testing**

**Size**: M | **Area**: Quality | **Priority**: High

- WCAG 2.1 AA compliance with jest-axe testing
- Comprehensive test suite (unit + integration + E2E)
- Cross-browser compatibility testing
- Mobile device testing across screen sizes

#### **Issue #18: Production Deployment**

**Size**: S | **Area**: DevOps | **Priority**: High

- Production environment setup
- Error tracking and monitoring
- Analytics integration
- Launch preparation and rollback procedures

---

## Implementation Strategy & Risk Management

### **Core-First Development Approach**

1. **Weeks 1-3**: Build and validate core bubble functionality
2. **Week 4**: Add sharing features for viral growth
3. **PMF Validation Checkpoint**: Assess user engagement and community response
4. **Weeks 5-7**: Implement NFT rewards (only if PMF validated)
5. **Week 8**: Production polish and launch

### **PMF Validation Criteria**

Before proceeding to Phase 3 (NFT system), validate:

**User Engagement Metrics:**

- **Daily Active Users**: 100+ DAU by week 4
- **Retention Rate**: 30%+ weekly retention
- **Session Duration**: Average >2 minutes per session

**Social Growth Metrics:**

- **Frame Shares**: 50+ daily frame shares
- **Viral Coefficient**: 1.2+ new users per existing user
- **Community Response**: Positive feedback and feature requests

**Technical Performance:**

- **Load Time**: <2 seconds on mobile
- **Animation Performance**: Stable 60fps on mid-range devices
- **Error Rate**: <1% of user sessions

### **External Dependency Management**

#### **Mint.club Integration Timeline**

- **Current Status**:
  - ✅ Child token system available
  - ✅ Manual minting process confirmed
  - ⏳ Whitelist feature requested (pending implementation)
- **Risk Mitigation**:
  - Manual whitelist management as fallback
  - NFT system can launch with manual processes
  - Automation can be added when Mint.club features available

#### **Dependency Decision Tree**

```plaintext
Core Bubble System (Phase 1-2) → PMF Validation
├── Strong PMF Indicators → Proceed to NFT System (Phase 3)
│   ├── Mint.club Whitelist Ready → Full Automation
│   └── Whitelist Not Ready → Manual Process + Future Automation
└── Weak PMF Indicators → Focus on Core Improvements
    └── Delay NFT System Until PMF Achieved
```

### **Technical Architecture Decisions**

#### **Database Schema Priorities**

```sql
-- Phase 1: Core tables
users, wallets, balance_snapshots_basic, leaderboard_entries

-- Phase 2: Social features
frame_analytics, user_shares

-- Phase 3: NFT system (conditional)
weekly_snapshots, mint_eligibility, user_nfts, effective_balance_history
```

#### **Effective Balance Implementation Strategy**

```typescript
// Phase 1: Token-only balance
const calculateBasicBalance = (tokenBalance: bigint): bigint => {
  return tokenBalance;
};

// Phase 3: Enhanced with NFT values
const calculateEffectiveBalance = (
  tokenBalance: bigint,
  nftCount: number
): bigint => {
  const NFT_VALUE = parseEther("500"); // 500 $GLICO per NFT
  return tokenBalance + BigInt(nftCount) * NFT_VALUE;
};
```

## Success Metrics by Phase

### **Phase 1-2 Success Criteria (Core + Frames)**

- Core bubble visualization works smoothly across devices
- Multi-wallet integration stable with <30s balance updates
- Frame sharing achieves 50+ daily shares
- User retention >30% at 7 days
- Community engagement and positive feedback

### **Phase 3 Success Criteria (NFT System)**

#### _Only measured if Phase 3 is implemented_

- 60%+ of active users show weekly balance growth
- 80%+ of eligible users participate in NFT minting
- NFT integration doesn't impact core performance
- Effective balance calculations accurate and real-time

### **Launch Success Criteria (All Phases)**

- 500+ registered users by month 1
- 100+ DAU sustained for 2+ weeks
- <1% error rate across all features
- Community requests for additional features

## Risk Assessment & Mitigation

### **Technical Risks**

- **Multi-chain Integration**: Potential RPC rate limits → Implement caching and fallbacks
- **Real-time Performance**: WebSocket connection issues → HTTP polling fallback
- **Mobile Performance**: Animation performance on low-end devices → Reduced motion options

### **Business Risks**

- **PMF Uncertainty**: Core features may not resonate → Focus on iterative improvement
- **External Dependencies**: Mint.club timeline delays → Manual processes as backup
- **Competition**: Similar apps launching → Emphasize unique bubble visualization

### **Timeline Risks**

- **Scope Creep**: NFT features expanding beyond timeline → Strict phase boundaries
- **Technical Complexity**: Integration challenges → Simplify initially, enhance later
- **Testing Overhead**: Comprehensive testing requirements → Automate where possible

This updated implementation plan prioritizes core value delivery and PMF validation before investing in advanced NFT features, ensuring sustainable growth and user engagement while maintaining flexibility for future enhancements.
