import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { PageShell } from "@/components/page-shell";
import { BookOpen, PlayCircle, CheckCircle } from "lucide-react";

const learningCourses = [
  { id: "1", title: "Next.js 15 & App Router", provider: "YouTube", progress: 80, status: "in-progress" },
  { id: "2", title: "PostgreSQL cơ bản", provider: "Unica", progress: 45, status: "in-progress" },
  { id: "3", title: "React Hooks nâng cao", provider: "Frontend Pro", progress: 100, status: "completed" },
  { id: "4", title: "TypeScript Masterclass", provider: "Udemy", progress: 20, status: "in-progress" },
];

export default function LearningPage() {
  return (
    <PageShell title="Học tập" description="Theo dõi tiến độ học tập và khóa học">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            Khóa học đang học
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {learningCourses.map((course) => (
              <div key={course.id} className="space-y-2 rounded-md border p-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <p className="font-medium">{course.title}</p>
                    <p className="text-sm text-muted-foreground">{course.provider}</p>
                  </div>
                  <Badge variant={course.status === "completed" ? "success" : "ai"}>
                    {course.status === "completed" ? "Hoàn thành" : "Đang học"}
                  </Badge>
                </div>
                <Progress value={course.progress} className="h-2" />
                <div className="text-xs text-muted-foreground">{course.progress}% hoàn thành</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </PageShell>
  );
}
