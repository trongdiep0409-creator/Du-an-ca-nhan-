/**
 * Các trạng thái và enum dùng trong toàn bộ hệ thống.
 * Nguồn: docs/product/02-information-architecture.md
 */

// Trạng thái nhiệm vụ (Mission)
export enum MissionStatus {
  DRAFT = "DRAFT",
  TO_DO = "TO_DO",
  IN_PROGRESS = "IN_PROGRESS",
  BLOCKED = "BLOCKED",
  COMPLETED = "COMPLETED",
  ARCHIVED = "ARCHIVED",
}

export enum MissionPriority {
  LOW = "LOW",
  MEDIUM = "MEDIUM",
  HIGH = "HIGH",
}

// Trạng thái dự án
export enum ProjectStatus {
  PLANNING = "PLANNING",
  IN_PROGRESS = "IN_PROGRESS",
  ON_HOLD = "ON_HOLD",
  COMPLETED = "COMPLETED",
}

// Trạng thái bằng chứng
export enum EvidenceType {
  LINK = "LINK",
  FILE = "FILE",
  SCREENSHOT = "SCREENSHOT",
  CERTIFICATE = "CERTIFICATE",
  CODE = "CODE",
  NOTE = "NOTE",
}

export enum EvidenceStatus {
  PENDING = "PENDING",
  APPROVED = "APPROVED",
  REJECTED = "REJECTED",
}

// Trạng thái đánh giá
export enum ReviewStatus {
  PENDING = "PENDING",
  PASSED = "PASSED",
  FAILED = "FAILED",
}

// Trạng thái kỹ năng
export enum SkillLevel {
  FUNDAMENTAL_AWARENESS = "FUNDAMENTAL_AWARENESS",
  NOVICE = "NOVICE",
  INTERMEDIATE = "INTERMEDIATE",
  ADVANCED = "ADVANCED",
  EXPERT = "EXPERT",
}

// CSS class mapping cho MissionStatus
export const missionStatusLabels: Record<MissionStatus, string> = {
  DRAFT: "Bản nháp",
  TO_DO: "Chờ làm",
  IN_PROGRESS: "Đang làm",
  BLOCKED: "Chặn",
  COMPLETED: "Hoàn thành",
  ARCHIVED: "Lưu trữ",
};

export const missionPriorityLabels: Record<MissionPriority, string> = {
  LOW: "Thấp",
  MEDIUM: "Trung bình",
  HIGH: "Cao",
};

export const projectStatusLabels: Record<ProjectStatus, string> = {
  PLANNING: "Lên kế hoạch",
  IN_PROGRESS: "Đang thực hiện",
  ON_HOLD: "Tạm dừng",
  COMPLETED: "Hoàn thành",
};

export const evidenceStatusLabels: Record<EvidenceStatus, string> = {
  PENDING: "Chờ duyệt",
  APPROVED: "Đã duyệt",
  REJECTED: "Từ chối",
};

export const skillLevelLabels: Record<SkillLevel, string> = {
  FUNDAMENTAL_AWARENESS: "Nhận thức cơ bản",
  NOVICE: "Mới bắt đầu",
  INTERMEDIATE: "Trung cấp",
  ADVANCED: "Nâng cao",
  EXPERT: "Chuyên gia",
};
