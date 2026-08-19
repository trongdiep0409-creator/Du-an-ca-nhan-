import { z } from "zod";
import { EvidenceType, EvidenceStatus } from "@/lib/constants/status";

export const evidenceSchema = z.object({
  id: z.string().uuid().optional(),
  type: z.nativeEnum(EvidenceType),
  title: z.string().min(3, "Tiêu đề bằng chứng phải có ít nhất 3 ký tự"),
  description: z.string().optional(),
  url: z.string().url("URL không hợp lệ").optional().nullable(),
  fileKey: z.string().optional().nullable(),
  status: z.nativeEnum(EvidenceStatus).default(EvidenceStatus.PENDING),
  reviewId: z.string().uuid().optional().nullable(),
});

export const createEvidenceSchema = evidenceSchema.omit({ id: true });
export const updateEvidenceSchema = evidenceSchema.partial();

export type Evidence = z.infer<typeof evidenceSchema>;
export type CreateEvidenceInput = z.infer<typeof createEvidenceSchema>;
export type UpdateEvidenceInput = z.infer<typeof updateEvidenceSchema>;
