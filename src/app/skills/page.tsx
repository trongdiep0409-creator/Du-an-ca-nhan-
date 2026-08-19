import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { PageShell } from "@/components/page-shell";
import { SkillLevel, skillLevelLabels } from "@/lib/constants/status";
import Link from "next/link";
import { GraduationCap, Edit3 } from "lucide-react";

const skills = [
  { id: "1", name: "React.js", category: "Frontend", level: SkillLevel.INTERMEDIATE, target: SkillLevel.ADVANCED, progress: 75 },
  { id: "2", name: "TypeScript", category: "Frontend", level: SkillLevel.INTERMEDIATE, target: SkillLevel.EXPERT, progress: 60 },
  { id: "3", name: "Tailwind CSS", category: "Frontend", level: SkillLevel.ADVANCED, target: SkillLevel.EXPERT, progress: 85 },
  { id: "4", name: "PostgreSQL", category: "Backend", level: SkillLevel.NOVICE, target: SkillLevel.INTERMEDIATE, progress: 30 },
  { id: "5", name: "Prisma", category: "Backend", level: SkillLevel.FUNDAMENTAL_AWARENESS, target: SkillLevel.INTERMEDIATE, progress: 15 },
];

const levelOrder = [
  SkillLevel.FUNDAMENTAL_AWARENESS,
  SkillLevel.NOVICE,
  SkillLevel.INTERMEDIATE,
  SkillLevel.ADVANCED,
  SkillLevel.EXPERT,
];

export default function SkillsPage() {
  return (
    <PageShell
      title="Kỹ năng"
      description="Quản lý và theo dõi tiến trình kỹ năng phát triển"
    >
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <GraduationCap className="h-5 w-5" />
            Kỹ năng đang học
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {skills.map((skill) => (
              <div key={skill.id} className="space-y-2 rounded-md border p-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <p className="font-medium">{skill.name}</p>
                    <p className="text-sm text-muted-foreground">{skill.category}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="ai">
                      {skillLevelLabels[skill.level as SkillLevel]}
                    </Badge>
                    <span className="text-xs text-muted-foreground">→</span>
                    <Badge variant="outline">
                      {skillLevelLabels[skill.target as SkillLevel]}
                    </Badge>
                  </div>
                </div>
                <Progress value={skill.progress} className="h-2" />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>{levelOrder.indexOf(skill.level) + 1}/{levelOrder.length} - {skillLevelLabels[skill.level as SkillLevel]}</span>
                  <span>Mục tiêu: {skillLevelLabels[skill.target as SkillLevel]}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </PageShell>
  );
}
