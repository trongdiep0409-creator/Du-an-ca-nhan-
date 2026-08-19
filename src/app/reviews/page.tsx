import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PageShell } from "@/components/page-shell";
import { ScrollText } from "lucide-react";

const reviews = [
  { id: "1", title: "Portfolio GitHub Pages", desc: "Bài tập tuần 1", status: "APPROVED", reviewer: "Auto" as const, date: "17/8/2024" },
  { id: "2", title: "Responsive Design Hoàn thiện", desc: "Evidence chụp màn hình", status: "PENDING", reviewer: "", date: "" },
  { id: "3", title: "SQL Assignment", desc: "Bài tập PostgreSQL", status: "REJECTED", reviewer: "Auto", date: "15/8/2024" },
];

export default function ReviewsPage() {
  return (
    <PageShell title="Đánh giá" description="Danh sách bằng chứng đã được đánh giá">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ScrollText className="h-5 w-5" />
            Lịch sử đánh giá
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {reviews.map((r) => (
              <Link key={r.id} href={`/reviews/${r.id}`}>
                <div className="group rounded-md border p-4 transition-colors hover:bg-accent">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <p className="font-medium group-hover:text-primary">{r.title}</p>
                      <p className="text-sm text-muted-foreground">{r.desc}</p>
                      {r.reviewer && (
                        <p className="text-xs text-muted-foreground">
                          Phản hồi bởi: {r.reviewer} · {r.date}
                        </p>
                      )}
                    </div>
                    <Badge variant={r.status === "APPROVED" ? "success" : r.status === "REJECTED" ? "destructive" : "warning"}>
                      {r.status === "APPROVED" ? "Đạt" : r.status === "REJECTED" ? "Trượt" : "Chờ duyệt"}
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
