import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageShell } from "@/components/page-shell";
import { BarChart3, Target, Flame, Calendar } from "lucide-react";

const weeklyData = [
  { day: "T2", hours: 2.5, missions: 3 },
  { day: "T3", hours: 3.0, missions: 4 },
  { day: "T4", hours: 1.5, missions: 2 },
  { day: "T5", hours: 4.0, missions: 5 },
  { day: "T6", hours: 2.0, missions: 3 },
  { day: "T7", hours: 1.0, missions: 1 },
  { day: "CN", hours: 0.5, missions: 1 },
];

export default function AnalyticsPage() {
  const totalHours = weeklyData.reduce((sum, d) => sum + d.hours, 0);
  const totalMissions = weeklyData.reduce((sum, d) => sum + d.missions, 0);

  return (
    <PageShell title="Phân tích" description="Thống kê tiến độ và hoạt động học tập">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Tổng giờ học</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalHours}h</div>
            <p className="text-xs text-muted-foreground">7 ngày qua</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Nhiệm vụ hoàn thành</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalMissions}</div>
            <p className="text-xs text-muted-foreground">trong tuần</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Chuỗi ngày liên tiếp</CardTitle>
            <Flame className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">ngày liên tiếp</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Kỹ năng mục tiêu</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">85%</div>
            <p className="text-xs text-muted-foreground">phỏng vấn hoàn thiện</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Hoạt động 7 ngày qua</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {weeklyData.map((d) => (
              <div key={d.day} className="flex items-center gap-4">
                <span className="w-8 text-sm font-medium">{d.day}</span>
                <div className="relative h-8 flex-1">
                  <div
                    className="h-full rounded-md bg-primary"
                    style={{ width: `${(d.hours / 4) * 100}%` }}
                  />
                </div>
                <span className="w-12 text-sm text-muted-foreground text-right">
                  {d.hours}h ({d.missions})
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </PageShell>
  );
}
