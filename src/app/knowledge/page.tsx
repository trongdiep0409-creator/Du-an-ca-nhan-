import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageShell } from "@/components/page-shell";
import { Lightbulb } from "lucide-react";

const knowledgeItems = [
  { id: "1", title: "CSS Grid vs Flexbox", category: "Layout", lastUpdated: "2 ngày trước" },
  { id: "2", title: "PostgreSQL Performance Tuning", category: "Database", lastUpdated: "5 ngày trước" },
  { id: "3", title: "Next.js Server Actions Best Practices", category: "Framework", lastUpdated: "1 tuần trước" },
  { id: "4", title: "React Render Optimization", category: "Frontend", lastUpdated: "2 tuần trước" },
];

export default function KnowledgePage() {
  return (
    <PageShell title="Kiến thức" description="Bản ghi kiến thức và ghi chú cá nhân">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5" />
            Kiến thức đã ghi lưu
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {knowledgeItems.map((item) => (
              <div key={item.id} className="rounded-md border p-4 transition-colors hover:bg-accent">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="font-medium">{item.title}</p>
                    <p className="text-sm text-muted-foreground">{item.category}</p>
                  </div>
                  <p className="text-xs text-muted-foreground">{item.lastUpdated}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </PageShell>
  );
}
