import { BarChart3, BookOpen, Bot, CalendarDays, ClipboardCheck, FileText, FolderKanban, GraduationCap, LayoutDashboard, Lightbulb, ListTodo, Map, Rocket, ScrollText, Settings, Target, User, type LucideIcon } from "lucide-react";

export interface NavItem {
  title: string;
  href: string;
  icon: LucideIcon;
}

export interface NavGroup {
  label: string;
  items: NavItem[];
}

export const mainNav: NavGroup[] = [
  {
    label: "HÔM NAY",
    items: [
      { title: "Tổng quan", href: "/", icon: LayoutDashboard },
      { title: "Hôm nay", href: "/today", icon: CalendarDays },
      { title: "Kế hoạch tuần", href: "/week", icon: ListTodo },
    ],
  },
  {
    label: "PHÁT TRIỂN",
    items: [
      { title: "Lộ trình", href: "/roadmap", icon: Map },
      { title: "Kỹ năng", href: "/skills", icon: GraduationCap },
      { title: "Học tập", href: "/learning", icon: BookOpen },
      { title: "Kiến thức", href: "/knowledge", icon: Lightbulb },
    ],
  },
  {
    label: "CÔNG VIỆC",
    items: [
      { title: "Nhiệm vụ", href: "/missions", icon: ClipboardCheck },
      { title: "Dự án", href: "/projects", icon: FolderKanban },
      { title: "Bằng chứng", href: "/evidence", icon: FileText },
    ],
  },
  {
    label: "PHÂN TÍCH & AI",
    items: [
      { title: "Phân tích", href: "/analytics", icon: BarChart3 },
      { title: "AI Mentor", href: "/ai-mentor", icon: Bot },
      { title: "Đánh giá", href: "/reviews", icon: ScrollText },
    ],
  },
  {
    label: "HỆ THỐNG",
    items: [
      { title: "Hồ sơ nghề nghiệp", href: "/profile", icon: User },
      { title: "Cài đặt", href: "/settings", icon: Settings },
    ],
  },
];

/** Mobile bottom navigation (5 items max) */
export const mobileNav: NavItem[] = [
  { title: "Hôm nay", href: "/today", icon: Target },
  { title: "Nhiệm vụ", href: "/missions", icon: ClipboardCheck },
  { title: "AI", href: "/ai-mentor", icon: Bot },
  { title: "Phân tích", href: "/analytics", icon: BarChart3 },
  { title: "Thêm", href: "", icon: Rocket },
];

/** Remaining items shown inside "Thêm" more sheet on mobile */
export const mobileMoreItems: NavItem[] = [
  { title: "Tổng quan", href: "/", icon: LayoutDashboard },
  { title: "Kế hoạch tuần", href: "/week", icon: ListTodo },
  { title: "Lộ trình", href: "/roadmap", icon: Map },
  { title: "Kỹ năng", href: "/skills", icon: GraduationCap },
  { title: "Học tập", href: "/learning", icon: BookOpen },
  { title: "Kiến thức", href: "/knowledge", icon: Lightbulb },
  { title: "Dự án", href: "/projects", icon: FolderKanban },
  { title: "Bằng chứng", href: "/evidence", icon: FileText },
  { title: "Đánh giá", href: "/reviews", icon: ScrollText },
  { title: "Hồ sơ nghề nghiệp", href: "/profile", icon: User },
  { title: "Cài đặt", href: "/settings", icon: Settings },
];