import { z } from "zod";
import { SkillLevel } from "@/lib/constants/status";

export const skillSchema = z.object({
  id: z.string().uuid().optional(),
  name: z.string().min(2, "Tên kỹ năng phải có ít nhất 2 ký tự"),
  category: z.string().min(1, "Danh mục không được để trống"),
  level: z.nativeEnum(SkillLevel).default(SkillLevel.FUNDAMENTAL_AWARENESS),
  targetLevel: z.nativeEnum(SkillLevel).default(SkillLevel.EXPERT),
});

export const createSkillSchema = skillSchema.omit({ id: true });
export const updateSkillSchema = skillSchema.partial();

export type Skill = z.infer<typeof skillSchema>;
export type CreateSkillInput = z.infer<typeof createSkillSchema>;
export type UpdateSkillInput = z.infer<typeof updateSkillSchema>;
