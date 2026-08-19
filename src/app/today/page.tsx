import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { PageShell } from "@/components/page-shell";
import { CheckSquare, Clock } from "lucide-react";
import { MissionStatus, missionStatusLabels } from "@/lib/constants/status";

const todayTasks = [
  { id: "1", title: "Xây dựng trang Portfolio", desc: "Dự án web cá nhân", status: MissionStatus.COMPLETED, time: "2h" },
  { id: "2", title: "Học React Hooks nâng cao", desc: "Phần 3/5", status: MissionStatus.IN_PROGRESS, time: "1.5h" },
  { id: "3", title: "Soạn tài liệu kỹ năng", desc: "CSS Grid & Flexbox", status: MissionStatus.TO_DO, time: "1h" },
  { id: "4", title: "Nộp bài tập tuần 2", desc: "Khóa học Python tự động hoá", status: MissionStatus.TO_DO, time: "3h" },
];

export default function TodayPage() {
  const completed = todayTasks.filter((t) => t.status === MissionStatus.COMPLETED).length;
  const total = todayTasks.length;

  return (
    <PageShell title="Hôm nay" description="Kế hoạch và nhiệm vụ cho ngày hôm nay">
      <Card>
        <CardHeader>
          <CardTitle>Tiến độ hôm nay</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">
              {completed}/{total} nhiệm vụ hoàn thành
            </span>
            <Progress value={(completed / total) * 100} className="w-32" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckSquare className="h-5 w-5" />
            Danh sách nhiệm vụ
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {todayTasks.map((task) => (
              <div key={task.id} className="flex items-center justify-between rounded-md border p-4">
                <div className="flex items-start gap-3 space-y-1">
                  <input type="checkbox" checked={task.status === MissionStatus.COMPLETED} readOnly className="mt-0.5 h-4 w-4 rounded border-gray-300" />
                  <div>
                    <p className="font-medium">{task.title}</p>
                    <p className="text-sm text-muted-foreground">{task.desc}</p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      <span>{task.time}</span>
                    </div>
                  </div>
                </div>
                <Badge variant={task.status === MissionStatus.COMPLETED ? "success" : "outline"}>
                  {missionStatusLabels[task.status as MissionStatus]}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </PageShell>
  );
}
