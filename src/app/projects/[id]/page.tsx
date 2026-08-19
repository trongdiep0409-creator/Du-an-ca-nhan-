import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PageShell } from "@/components/page-shell";
import { ProjectStatus, projectStatusLabels } from "@/lib/constants/status";
import { ChevronLeft, FolderKanban, Calendar, ExternalLink } from "lucide-react";

const project = {
  id: "1",
  title: "Portfolio Web",
  description: "Trang web cá nhân được xây dựng với Next.js 15 và Tailwind CSS.",
  status: ProjectStatus.IN_PROGRESS,
  createdAt: "2024-08-01",
  link: "https://github.com/user/portfolio",
};

export default function ProjectDetailPage() {
  return (
    <PageShell
      title={project.title}
      action={
        <Link href="/projects">
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
            <FolderKanban className="h-5 w-5" />
            Chi tiết dự án
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">{project.description}</p>
          <div className="flex items-center gap-2">
            <Badge variant={project.status === ProjectStatus.IN_PROGRESS ? "ai" : "outline"}>
              {projectStatusLabels[project.status as ProjectStatus]}
            </Badge>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>Bắt đầu: {project.createdAt}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <ExternalLink className="h-4 w-4 text-muted-foreground" />
            <a href={project.link} className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
              {project.link}
            </a>
          </div>
        </CardContent>
      </Card>
    </PageShell>
  );
}
