# KissMINT Bubble - Project Requirements Document (PRD)

## Project Overview

**Project Name:** KissMINT Bubble  
**Platform:** Farcaster Mini App (via Coinbase MiniKit)  
**Tech Stack:** Next.js 14+, TypeScript, Supabase, Vercel  
**Target Launch:** Q2 2025

### Vision Statement

KissMINT Bubble is a community-driven Farcaster Mini App that gamifies $GLICO token holding through visual "bubble" mechanics. Users see their bubbles grow based on token holdings and collectible NFTs, creating social engagement around token loyalty and community participation.

### Core Concept

- **Bubble Inflation:** Token holdings directly correlate to bubble size
- **Bubble Deflation:** Selling tokens reduces bubble size
- **NFT Collectibles:** Special weekly NFT rewards that boost bubble size
- **Weekly Growth Rewards:** NFTs earned for demonstrating balance growth
- **Social Competition:** Leaderboards and community features

## Functional Requirements

### 1. Authentication & User Management

#### 1.1 Farcaster Integration

- **Requirement:** Users authenticate via Farcaster using MiniKit's built-in auth
- **Implementation:** Leverage `@coinbase/onchainkit/minikit` authentication hooks
- **User Data:** Store Farcaster FID, username, profile image, connected wallets

#### 1.2 Wallet Connection

- **Requirement:** Connect multiple Ethereum wallets for token tracking
- **Implementation:** MiniKit's wallet connection with Base network support
- **Wallet Management:** Users can add/remove wallets, set primary wallet

#### 1.3 Profile System

- **Requirement:** User profiles showing bubble status, NFT collections, rankings
- **Data Storage:** Supabase for user profiles and preferences
- **Privacy Controls:** Users can set bubble visibility (public/private)

### 2. Token Tracking & Bubble Mechanics

#### 2.1 $GLICO Balance Tracking

- **Data Source:** Wagmi `useBalance` hook for real-time $GLICO balances
- **Update Frequency:** Real-time updates via Wagmi's `watch: true` parameter (updates on every block)
- **Multi-Wallet Support:** Aggregate balances across connected wallets using multiple Wagmi hooks
- **Historical Tracking:** Store balance history in Supabase for trend analysis
- **Fallback Support:** Mint.club SDK `getBalanceOf()` as backup data source if needed

#### 2.2 Effective Balance Calculation _(Updated)_

- **Formula:** `effectiveBalance = tokenBalance + (nftCount × 500 $GLICO)`
- **NFT Value Contribution:** Each NFT adds 500 $GLICO equivalent to total holdings
- **Bubble Ranking:** Based on effective balance, not just token holdings
- **Real-time Updates:** Recalculated whenever tokens or NFTs change

#### 2.3 Bubble Ranking & Visualization System

**Rank Thresholds & Gum-Themed Colors:**

| Rank | Threshold | Color Name     | Hex Code  | Description               |
| ---- | --------- | -------------- | --------- | ------------------------- |
| 1    | < 500K    | Mint Green     | `#3DFFC0` | Fresh mint starter bubble |
| 2    | 500K - 1M | Bubblegum Pink | `#FF6EB3` | Classic bubblegum pink    |
| 3    | 1M - 5M   | Grape Bubble   | `#9D4EDD` | Deep purple grape gum     |
| 4    | 5M - 10M  | Orange Burst   | `#FF8500` | Tangy orange citrus gum   |
| 5    | 10M+      | Golden Honey   | `#FFD700` | Premium golden honey gum  |

**Visual Scaling System:**

- **Size Range:** 20px (minimum) → 25% screen width (maximum at 10M+ tokens)
- **Scaling Formula:** Logarithmic scaling for better visual distribution
- **NFT Bonuses:** Each NFT collection adds percentage-based bonus to bubble size
- **Responsive Design:** Adapts to different screen sizes while maintaining proportions

#### 2.4 Bubble Animation & Behavior

- **Floating Motion:** Slow, gentle drift with figure-8 or sine wave patterns
- **Movement Speed:** 15-30 seconds for full screen traversal
- **Size Transitions:** 800ms spring animation when balance changes
- **Color Transitions:** 500ms smooth gradient transition between ranks
- **Interactive Effects:** Gentle bounce on tap, hover scale increase
- **Visual Effects:** Radial gradients, subtle glow, gentle pulse breathing

### 3. NFT Collection System _(Updated - Lower Priority)_

#### 3.1 Weekly NFT Rewards System

- **NFT Type:** ERC1155 tokens created as Mint.club child tokens of $GLICO
- **Base Asset:** $GLICO token (bonding curve foundation)
- **Mint Cost:** 500 $GLICO per NFT (flat bonding curve pricing)
- **Value Contribution:** Each NFT contributes 500 $GLICO to effective balance
- **Weekly Collections:** New themed collection each week

#### 3.2 Eligibility & Minting Schedule

- **Snapshot Schedule:** Every Friday at 00:00 GMT
- **Mint Window:** Saturday 00:00 GMT to Sunday 23:59 GMT (48 hours)
- **Eligibility Criteria:** Net positive $GLICO balance growth over past 7 days
- **Growth Verification:** Compare current vs. previous Friday snapshot

#### 3.3 Manual Minting Process _(Implementation Dependency)_

- **Mint.club Integration:** Manual NFT creation and transfer required
- **Whitelist System:** Pending Mint.club whitelist feature implementation
- **Automated Management:** Cron jobs for snapshot taking and whitelist updates
- **Fallback:** Manual whitelist management if automation unavailable

#### 3.4 NFT Integration Benefits

- **Effective Balance:** 500 $GLICO value per NFT maintains bubble size after purchase
- **Example:** User with 50k $GLICO buys NFT → 49.5k tokens + 500 NFT value = 50k effective balance
- **Rank Preservation:** NFT purchases don't reduce bubble rank
- **Collection Showcase:** Display owned NFTs in user profiles

### 4. Social Features

#### 4.1 Leaderboards

- **Global Rankings:** Top bubble sizes across all users based on effective balance
- **Time-Based:** Daily, weekly, monthly leaderboards
- **Category Rankings:** Separate rankings for different NFT collections
- **Neighborhood:** Show user's position relative to nearby ranks

#### 4.2 Community Interaction

- **Bubble Comparison:** Users can compare bubbles with friends
- **Achievement System:** Badges for milestones (first NFT, holding streaks, etc.)
- **Social Sharing:** Share bubble status to Farcaster feeds
- **Community Challenges:** Periodic events with special rewards

#### 4.3 Farcaster Integration & Dynamic Frame Sharing

- **Frame Generation:** Dynamic OG images using Vercel OG (Satori + resvg-js)
- **Bubble Status Frames:** Real-time bubble visualization in shareable frames
- **Viral Mechanics:** Users share their bubble rank/size to encourage others
- **Dynamic Content:** Frame images update based on current effective balance and rank
- **Cache Strategy:** Smart caching with `max-age` headers for optimal performance
- **Social Discovery:** Frame embeds in Farcaster feeds for organic growth

### 5. Admin & Management Features

#### 5.1 NFT Management _(Lower Priority)_

- **Weekly Collection Creation:** Admin interface for new NFT themes
- **Metadata Management:** Upload and manage NFT images/descriptions
- **Bonus Configuration:** Set bubble bonus values for each NFT type
- **Supply Management:** Control NFT supply and distribution

#### 5.2 Community Events

- **Event Creation:** Admin tools for community challenges
- **Reward Distribution:** Automated NFT distribution for event winners
- **Leaderboard Management:** Special event leaderboards
- **Announcement System:** Push notifications for major updates

#### 5.3 Analytics Dashboard

- **User Metrics:** Active users, retention rates, bubble size distributions
- **Token Metrics:** $GLICO holding patterns, trading activity impact
- **NFT Metrics:** Collection completion rates, minting participation
- **Engagement Metrics:** Mini App usage, social sharing rates

## Technical Requirements

### 6. Architecture & Performance

#### 6.1 Frontend (Next.js + MiniKit + Framer Motion)

- **Framework:** Next.js 14+ with App Router
- **Language:** TypeScript for type safety
- **Mini App SDK:** Coinbase MiniKit for Farcaster integration
- **Animation Library:** Framer Motion for bubble animations and UI transitions
- **Styling:** Tailwind CSS for responsive design
- **State Management:** React Context + custom hooks
- **Graphics Engine:** SVG with Framer Motion for optimal mobile performance

#### 6.2 Backend (Supabase)

- **Database:** PostgreSQL via Supabase
- **Real-time:** Supabase subscriptions for live updates
- **Authentication:** Hybrid Farcaster + Supabase auth
- **File Storage:** Supabase Storage for NFT metadata
- **Edge Functions:** Supabase Edge Functions for complex operations

#### 6.3 Blockchain Integration

- **Network:** Base (Ethereum L2)
- **Token Tracking:** Mint.club API integration
- **Wallet Integration:** MiniKit's built-in wallet connectors
- **NFT Standards:** ERC1155 via Mint.club child tokens

#### 6.4 Hosting & Deployment

- **Platform:** Vercel for optimal Next.js deployment
- **CDN:** Vercel Edge Network for global performance
- **Cache:** Upstash Redis for session management and caching
- **Environment:** Automatic Supabase integration via Vercel

### 7. Database Schema _(Updated)_

#### 7.1 Core Tables

```sql
-- Users table
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    farcaster_fid BIGINT UNIQUE NOT NULL,
    username TEXT NOT NULL,
    display_name TEXT,
    profile_image_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    bubble_visibility TEXT DEFAULT 'public' CHECK (bubble_visibility IN ('public', 'private')),
    primary_wallet_address TEXT
);

-- Wallets table
CREATE TABLE wallets (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    address TEXT NOT NULL,
    is_primary BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Balance snapshots (for NFT eligibility)
CREATE TABLE balance_snapshots (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    wallet_address TEXT NOT NULL,
    token_balance NUMERIC NOT NULL,
    nft_count INTEGER DEFAULT 0,
    effective_balance NUMERIC NOT NULL,
    snapshot_date DATE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(user_id, snapshot_date)
);

-- NFT eligibility tracking
CREATE TABLE mint_eligibility (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    week_start_date DATE NOT NULL,
    previous_balance NUMERIC NOT NULL,
    current_balance NUMERIC NOT NULL,
    balance_growth NUMERIC NOT NULL,
    is_eligible BOOLEAN DEFAULT FALSE,
    has_minted BOOLEAN DEFAULT FALSE,
    mint_transaction_hash TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(user_id, week_start_date)
);

-- User NFT ownership
CREATE TABLE user_nfts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    nft_contract_address TEXT NOT NULL,
    token_id BIGINT NOT NULL,
    mint_week DATE NOT NULL,
    effective_value NUMERIC DEFAULT 500000000000000000, -- 500 $GLICO in wei
    acquired_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### 8. Development Phases _(Updated Priority)_

#### Phase 1: Core Functionality (Weeks 1-3) - **CRITICAL**

- Project setup and Farcaster authentication
- Multi-wallet connection and balance aggregation
- Core bubble visualization with real-time updates
- Basic leaderboard and social features

#### Phase 2: Frame Integration (Week 4) - **HIGH PRIORITY**

- Dynamic OG image generation for viral sharing
- Farcaster Frame components and sharing mechanisms
- Frame analytics and engagement tracking

#### Phase 3: NFT System (Weeks 5-7) - **LOWER PRIORITY**

##### Only implement if core shows PMF

- Weekly snapshot system and eligibility tracking
- Mint.club integration for NFT creation
- Automated whitelist management (pending Mint.club feature)
- NFT collection UI and effective balance integration

#### Phase 4: Polish & Launch (Week 8) - **HIGH PRIORITY**

- Performance optimization and accessibility
- Production deployment and monitoring
- Launch preparation and community engagement

## Success Metrics & PMF Validation

### Core Functionality Metrics (Weeks 1-4)

- **Daily Active Users:** Target 100+ DAU by week 4
- **Frame Shares:** Target 50+ frame shares per day
- **Retention:** 30% user return rate within 7 days
- **Performance:** <3s load time, >90 Lighthouse score

### NFT System Decision Criteria

Continue with Phase 3 NFT implementation only if:

- Core functionality achieves target metrics
- Positive user feedback and engagement
- Technical stability and performance benchmarks met
- Community interest in rewards system validated

This updated PRD prioritizes core bubble functionality for PMF validation before implementing the NFT rewards system, ensuring sustainable user engagement while preparing for enhanced monetization features.
