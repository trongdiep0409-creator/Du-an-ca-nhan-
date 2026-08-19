import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PageShell } from "@/components/page-shell";
import { EvidenceType, EvidenceStatus, evidenceStatusLabels } from "@/lib/constants/status";
import { Plus, FileText, ExternalLink, FileImage } from "lucide-react";
import { type ReactNode } from "react";

const evidenceItems = [
  { id: "1", title: "Portfolio deployed", desc: "https://portfolio.example.com", type: EvidenceType.LINK, status: EvidenceStatus.APPROVED },
  { id: "2", title: "Bài tập React Hooks", desc: "File PDF nộp cho khóa học", type: EvidenceType.FILE, status: EvidenceStatus.PENDING },
  { id: "3", title: "Màn hình chụp Portfolio", desc: "Screenshot trang chủ", type: EvidenceType.SCREENSHOT, status: EvidenceStatus.REJECTED },
];

const typeIcons: Record<EvidenceType, ReactNode> = {
  LINK: <ExternalLink className="h-4 w-4" />,
  FILE: <FileText className="h-4 w-4" />,
  SCREENSHOT: <FileImage className="h-4 w-4" />,
  CERTIFICATE: <FileText className="h-4 w-4" />,
  CODE: <FileText className="h-4 w-4" />,
  NOTE: <FileText className="h-4 w-4" />,
};

export default function EvidencePage() {
  return (
    <PageShell
      title="Bằng chứng"
      description="Danh sách bằng chứng đã nộp và trạng thái duyệt"
      action={
        <Link href="/evidence/new">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Thêm bằng chứng
          </Button>
        </Link>
      }
    >
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            Bằng chứng đã nộp
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {evidenceItems.map((e) => (
              <Link key={e.id} href={`/evidence/${e.id}`}>
                <div className="group rounded-md border p-4 transition-colors hover:bg-accent">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3 space-y-1">
                      <div className="mt-0.5">{typeIcons[e.type as EvidenceType]}</div>
                      <div>
                        <p className="font-medium group-hover:text-primary">{e.title}</p>
                        <p className="text-sm text-muted-foreground">{e.desc}</p>
                      </div>
                    </div>
                    <Badge variant={e.status === EvidenceStatus.APPROVED ? "success" : e.status === EvidenceStatus.REJECTED ? "destructive" : "outline"}>
                      {evidenceStatusLabels[e.status as EvidenceStatus]}
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
