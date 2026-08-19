import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PageShell } from "@/components/page-shell";
import { ProjectStatus, projectStatusLabels } from "@/lib/constants/status";
import { Plus, FolderKanban } from "lucide-react";

const projects = [
  { id: "1", title: "Portfolio Web", desc: "Trang web cá nhân bằng Next.js", status: ProjectStatus.IN_PROGRESS },
  { id: "2", title: "Hệ thống quản lý bằng chứng", desc: "Ứng dụng ghi nhận evidence", status: ProjectStatus.PLANNING },
  { id: "3", title: "AI Mentor Bot", desc: "Trợ lý AI cá nhân hóa", status: ProjectStatus.PLANNING },
];

export default function ProjectsPage() {
  return (
    <PageShell
      title="Dự án"
      description="Danh sách dự án đang thực hiện"
      action={
        <Link href="/projects/new">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Thêm dự án
          </Button>
        </Link>
      }
    >
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FolderKanban className="h-5 w-5" />
            Dự án của tôi
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {projects.map((p) => (
              <Link key={p.id} href={`/projects/${p.id}`}>
                <div className="group rounded-md border p-4 transition-colors hover:bg-accent">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <p className="font-medium group-hover:text-primary">{p.title}</p>
                      <p className="text-sm text-muted-foreground">{p.desc}</p>
                    </div>
                    <Badge variant={p.status === ProjectStatus.IN_PROGRESS ? "ai" : "outline"}>
                      {projectStatusLabels[p.status as ProjectStatus]}
                    </Badge>
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
