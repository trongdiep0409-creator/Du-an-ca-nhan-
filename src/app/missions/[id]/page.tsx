import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PageShell } from "@/components/page-shell";
import { MissionStatus, MissionPriority, missionStatusLabels, missionPriorityLabels } from "@/lib/constants/status";
import { ChevronLeft, Calendar, Tag } from "lucide-react";

const mission = {
  id: "1",
  title: "Xây dựng trang Portfolio",
  description: "Xây dựng trang web cá nhân sử dụng Next.js 15, Tailwind CSS, và deploy lên Vercel.",
  status: MissionStatus.IN_PROGRESS,
  priority: MissionPriority.HIGH,
  dueDate: "2024-08-20",
  skills: ["React.js", "Next.js", "TypeScript"],
};

export default function MissionDetailPage() {
  return (
    <PageShell
      title={mission.title}
      action={
        <Link href="/missions">
          <Button variant="ghost" size="sm">
            <ChevronLeft className="h-4 w-4" />
            Quay lại
          </Button>
        </Link>
      }
    >
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Tag className="h-5 w-5" />
            Chi tiết nhiệm vụ
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">{mission.description}</p>
          <div className="flex items-center gap-2">
            <Badge variant={mission.status === MissionStatus.COMPLETED ? "success" : mission.status === MissionStatus.IN_PROGRESS ? "ai" : "outline"}>
              {missionStatusLabels[mission.status as MissionStatus]}
            </Badge>
            <Badge variant="outline">
              {missionPriorityLabels[mission.priority as MissionPriority]}
            </Badge>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>Hạn: {mission.dueDate}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {mission.skills.map((skill) => (
              <Badge key={skill} variant="secondary">{skill}</Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </PageShell>
  );
}
