import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PageShell } from "@/components/page-shell";
import { EvidenceType, EvidenceStatus, evidenceStatusLabels } from "@/lib/constants/status";
import { ChevronLeft, FileText, ExternalLink, FileImage, Calendar } from "lucide-react";
import { type ReactNode } from "react";

const evidence = {
  id: "1",
  title: "Portfolio deployed",
  description: "Trang web portfolio đã được deploy lên Vercel.",
  type: EvidenceType.LINK,
  status: EvidenceStatus.APPROVED,
  url: "https://portfolio.example.com",
  createdAt: "2024-08-17",
};

const typeIcons: Record<EvidenceType, ReactNode> = {
  LINK: <ExternalLink className="h-5 w-5" />,
  FILE: <FileText className="h-5 w-5" />,
  SCREENSHOT: <FileImage className="h-5 w-5" />,
  CERTIFICATE: <FileText className="h-5 w-5" />,
  CODE: <FileText className="h-5 w-5" />,
  NOTE: <FileText className="h-5 w-5" />,
};

export default function EvidenceDetailPage() {
  return (
    <PageShell
      title={evidence.title}
      action={
        <Link href="/evidence">
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
            <FileText className="h-5 w-5" />
            Chi tiết bằng chứng
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-3">
            {typeIcons[evidence.type as EvidenceType]}
            <span className="font-medium">{evidence.type}</span>
          </div>
          <p className="text-muted-foreground">{evidence.description}</p>
          <div className="flex items-center gap-2">
            <Badge variant={evidence.status === EvidenceStatus.APPROVED ? "success" : evidence.status === EvidenceStatus.REJECTED ? "destructive" : "warning"}>
              {evidenceStatusLabels[evidence.status as EvidenceStatus]}
            </Badge>
          </div>
          {evidence.url && (
            <div className="flex items-center gap-2 text-sm">
              <ExternalLink className="h-4 w-4 text-muted-foreground" />
              <a href={evidence.url} className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                {evidence.url}
              </a>
            </div>
          )}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>Ngày tạo: {evidence.createdAt}</span>
          </div>
        </CardContent>
      </Card>
    </PageShell>
  );
}
