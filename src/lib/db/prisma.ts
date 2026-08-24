/// Server-only Prisma client singleton.
///
/// Phase 2 foundation: this module must NEVER be imported from client
/// components.  It deliberately does NOT return `(null as unknown as
/// PrismaClient)` — mis-configuration fails clearly instead of pretending
/// a client exists.
///
/// Usage:
///   import { getPrisma } from "@/lib/db/prisma";
///   const prisma = getPrisma();   // throws if DATABASE_URL is missing
import { PrismaClient } from "@prisma/client";

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

/**
 * Lazily create / reuse a PrismaClient instance.
 *
 * @throws Error("DATABASE_URL is not configured …") when DATABASE_URL
 *   is not set — failing honestly rather than silently returning null.
 */
export function getPrisma(): PrismaClient {
  if (!process.env.DATABASE_URL) {
    throw new Error(
      "DATABASE_URL chưa được cấu hình. Vui lòng thiết lập biến môi trường DATABASE_URL trước khi sử dụng Prisma."
    );
  }

  if (process.env.NODE_ENV === "development" && global.prisma) {
    return global.prisma;
  }

  const client = new PrismaClient();

  if (process.env.NODE_ENV === "development") {
    global.prisma = client;
  }

  return client;
}
