/**
 * Các type chung dùng trong ứng dụng.
 * Phase 2 — Technical Foundation chỉ định nghĩa interface cơ bản.
 * Dữ liệu thực sẽ được fetch từ Supabase + Prisma khi có backend.
 */

export interface User {
  id: string;
  email: string;
  name: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface Mission {
  id: string;
  title: string;
  description: string | null;
  status: string;
  priority: string;
  dueDate: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface Skill {
  id: string;
  name: string;
  category: string;
  level: string;
  targetLevel: string;
  timeSpentMinutes?: number;
}

export interface Project {
  id: string;
  title: string;
  description: string | null;
  status: string;
  createdAt: string;
  updatedAt: string;
}

export interface Evidence {
  id: string;
  type: string;
  title: string;
  description: string | null;
  url: string | null;
  status: string;
  createdAt: string;
  updatedAt: string;
}

export interface Review {
  id: string;
  evidenceId: string;
  status: string;
  comment: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface AdaptiveInfo {
  state: "AHEAD" | "ON_TRACK" | "AT_RISK" | "BLOCKED";
  reason: string;
  recommendation: string;
}
