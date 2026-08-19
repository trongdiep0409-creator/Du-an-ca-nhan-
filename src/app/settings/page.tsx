import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PageShell } from "@/components/page-shell";
import { Settings } from "lucide-react";

export default function SettingsPage() {
  return (
    <PageShell title="Cài đặt" description="Quản lý cài đặt hệ thống">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5" />
            Cài đặt chung
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <div className="flex items-center justify-between rounded-md border p-4">
              <div>
                <p className="font-medium">Chế độ tối</p>
                <p className="text-sm text-muted-foreground">Bật/tắt giao diện tối</p>
              </div>
              <Button variant="outline">Đổi</Button>
            </div>
            <div className="flex items-center justify-between rounded-md border p-4">
              <div>
                <p className="font-medium">Ngôn ngữ</p>
                <p className="text-sm text-muted-foreground">Tiếng Việt</p>
              </div>
              <Button variant="outline">Đổi</Button>
            </div>
          </div>
          <Button className="mt-4">Lưu cài đặt</Button>
        </CardContent>
      </Card>
    </PageShell>
  );
}
