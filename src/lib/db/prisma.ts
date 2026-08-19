import { PrismaClient } from "@prisma/client";

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

// Singleton pattern để tránh tạo nhiều PrismaClient instances trong dev
export const prisma =
  global.prisma ||
  (process.env.DATABASE_URL
    ? new PrismaClient()
    : // Khi chưa có DATABASE_URL, trả về null để dev và phát triển môi trường local không lỗi
      (null as unknown as PrismaClient));

if (process.env.NODE_ENV === "development" && global.prisma === undefined && process.env.DATABASE_URL) {
  global.prisma = prisma;
}
