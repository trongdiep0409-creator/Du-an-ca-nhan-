import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PageShell } from "@/components/page-shell";
import { MissionStatus, MissionPriority, missionStatusLabels, missionPriorityLabels } from "@/lib/constants/status";
import { Plus, ClipboardCheck, Calendar } from "lucide-react";

const missions = [
  { id: "1", title: "Xây dựng trang Portfolio", status: MissionStatus.IN_PROGRESS, priority: MissionPriority.HIGH, due: "2024-08-20", skill: "React.js" },
  { id: "2", title: "Học PostgreSQL & Prisma", status: MissionStatus.IN_PROGRESS, priority: MissionPriority.HIGH, due: "2024-08-25", skill: "PostgreSQL" },
  { id: "3", title: "Nộp dự án Next.js", status: MissionStatus.TO_DO, priority: MissionPriority.MEDIUM, due: "2024-08-30", skill: "Next.js" },
  { id: "4", title: "Phỏng vấn công ty ABC", status: MissionStatus.TO_DO, priority: MissionPriority.HIGH, due: "2024-09-01", skill: "Interview" },
];

const priorityColors: Record<MissionPriority, string> = {
  LOW: "bg-blue-100 text-blue-800",
  MEDIUM: "bg-orange-100 text-orange-800",
  HIGH: "bg-red-100 text-red-800",
};

export default function MissionsPage() {
  return (
    <PageShell
      title="Nhiệm vụ"
      description="Quản lý tất cả nhiệm vụ và công việc"
      action={
        <Link href="/missions/new">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Thêm nhiệm vụ
          </Button>
        </Link>
      }
    >
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ClipboardCheck className="h-5 w-5" />
            Danh sách nhiệm vụ
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {missions.map((m) => (
              <Link key={m.id} href={`/missions/${m.id}`}>
                <div className="group rounded-md border p-4 transition-colors hover:bg-accent">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <p className="font-medium group-hover:text-primary">{m.title}</p>
                      <p className="text-sm text-muted-foreground">Kỹ năng: {m.skill}</p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        <span>Hạn: {m.due}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className={priorityColors[m.priority]}>
                        {missionPriorityLabels[m.priority as MissionPriority]}
                      </Badge>
                      <Badge variant={m.status === MissionStatus.COMPLETED ? "success" : m.status === MissionStatus.IN_PROGRESS ? "ai" : "outline"}>
                        {missionStatusLabels[m.status as MissionStatus]}
                      </Badge>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>
    </PageShell>
  );
}
