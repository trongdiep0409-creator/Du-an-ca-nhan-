import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileQuestion } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[400px] items-center justify-center p-6">
      <Card className="max-w-md text-center">
        <CardHeader>
          <CardTitle className="flex items-center justify-center gap-2">
            <FileQuestion className="h-8 w-8 text-muted-foreground" />
            Trang không tìm thấy
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-6">
            Trang bạn đang tìm kiếm không tồn tại hoặc đã bị di chuyển.
          </p>
          <Link href="/">
            <Button className="w-full">Quay về trang chủ</Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
