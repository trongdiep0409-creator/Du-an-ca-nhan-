import { z } from "zod";
import { MissionStatus, MissionPriority } from "@/lib/constants/status";

export const missionSchema = z.object({
  id: z.string().uuid().optional(),
  title: z.string().min(3, "Tiêu đề nhiệm vụ phải có ít nhất 3 ký tự"),
  description: z.string().min(1, "Mô tả không được để trống").optional(),
  status: z.nativeEnum(MissionStatus).default(MissionStatus.TO_DO),
  priority: z.nativeEnum(MissionPriority).default(MissionPriority.MEDIUM),
  evidenceId: z.string().uuid().optional().nullable(),
  dueDate: z.coerce.date().optional().nullable(),
  skillIds: z.array(z.string().uuid()).optional().default([]),
  projectId: z.string().uuid().optional().nullable(),
});

export const createMissionSchema = missionSchema.omit({ id: true });
export const updateMissionSchema = missionSchema.partial();

export type Mission = z.infer<typeof missionSchema>;
export type CreateMissionInput = z.infer<typeof createMissionSchema>;
export type UpdateMissionInput = z.infer<typeof updateMissionSchema>;
