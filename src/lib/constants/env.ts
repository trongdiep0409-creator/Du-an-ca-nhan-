/**
 * Environment variable accessor — luôn kiểu an toàn.
 * Phase 1 không có backend server, chỉ dùng Next.js app router.
 */

export const env = {
  get SUPABASE_URL(): string | undefined {
    return process.env.NEXT_PUBLIC_SUPABASE_URL;
  },
  get SUPABASE_ANON_KEY(): string | undefined {
    return process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  },
  get DATABASE_URL(): string | undefined {
    return process.env.DATABASE_URL;
  },
  get APP_URL(): string {
    return process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";
  },
} as const;
