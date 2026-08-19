import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PageShell } from "@/components/page-shell";
import Link from "next/link";
import {
  CalendarDays,
  ClipboardCheck,
  FolderKanban,
  GraduationCap,
  Map,
  TrendingUp,
} from "lucide-react";

export default function DashboardPage() {
  return (
    <PageShell
      title="Tổng quan"
      description="Tổng quan tiến trình phát triển nghề nghiệp của bạn"
    >
      {/* Quick stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Nhiệm vụ hôm nay</CardTitle>
            <ClipboardCheck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3/7</div>
            <p className="text-xs text-muted-foreground">đã hoàn thành</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Kỹ năng đang học</CardTitle>
            <GraduationCap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">trong lộ trình</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Dự án hoạt động</CardTitle>
            <FolderKanban className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">đang thực hiện</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Ngày tiếp theo</CardTitle>
            <CalendarDays className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15%</div>
            <p className="text-xs text-muted-foreground">tuần tiến độ</p>
          </CardContent>
        </Card>
      </div>

      {/* Today's missions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CalendarDays className="h-5 w-5" />
            Nhiệm vụ hôm nay
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between rounded-md border p-3">
              <div className="space-y-1">
                <p className="font-medium">Xây dựng trang Portfolio</p>
                <p className="text-sm text-muted-foreground">Dự án web cá nhân</p>
              </div>
              <Badge variant="success">Hoàn thành</Badge>
            </div>
            <div className="flex items-center justify-between rounded-md border p-3">
              <div className="space-y-1">
                <p className="font-medium">Học React Hooks nâng cao</p>
                <p className="text-sm text-muted-foreground">Phần 3/5</p>
              </div>
              <Badge variant="warning">Đang làm</Badge>
            </div>
          </div>
          <Link href="/today" className="mt-4 text-sm text-primary hover:underline">
            Xem tất cả nhiệm vụ hôm nay →
          </Link>
        </CardContent>
      </Card>

      {/* Quick access */}
      <Card>
        <CardHeader>
          <CardTitle>Truy cập nhanh</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            <Link href="/roadmap">
              <Button variant="outline" className="h-auto flex-col gap-2">
                <Map className="h-6 w-6" />
                <span className="text-sm">Lộ trình</span>
              </Button>
            </Link>
            <Link href="/missions">
              <Button variant="outline" className="h-auto flex-col gap-2">
                <ClipboardCheck className="h-6 w-6" />
                <span className="text-sm">Nhiệm vụ</span>
              </Button>
            </Link>
            <Link href="/analytics">
              <Button variant="outline" className="h-auto flex-col gap-2">
                <TrendingUp className="h-6 w-6" />
                <span className="text-sm">Phân tích</span>
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </PageShell>
  );
}
