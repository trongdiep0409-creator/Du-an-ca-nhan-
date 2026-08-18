# AGENTS.md — Quy định cho AI Coder

Tài liệu này quy định cách AI coder phải làm việc trên repository Titan OS Web v1.

---

## 1. Nguyên tắc bất biến

### 1.1 Không tự thay đổi business rule

- Business rules được định nghĩa trong `docs/product/`
- AI coder **không được** tự ý thay đổi, thêm bớt, hoặc diễn giải lại business rules
- Mọi thay đổi business rule phải được user (chủ sở hữu sản phẩm) phê duyệt trước

### 1.2 Evidence First

- Skill progression **chỉ** dựa trên evidence, không dựa trên giờ học
- Mission chỉ được đánh dấu `Completed` khi:
  - Output tồn tại
  - Evidence tồn tại
  - Acceptance criteria đạt
  - Review = Passed
- Không được tạo logic cho phép hoàn thành mission chỉ vì đã học đủ thời gian

### 1.3 Không fake completion

- Không được tạo mock data, fake status, hoặc giả lập trạng thái hoàn thành
- Không được tự động đánh dấu mission/skill/project là hoàn thành
- Mọi trạng thái phải phản ánh dữ liệu thực tế
- Visual evidence (Figma, mockup) chỉ được đánh dấu hoàn thành khi tồn tại thực tế

### 1.4 Không thay roadmap goal tự động

- Roadmap 30 tháng là cố định với **LOCKED** items (career target, 30-month horizon, 5 macro stages, competency requirements, major milestones)
- **ADAPTIVE** items (monthly sequencing, weekly plans, missions, practice volume, workload, supporting skills, project sequencing) có thể thay đổi nhưng phải có user approval
- AI chỉ được đề xuất thay đổi, không được tự thực hiện
- Roadmap revision phải có user approval và được log

### 1.5 User approval bắt buộc với adaptive roadmap

- AI adaptive state (AHEAD / ON TRACK / AT RISK / BLOCKED) chỉ là đề xuất
- Mọi thay đổi workload, roadmap, hoặc focus phải có user approval
- Flow bắt buộc: AI observe → analyze → recommend → user review → approve/reject

---

## 2. Quy định code

### 2.1 Tech Stack (LOCKED)

- **Framework**: Next.js 15
- **Language**: TypeScript strict mode
- **Styling**: Tailwind CSS + shadcn/ui
- **ORM**: Prisma
- **Database**: Supabase PostgreSQL
- **State**: Zustand
- **Validation**: Zod
- **Charts**: Recharts
- **Deployment**: Vercel

Không sử dụng SQLite làm database chính.
Supabase project đã tồn tại. Không đưa secrets vào repository.

### 2.2 TypeScript strict

- Bật `strict: true` trong `tsconfig.json`
- Không dùng `any` trừ trường hợp bất khả kháng và phải có comment giải thích
- Không tắt strict mode

### 2.3 Validation bắt buộc

- Mọi input từ user phải được validate bằng Zod
- Mọi dữ liệu từ API phải được validate
- Không tin tưởng dữ liệu đầu vào

### 2.4 Code maintainable

- Tuân theo design system trong `docs/product/05-design-system.md`
- Component phải tái sử dụng được (shadcn/ui)
- Không copy-paste code
- Comment giải thích "tại sao", không giải thích "cái gì"

### 2.5 Không commit secret

- Không commit API key, token, password, hoặc bất kỳ secret nào
- Sử dụng environment variables
- Kiểm tra `.gitignore` trước khi commit
- Không đưa Supabase credentials vào repository

### 2.6 Không tự thêm scope ngoài roadmap

- Chỉ implement những gì trong roadmap và tài liệu product
- Không tự ý thêm feature, screen, hoặc chức năng mới
- Nếu cần thêm scope, phải đề xuất và chờ user approve

---

## 3. Quy trình làm việc

### 3.1 Trước khi code

1. Đọc tài liệu product liên quan trong `docs/product/`
2. Xác định screen/feature đang implement thuộc phần nào của IA
3. Kiểm tra design system tokens
4. Kiểm tra responsive strategy
5. Kiểm tra tech stack bắt buộc

### 3.2 Trong khi code

1. Tuân theo core user flow trong `docs/product/03-core-user-flow.md`
2. Xử lý đầy đủ UX states: Loading, Empty, Normal, Error, Success, Blocked, Disabled
3. Tuân theo AI adaptive flow: AI recommend → user approve
4. Tuân theo capacity rule: warning khi vượt capacity, user có thể confirm override
5. Không bỏ qua edge cases

### 3.3 Sau khi code

1. Kiểm tra TypeScript strict pass
2. Kiểm tra validation hoạt động (Zod)
3. Kiểm tra responsive trên các breakpoint
4. Kiểm tra không có secret trong code
5. Kiểm tra không có scope creep

---

## 4. Cấm tuyệt đối

- ❌ Copy code/prototype Titan OS cũ
- ❌ Fake completion
- ❌ Tự thay đổi business rule
- ❌ Tự thay đổi LOCKED roadmap items
- ❌ Thêm scope ngoài roadmap
- ❌ Commit secret
- ❌ Tắt TypeScript strict
- ❌ Bỏ qua validation
- ❌ Thêm multi-user, billing, SaaS features
- ❌ Xây dựng database production, AI API, authentication, backend feature trong Phase 1
- ❌ Sử dụng SQLite làm database chính
- ❌ Đánh dấu visual evidence hoàn thành nếu không tồn tại thực tế

---

## 5. Definition of Done

Một task chỉ được coi là hoàn thành khi:

- [ ] Code pass TypeScript strict
- [ ] Validation hoạt động đúng
- [ ] UX states đầy đủ
- [ ] Responsive đúng breakpoints
- [ ] Không có secret
- [ ] Không có scope creep
- [ ] Tuân theo design system
- [ ] Tuân theo business rules
- [ ] Không fake completion
- [ ] Visual evidence tồn tại thực tế trước khi đánh dấu hoàn thành