import { z } from "zod";
import { ProjectStatus } from "@/lib/constants/status";

export const projectSchema = z.object({
  id: z.string().uuid().optional(),
  title: z.string().min(3, "Tên dự án phải có ít nhất 3 ký tự"),
  description: z.string().optional(),
  status: z.nativeEnum(ProjectStatus).default(ProjectStatus.PLANNING),
});

export const createProjectSchema = projectSchema.omit({ id: true });
export const updateProjectSchema = projectSchema.partial();

export type Project = z.infer<typeof projectSchema>;
export type CreateProjectInput = z.infer<typeof createProjectSchema>;
export type UpdateProjectInput = z.infer<typeof updateProjectSchema>;
