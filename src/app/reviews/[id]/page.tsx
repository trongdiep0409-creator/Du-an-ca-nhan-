import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PageShell } from "@/components/page-shell";
import { ChevronLeft, ScrollText, CheckCircle, XCircle, User, Calendar } from "lucide-react";

const review = {
  id: "1",
  title: "Portfolio GitHub Pages",
  description: "Bài tập tuần 1 - deploy portfolio lên GitHub Pages",
  status: "passed",
  reviewer: "AI Mentor",
  date: "17/8/2024",
  comment: "Trang web đã được deploy thành công. Responsive hoạt động tốt. Cần cải thiện tốc độ tải trang.",
};

export default function ReviewDetailPage() {
  return (
    <PageShell
      title={review.title}
      action={
        <Link href="/reviews">
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
            <ScrollText className="h-5 w-5" />
            Chi tiết đánh giá
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">{review.description}</p>
          <div className="flex items-center gap-2">
            {review.status === "passed" ? (
              <Badge variant="success">Đạt</Badge>
            ) : review.status === "failed" ? (
              <Badge variant="destructive">Trượt</Badge>
            ) : (
              <Badge variant="warning">Chờ duyệt</Badge>
            )}
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <User className="h-4 w-4" />
            <span>{review.reviewer}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>{review.date}</span>
          </div>
          <div className="rounded-md bg-muted p-4">
            <p className="text-sm">{review.comment}</p>
          </div>
        </CardContent>
      </Card>
    </PageShell>
  );
}
