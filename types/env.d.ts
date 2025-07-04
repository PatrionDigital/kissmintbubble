namespace NodeJS {
  export interface ProcessEnv {
    // Supabase
    NEXT_PUBLIC_SUPABASE_URL: string;
    NEXT_PUBLIC_SUPABASE_ANON_KEY: string;
    NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY: string;
    
    // App
    NEXT_PUBLIC_APP_URL: string;
    NEXT_PUBLIC_APP_ENV: 'development' | 'staging' | 'production';
    
    // Farcaster
    NEXT_PUBLIC_FARCASTER_DEVELOPER_MNEMONIC?: string;
    NEXT_PUBLIC_FARCASTER_DEVELOPER_FID?: string;
    
    // Wallet
    NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID: string;
    
    // Feature Flags
    NEXT_PUBLIC_ENABLE_ANALYTICS: string;
    NEXT_PUBLIC_ENABLE_MAINTENANCE_MODE: string;
    
    // API Keys
    NEXT_PUBLIC_ALCHEMY_API_KEY?: string;
    NEXT_PUBLIC_INFURA_API_KEY?: string;
    NEXT_PUBLIC_ETHERSCAN_API_KEY?: string;
    
    // Rate Limiting
    RATE_LIMIT_WINDOW_MS?: string;
    RATE_LIMIT_MAX_REQUESTS?: string;
    
    // CORS
    NEXT_PUBLIC_CORS_ORIGINS?: string;
    
    // Sentry
    NEXT_PUBLIC_SENTRY_DSN?: string;
    NEXT_PUBLIC_SENTRY_ENVIRONMENT?: string;
    
    // Vercel
    VERCEL_URL?: string;
    VERCEL_ENV?: string;
    VERCEL_GIT_COMMIT_SHA?: string;
    
    // Testing
    NODE_ENV?: 'test' | 'development' | 'production';
    TEST_DATABASE_URL?: string;
  }
}
