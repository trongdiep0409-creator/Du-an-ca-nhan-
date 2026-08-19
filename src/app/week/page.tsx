import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { PageShell } from "@/components/page-shell";
import { CalendarDays, CheckCircle, Clock } from "lucide-react";

const weekDays = [
  { day: "Thứ 2", date: "18/8", tasks: 7, completed: 3 },
  { day: "Thứ 3", date: "19/8", tasks: 5, completed: 2 },
  { day: "Thứ 4", date: "20/8", tasks: 8, completed: 5 },
  { day: "Thứ 5", date: "21/8", tasks: 6, completed: 4 },
  { day: "Thứ 6", date: "22/8", tasks: 4, completed: 2 },
  { day: "Thứ 7", date: "23/8", tasks: 3, completed: 1 },
  { day: "Chủ nhật", date: "24/8", tasks: 2, completed: 0 },
];

export default function WeekPage() {
  const totalTasks = weekDays.reduce((sum, d) => sum + d.tasks, 0);
  const totalCompleted = weekDays.reduce((sum, d) => sum + d.completed, 0);

  return (
    <PageShell
      title="Kế hoạch tuần"
      description="Theo dõi tiến độ công việc trong tuần này"
    >
      <Card>
        <CardHeader>
          <CardTitle>Tuần 18/8 - 24/8</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">
              {totalCompleted}/{totalTasks} nhiệm vụ hoàn thành
            </span>
            <Progress value={(totalCompleted / totalTasks) * 100} className="w-32" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CalendarDays className="h-5 w-5" />
            Lịch trình tuần
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {weekDays.map((day) => (
              <div
                key={day.day}
                className="flex items-center justify-between rounded-md border p-4"
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 text-center">
                    <p className="text-sm font-medium">{day.day}</p>
                    <p className="text-xs text-muted-foreground">{day.date}</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{day.tasks - day.completed} chưa hoàn thành</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Progress value={(day.completed / day.tasks) * 100} className="w-24" />
                  <Badge variant="outline">{day.completed}/{day.tasks}</Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </PageShell>
  );
}
