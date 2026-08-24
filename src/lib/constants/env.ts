/// Backward-compatible env accessor.
///
/// Phase 2: all real validation lives in @/lib/validation/env.ts.
/// This module is kept as a thin convenience wrapper so existing imports
/// continue to resolve.  It reads NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY
/// (the renamed variable) and falls back gracefully.
export const env = {
  get SUPABASE_URL(): string | undefined {
    return process.env.NEXT_PUBLIC_SUPABASE_URL;
  },
  get SUPABASE_PUBLISHABLE_KEY(): string | undefined {
    return process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
  },
  get DATABASE_URL(): string | undefined {
    return process.env.DATABASE_URL;
  },
  get DIRECT_URL(): string | undefined {
    return process.env.DIRECT_URL;
  },
  get APP_URL(): string {
    return process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";
  },
} as const;
