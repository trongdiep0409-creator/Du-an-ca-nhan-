/// Environment validation layer (Zod).
///
/// Phase 2 foundation: this is the ONLY env-validation module.
/// All other validation schemas (mission, skill, evidence, project)
/// belong to Phase 3+ and have been removed.
///
/// Separation:
///   - getServerEnv()  → must only be called from server-side code
///     (API routes, server components, server actions).
///   - getClientEnv()  → returns only NEXT_PUBLIC_* vars safe to expose
///     to the browser.
import { z } from "zod";

/// Server-side env schema — may contain secrets (DATABASE_URL, etc.).
const serverEnvSchema = z.object({
  NEXT_PUBLIC_SUPABASE_URL: z.string().url("NEXT_PUBLIC_SUPABASE_URL không hợp lệ"),
  NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY: z.string().optional(),
  NEXT_PUBLIC_APP_URL: z.string().url("NEXT_PUBLIC_APP_URL không hợp lệ"),
  DATABASE_URL: z.string().url("DATABASE_URL không hợp lệ").optional(),
  DIRECT_URL: z.string().url("DIRECT_URL không hợp lệ").optional(),
  NODE_ENV: z.enum(["development", "production", "test", "staging"]).optional(),
});

/// Client-safe env schema — only NEXT_PUBLIC_* variables exposed to browser.
const clientEnvSchema = z.object({
  NEXT_PUBLIC_SUPABASE_URL: z.string().url(),
  NEXT_PUBLIC_APP_URL: z.string().url(),
});

type ServerEnv = z.infer<typeof serverEnvSchema>;
type ClientEnv = z.infer<typeof clientEnvSchema>;

let cachedServerEnv: ServerEnv | null = null;
let cachedClientEnv: ClientEnv | null = null;

/**
 * Validate and return server-only environment variables.
 *
 * Call this only in server contexts (API routes, server components,
 * server actions).  Throws on invalid configuration — fails honestly
 * instead of silently returning partial/default values.
 */
export function getServerEnv(): ServerEnv {
  if (cachedServerEnv) return cachedServerEnv;

  const result = serverEnvSchema.safeParse(process.env);

  if (!result.success) {
    throw new Error(
      `Cấu hình môi trường server không hợp lệ: ${result.error.errors.map((e) => e.message).join(", ")}`
    );
  }

  cachedServerEnv = result.data;
  return cachedServerEnv;
}

/**
 * Validate and return only the client-safe (NEXT_PUBLIC_*) env vars.
 *
 * Safe to call from client components.  Throws if a required public
 * variable is missing or invalid.
 */
export function getClientEnv(): ClientEnv {
  if (cachedClientEnv) return cachedClientEnv;

  const raw: Record<string, string | undefined> = {
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
  };

  const result = clientEnvSchema.safeParse(raw);

  if (!result.success) {
    throw new Error(
      `Cấu hình môi trường client không hợp lệ: ${result.error.errors.map((e) => e.message).join(", ")}`
    );
  }

  cachedClientEnv = result.data;
  return cachedClientEnv;
}

export type { ServerEnv, ClientEnv };
