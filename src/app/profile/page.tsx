import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PageShell } from "@/components/page-shell";
import { User, Mail, Calendar, Award } from "lucide-react";

export default function ProfilePage() {
  return (
    <PageShell title="Hồ sơ nghề nghiệp" description="Quản lý thông tin cá nhân và mục tiêu phát triển">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="h-5 w-5" />
            Thông tin cá nhân
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-6">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-muted">
              <User className="h-12 w-12 text-muted-foreground" />
            </div>
            <div className="space-y-2">
              <p className="text-xl font-semibold">Người dùng Titan</p>
              <p className="text-sm text-muted-foreground">Frontend Developer</p>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Họ và tên</Label>
              <Input id="name" defaultValue="Người dùng Titan" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" defaultValue="user@titan-os.dev" />
            </div>
          </div>
          <Button className="mt-4">Lưu thay đổi</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="h-5 w-5" />
            Danh hiệu
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Chưa có danh hiệu nào.</p>
        </CardContent>
      </Card>
    </PageShell>
  );
}
