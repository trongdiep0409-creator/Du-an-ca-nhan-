import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { PageShell } from "@/components/page-shell";
import { Map, CheckCircle, Circle } from "lucide-react";

const milestones = [
  { id: 1, month: "Tháng 1", title: "Cài đặt môi trường & học Next.js cơ bản", status: "completed", progress: 100 },
  { id: 2, month: "Tháng 2", title: "Xây dựng 3 dự án cá nhân", status: "in-progress", progress: 65 },
  { id: 3, month: "Tháng 3", title: "Học PostgreSQL & Prisma", status: "in-progress", progress: 40 },
  { id: 4, month: "Tháng 4", title: "Xây dựng portfolio hoàn chỉnh", status: "pending", progress: 0 },
  { id: 5, month: "Tháng 6", title: "Tham gia dự án open-source", status: "pending", progress: 0 },
  { id: 6, month: "Tháng 9", title: "Tìm việc frontend developer", status: "pending", progress: 0 },
];

export default function RoadmapPage() {
  return (
    <PageShell title="Lộ trình" description="Lộ trình 30 tháng phát triển nghề nghiệp">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Map className="h-5 w-5" />
            Lộ trình phát triển 30 tháng
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {milestones.map((m) => (
              <div key={m.id} className="relative pl-8 pb-6 last:pb-0">
                <div className="absolute left-0 top-0">
                  {m.status === "completed" ? (
                    <CheckCircle className="h-6 w-6 text-success" />
                  ) : (
                    <Circle className="h-6 w-6 text-muted-foreground" />
                  )}
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">{m.title}</h3>
                    <Badge variant={m.status === "completed" ? "success" : m.status === "in-progress" ? "ai" : "outline"}>
                      {m.status === "completed" ? "Hoàn thành" : m.status === "in-progress" ? "Đang thực hiện" : "Chờ thực hiện"}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{m.month}</p>
                  <Progress value={m.progress} className="mt-2" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </PageShell>
  );
}
