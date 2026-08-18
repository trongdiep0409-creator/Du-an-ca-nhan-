# 01 — Product Definition

## 1. Product Overview

**Titan OS Web v1** là một hệ điều hành phát triển nghề nghiệp cá nhân (Personal Career Operating System) thiết kế để dẫn dắt một người dùng duy nhất từ nền tảng kỹ thuật đến vị trí **Digital Solutions Consultant** trong **30 tháng**.

Product là **web-first**, **AI-adaptive**, **local-first**, và **evidence-driven**.

---

## 2. Target User

- **Một người dùng duy nhất** (single-user)
- Mục tiêu: trở thành Digital Solutions Consultant
- Học tập + thực hành song song
- Cần AI hỗ trợ trong quyết định, không thay quyết định
- Cần hệ thống theo dõi evidence thay vì chỉ đếm giờ học
- Cần roadmap thích ứng với tình trạng thực tế

---

## 3. Core Problem

Người dùng có mục tiêu nghề nghiệp lớn (30 tháng) mà:

- Không có hệ thống quản lý hành trình
- Không có cách theo dõi evidence thực tế
- Không có AI hỗ trợ thích ứng
- Không có phân biệt giữa "học" và "thực hành"
- Không có quy trình review/adaptive

Titan OS giải quyết bằng:

- Roadmap 30 tháng cố định
- Evidence First skill progression
- AI observe → analyze → recommend
- User review → approve/reject
- Weekly plan + Daily mission
- Output + Evidence + Review loop

---

## 4. Core Product Loop

```
30-Month Career Goal
→ Roadmap
→ Current Phase
→ Current Focus
→ Weekly Plan
→ Daily Mission
→ Learning / Practice / Build
→ Mission Attempt
→ Output
→ Evidence
→ Review
→ Skill Progress
→ Analytics
→ AI Mentor
→ Adaptive Recommendation
→ User Approval
→ Roadmap Revision
→ Next Week
```

Không được bỏ bất kỳ mắt xích chính nào khỏi IA.

---

## 5. Product Principles

| # | Principle | Mô tả |
|---|-----------|-------|
| 1 | **Output First** | Mọi hoạt động phải tạo output cụ thể |
| 2 | **Evidence First** | Skill progression dựa trên evidence, không dựa trên giờ học |
| 3 | **Data Driven** | Mọi quyết định dựa trên dữ liệu thực tế |
| 4 | **Local First** | Dữ liệu ưu tiên lưu local |
| 5 | **AI Assisted** | AI observe → analyze → recommend; user review → approve/reject |
| 6 | **Practice Before Theory** | Thực hành trước, lý thuyết bổ trợ |
| 7 | **Maintainability** | Code và tài liệu dễ bảo trì |
| 8 | **No FOMO** | Không chạy theo xu hướng, chỉ theo roadmap |
| 9 | **One Main Focus** | Luôn chỉ có 1 Main Focus tại một thời điểm |

---

## 6. Tech Stack (LOCKED)

| Layer | Công nghệ |
|-------|-----------|
| Framework | Next.js 15 |
| Language | TypeScript strict mode |
| Styling | Tailwind CSS + shadcn/ui |
| ORM | Prisma |
| Database | Supabase PostgreSQL |
| State | Zustand |
| Validation | Zod |
| Charts | Recharts |
| Deployment | Vercel |

**Rules:**
- Không sử dụng SQLite làm database chính
- Supabase project đã tồn tại, không đưa secrets vào repository
- Không đưa Supabase credentials vào repository

---

## 7. Core Concepts

### 7.1 Mission

- Đơn vị nhỏ của công việc
- Có type, objective, expected output, acceptance criteria
- Status: Planned → In Progress → Submitted → Passed/Rework/Blocked → Completed
- **Completed** chỉ khi: output + evidence + acceptance criteria + review = Passed

### 7.2 Evidence
- Bằng chứng cụ thể về năng lực
- Types: Live Website, GitHub, Screenshot, Figma, Audit, Report, Dashboard, Campaign, Tracking Setup, Automation, Case Study, Document, Certificate, Other
- Status: Recorded → Reviewed → Verified
- Verified không được tự động downgrade

### 7.3 Skill
- Kỹ năng trong 9 domain
- Progression dựa trên evidence, không dựa trên giờ học
- Cấp độ: Current Level, Target Level, Evidence Strength

### 7.4 Project
- Tập hợp các mission liên quan đến một vấn đề thực tế
- Tạo ra deliverables + evidence + case study

### 7.5 Weekly Plan
- Kế hoạch hàng tuần
- Capacity: Recovery 8–10h, Busy 12–14h, Normal 17.5h, Sprint 20–22h
- Khi workload vượt capacity: hiển thị warning, hiển thị số giờ vượt, user có thể giảm workload hoặc confirm override
- AI có thể đề xuất không overload, nhưng không tự chặn user

### 7.6 AI Mentor
- 5 chế độ: Daily Coach, Weekly Reviewer, Skill Gap Analyst, Roadmap Advisor, Project Reviewer
- Đề xuất dựa trên dữ liệu, không dựa trên cảm tính

---

## 8. Skill Matrix — 9 Domains

### 8.1 Domain Skills

| Domain | Skills |
|--------|--------|
| **Web & Infrastructure** | HTML, CSS, JavaScript, React, VPS, DNS, Deployment |
| **UI/UX & CRO** | Design Fundamentals, Figma, User Research, Wireframe, Prototype, CRO, A/B Testing |
| **SEO** | On-page SEO, Technical SEO, Keyword Research, **Google Search Console** |
| **Paid Media** | **Google Ads Fundamentals**, **Search Campaigns**, **Performance Max (PMax)**, **Google Merchant Center** |
| **Analytics & Data** | **GA4**, **Google Tag Manager**, **Looker Studio**, Data Analysis, Reporting |
| **Automation & AI** | Workflow Automation, API Integration, AI Tools, AI Workflow |
| **Business Strategy** | Business Process, Digital Strategy, Business Analysis |
| **Consulting** | Requirement Analysis, Solution Design, Audit, Strategy, Client Communication |
| **Language** | English (TOEIC), Chinese (HSK) |

### 8.2 Google Ecosystem Skills (8 trackables)

| # | Skill | Domain |
|---|-------|--------|
| 1 | Google Ads Fundamentals | Paid Media |
| 2 | Search Campaigns | Paid Media |
| 3 | Performance Max (PMax) | Paid Media |
| 4 | Google Merchant Center | Paid Media |
| 5 | Google Search Console | SEO |
| 6 | GA4 | Analytics & Data |
| 7 | Google Tag Manager | Analytics & Data |
| 8 | Looker Studio | Analytics & Data |

### 8.3 Skill Progression Map

```
Domain
→ Skill
→ Mission
→ Practice
→ Project
→ Evidence
→ Review
→ Skill Progress
```

---

## 9. Business Rules

### 9.1 Mission Completion
Mission **Completed** chỉ khi:
1. Output tồn tại
2. Evidence tồn tại
3. Acceptance criteria đạt
4. Review = Passed

### 9.2 Skill Progression
- Skill level **không được** tăng chỉ dựa trên số giờ học
- Skill progression **phải** dựa trên evidence

### 9.3 Adaptive State
- AI adaptive state (AHEAD / ON TRACK / AT RISK / BLOCKED) chỉ là **đề xuất**
- Mọi thay đổi workload, roadmap, hoặc focus **phải** có user approval

### 9.4 Roadmap Locked vs Adaptive

**LOCKED (cố định):**
- Career target (Digital Solutions Consultant)
- 30-month horizon
- 5 macro stages
- Competency requirements
- Major career milestones

**ADAPTIVE (có thể thay đổi với user approval):**
- Monthly sequencing
- Weekly plans
- Missions
- Practice volume
- Workload
- Supporting skills
- Project sequencing

AI có thể đề xuất thay đổi, không được tự thực hiện. Mọi thay đổi phải được log.

### 9.5 Capacity Rule
- Khi planned workload vượt capacity:
  - Hiển thị warning
  - Hiển thị số giờ vượt capacity
  - User có thể giảm workload HOẶC confirm override
- AI có thể đề xuất chống overload
- AI không được tự chặn user

### 9.6 Evidence Verification
- Evidence `Verified` không được tự động downgrade

---

## 10. Scope Boundaries

### 10.1 In Scope (Phase 1)
- Product + UX + UI Architecture
- Information Architecture
- Core User Flow
- Screen Inventory
- Design System
- Responsive Strategy
- AI Mentor UX
- 30-Month Roadmap
- Language Track
- Phase 1 Decisions
- Google Ecosystem Skills mapping

### 10.2 Out of Scope (Phase 1)
- ❌ Database production
- ❌ AI API
- ❌ Authentication
- ❌ Backend features
- ❌ Fake dashboard MVP
- ❌ CRM/ERP/team features
- ❌ Multi-user
- ❌ Billing
- ❌ SaaS
- ❌ Copy old prototype

---

## 11. Success Metrics

| Metric | Description |
|--------|-------------|
| Evidence generation | Số evidence tạo ra mỗi tuần |
| Review pass rate | % mission pass ngay lần review đầu |
| Rework rate | % mission cần rework |
| Skill progress | Tiến độ skill dựa trên evidence |
| Consistency | Độ đều đặn của các session (ngày/tuần) |
| Capacity utilization | % capacity tuần được sử dụng |
| Project progress | Tiến độ các project |
| Language progress | Tiến độ TOEIC / HSK |
| Google skills coverage | Số Google skills đạt evidence |

---

## 12. Non-Goals

- Không tạo mạng xã hội
- Không tạo công cụ quản lý team
- Không tạo SaaS multi-tenant
- Không tạo hệ thống billing
- Không tạo dashboard demo
- Không thay thế quyết định con người bằng AI