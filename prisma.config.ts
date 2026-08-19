import { defineConfig } from "prisma/config";

// Config Prisma cho Titan OS — sử dụng .env.local để chứa credentials
// Không commit secrets vào repository
export default defineConfig({
  schema: "prisma/schema.prisma",
});
