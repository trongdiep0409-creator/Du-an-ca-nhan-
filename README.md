# Titan OS Web v1

**Hệ điều hành phát triển nghề nghiệp cá nhân — 30 tháng**

Titan OS là một hệ điều hành phát triển nghề nghiệp cá nhân (Personal Career Operating System) được thiết kế cho **một người dùng duy nhất**, web-first, AI-adaptive. Hệ thống quản lý toàn bộ hành trình phát triển nghề nghiệp trong **30 tháng** từ nền tảng kỹ thuật đến vị trí **Digital Solutions Consultant**.

---

## Target User

- Một cá nhân duy nhất
- Mục tiêu nghề nghiệp: **Digital Solutions Consultant**
- Học tập và thực hành song song (Practice Before Theory)
- Cần AI hỗ trợ nhưng giữ quyền quyết định cuối cùng
- Cần hệ thống theo dõi evidence thay vì chỉ đếm giờ học

## 30-Month Goal

Trở thành **Digital Solutions Consultant** thông qua 5 macro stage:

| Stage | Thời gian | Trọng tâm |
|-------|-----------|-----------|
| FOUNDATION | Tháng 1–6 | Web, Infrastructure, UI/UX fundamentals, English |
| BUILD | Tháng 7–12 | UX, SEO, CRO, Tracking, Chinese (HSK4) |
| GROWTH | Tháng 13–18 | Google Ads, GA4, GTM, Data, Funnel |
| INTEGRATION | Tháng 19–24 | Automation, AI, Digital systems, Business |
| CONSULTANT | Tháng 25–30 | Business analysis, Audit, Strategy, Consulting |

## Project Principles

1. **Output First** — Mọi hoạt động phải tạo ra output cụ thể
2. **Evidence First** — Skill progression dựa trên evidence, không dựa trên giờ học
3. **Data Driven** — Mọi quyết định dựa trên dữ liệu thực tế
4. **Local First** — Dữ liệu ưu tiên lưu local
5. **AI Assisted** — AI observe → analyze → recommend; user review → approve/reject
6. **Practice Before Theory** — Thực hành trước, lý thuyết bổ trợ
7. **Maintainability** — Code và tài liệu dễ bảo trì
8. **No FOMO** — Không chạy theo xu hướng, chỉ theo roadmap
9. **One Main Focus** — Luôn chỉ có 1 Main Focus tại một thời điểm

## Current Phase

**Phase 1 — Product & UX Foundation** (đang triển khai)

Phase 1 thiết kế đầy đủ nền móng Product + UX + UI Architecture trước khi triển khai feature. Toàn bộ tài liệu nằm trong [`docs/product/`](docs/product/).

## Project Status

| Trạng thái | Chi tiết |
|------------|----------|
| Phase 1: Product & UX Foundation | ⏳ Đang triển khai (cần visual evidence) |
| Phase 2: Implementation | ⏳ Chưa bắt đầu |
| Database production | ❌ Chưa xây dựng |
| AI API | ❌ Chưa xây dựng |
| Authentication | ❌ Chưa xây dựng |

## Intended Stack

> Stack dưới đây là định hướng cho Phase 2, chưa triển khai trong Phase 1.

- **Framework**: Next.js 15
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS + shadcn/ui
- **ORM**: Prisma
- **Database**: Supabase PostgreSQL
- **State**: Zustand
- **Validation**: Zod
- **Charts**: Recharts
- **Deployment**: Vercel
- **Web-first**: Responsive desktop + mobile

## Documentation

| File | Nội dung |
|------|----------|
| [`docs/product/01-product-definition.md`](docs/product/01-product-definition.md) | Định nghĩa sản phẩm |
| [`docs/product/02-information-architecture.md`](docs/product/02-information-architecture.md) | Kiến trúc thông tin |
| [`docs/product/03-core-user-flow.md`](docs/product/03-core-user-flow.md) | Core user flow |
| [`docs/product/04-screen-inventory.md`](docs/product/04-screen-inventory.md) | Danh sách màn hình |
| [`docs/product/05-design-system.md`](docs/product/05-design-system.md) | Design system |
| [`docs/product/06-responsive-strategy.md`](docs/product/06-responsive-strategy.md) | Responsive strategy |
| [`docs/product/07-ai-mentor-ux.md`](docs/product/07-ai-mentor-ux.md) | AI Mentor UX |
| [`docs/product/08-roadmap-30-month.md`](docs/product/08-roadmap-30-month.md) | Roadmap 30 tháng |
| [`docs/product/09-language-track.md`](docs/product/09-language-track.md) | Language track |
| [`docs/product/10-phase-1-decisions.md`](docs/product/10-phase-1-decisions.md) | Quyết định Phase 1 |

## AGENTS.md

Xem [`AGENTS.md`](AGENTS.md) để biết quy định dành cho AI coder khi làm việc trên repository này.