import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PageShell } from "@/components/page-shell";
import { Bot, Send, Sparkles } from "lucide-react";

const messages = [
  { id: 1, role: "assistant", content: "Chào bạn! Tôi là AI Mentor của Titan OS. Tôi có thể giúp gì cho hôm nay?" },
  { id: 2, role: "user", content: "Tôi nên học gì tiếp theo cho kỹ năng React?" },
  { id: 3, role: "assistant", content: "Dựa trên lộ trình của bạn, tôi đề xuất học React Server Components và Suspense. Bạn có thể bắt đầu với bài viết trên blog của Next.js." },
];

export default function AiMentorPage() {
  return (
    <PageShell title="AI Mentor" description="Trợ lý AI cá nhân hóa cho việc học tập">
      <Card className="h-[500px] flex flex-col">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bot className="h-6 w-6 text-ai" />
            AI Mentor — Titan OS
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-1 overflow-y-auto space-y-4">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex gap-2 ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-[80%] rounded-lg px-4 py-2 ${
                msg.role === "assistant" ? "bg-muted" : "bg-primary text-primary-foreground"
              }`}>
                <p className="text-sm">{msg.content}</p>
              </div>
            </div>
          ))}
        </CardContent>
        <div className="border-t p-4">
          <div className="flex gap-2">
            <Input placeholder="Nhập câu hỏi của bạn..." />
            <Button variant="ai" aria-label="Gửi tin nhắn">
              <Send className="h-4 w-4" />
            </Button>
          </div>
          <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
            <Sparkles className="h-3 w-3" />
            <span>AI sẽ đưa ra đề xuất, bạn cần phê duyệt trước khi thực hiện</span>
          </div>
        </div>
      </Card>
    </PageShell>
  );
}
