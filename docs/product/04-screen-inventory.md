# 04 — Screen Inventory

## 1. Overview

Danh sách đầy đủ các màn hình trong Titan OS Web v1, bao gồm specification cho từng màn hình.

---

## 2. Screen List

| # | Screen | Route | Group | Priority |
|---|--------|-------|-------|----------|
| 1 | Dashboard | `/` | Today | P0 |
| 2 | Today | `/today` | Today | P0 |
| 3 | Week Plan | `/week` | Today | P0 |
| 4 | Roadmap | `/roadmap` | Growth | P0 |
| 5 | Skills | `/skills` | Growth | P0 |
| 6 | Learning | `/learning` | Growth | P1 |
| 7 | Knowledge | `/knowledge` | Growth | P1 |
| 8 | Missions | `/missions` | Work | P0 |
| 9 | Projects | `/projects` | Work | P0 |
| 10 | Evidence | `/evidence` | Work | P0 |
| 11 | Analytics | `/analytics` | Intelligence | P0 |
| 12 | AI Mentor | `/ai-mentor` | Intelligence | P0 |
| 13 | Reviews | `/reviews` | Intelligence | P0 |
| 14 | Career Profile | `/profile` | System | P1 |
| 15 | Settings | `/settings` | System | P1 |

### Detail Screens

| # | Screen | Route | Parent |
|---|--------|-------|--------|
| 16 | Mission Detail | `/missions/:id` | Missions |
| 17 | Mission Attempt | `/missions/:id/attempts/:attemptId` | Mission Detail |
| 18 | Project Detail | `/projects/:id` | Projects |
| 19 | Evidence Detail | `/evidence/:id` | Evidence |
| 20 | Skill Detail | `/skills/:id` | Skills |
| 21 | Learning Session Detail | `/learning/:id` | Learning |
| 22 | Knowledge Item Detail | `/knowledge/:id` | Knowledge |
| 23 | Weekly Review Detail | `/reviews/:weekId` | Reviews |
| 24 | AI Mentor Conversation | `/ai-mentor/:mode` | AI Mentor |

---

## 3. Screen Specifications

### 3.1 Dashboard

**Mục đích:** Trả lời 5 câu hỏi:
1. Tôi đang ở đâu?
2. Tôi phải làm gì hôm nay?
3. Tôi có đang đúng tiến độ không?
4. Kỹ năng nào đang yếu?
5. AI đề xuất gì?

**Layout:**

```
┌─────────────────────────────────────────────────────────────┐
│  Topbar: Logo | Search (⌘K) | Streak | Settings             │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────────────┐  ┌──────────────────────────────┐  │
│  │ Current Phase       │  │ AI Recommendation Card       │  │
│  │ Month x/30          │  │ - Adaptive state             │  │
│  │ Current Focus       │  │ - Đề xuất                    │  │
│  │ Weekly Progress     │  │ - Approve/Reject             │  │
│  └─────────────────────┘  └──────────────────────────────┘  │
│  ┌─────────────────────┐  ┌──────────────────────────────┐  │
│  │ Today Primary       │  │ Skill Health                 │  │
│  │ Mission (dominant)  │  │ - Top 3 yếu                  │  │
│  │ + Supporting        │  │ - Evidence strength          │  │
│  └─────────────────────┘  └──────────────────────────────┘  │
│  ┌─────────────────────┐  ┌──────────────────────────────┐  │
│  │ Evidence Generated  │  │ Upcoming Milestone           │  │
│  │ (tuần này)          │  │ Blocked Items                │  │
│  └─────────────────────┘  └──────────────────────────────┘  │
│  ┌──────────────────────────────────────────────────────┐   │
│  │ Recent Project Output                                │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

**Data hiển thị:**
- Current Phase (stage name + month)
- Month x/30
- Current Focus (1 Main + 2 Supporting)
- Weekly Capacity
- Weekly Progress (planned vs actual)
- Today Primary Mission
- Supporting Missions
- Skill Health (top weak skills)
- Evidence Generated (tuần này)
- Current Streak
- Recent Project Output
- AI Status (adaptive state)
- AI Recommendation
- Upcoming Milestone
- Blocked Items

**UX States:**
- Loading: skeleton loading
- Empty: "Chưa có dữ liệu. Bắt đầu với Week Plan đầu tiên."
- Normal: hiển thị đầy đủ
- Error: "Không thể tải dữ liệu. Thử lại."
- Blocked: hiển thị blocked items với lý do

---

### 3.2 Today

**Mục đích:** Daily execution screen — nơi user thực hiện mission hàng ngày.

**Layout:**

```
┌─────────────────────────────────────────────────────────────┐
│  Topbar: Date | Capacity hôm nay | Streak                   │
├─────────────────────────────────────────────────────────────┤
│  ┌──────────────────────────────────────────────────────┐   │
│  │ AI Daily Brief                                       │   │
│  │ - Tóm tắt hôm nay                                    │   │
│  │ - Đề xuất focus                                      │   │
│  │ - Approve/Reject                                     │   │
│  └──────────────────────────────────────────────────────┘   │
│  ┌──────────────────────────────────────────────────────┐   │
│  │ PRIMARY MISSION (visually dominant)                  │   │
│  │ - Title, type, objective                             │   │
│  │ - Expected output                                    │   │
│  │ - Acceptance criteria                                │   │
│  │ - [Start] [Pause] [End] [Submit]                     │   │
│  │ - Current attempt timer                              │   │
│  └──────────────────────────────────────────────────────┘   │
│  ┌─────────────────────┐  ┌──────────────────────────────┐  │
│  │ Supporting Mission 1│  │ Supporting Mission 2         │  │
│  └─────────────────────┘  └──────────────────────────────┘  │
│  ┌─────────────────────┐  ┌──────────────────────────────┐  │
│  │ Language Session    │  │ End-of-Day Review            │  │
│  └─────────────────────┘  └──────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

**Data hiển thị:**
- Date
- Capacity hôm nay
- Primary Mission (dominant)
- Supporting Mission 1
- Supporting Mission 2
- Language Session
- AI Daily Brief
- Quick Start
- Current Attempt (timer + note)
- End-of-Day Review

**UX States:**
- Loading: skeleton loading
- Empty: "Chưa có mission hôm nay. Tạo từ Week Plan."
- Normal: hiển thị đầy đủ
- Error: "Không thể tải dữ liệu. Thử lại."
- Success: "Mission đã submit thành công."
- Blocked: "Mission bị blocked. Ghi lý do."

---

### 3.3 Week Plan

**Mục đích:** Lập kế hoạch tuần, quản lý capacity, phân bổ missions.

**Layout:**

```
┌─────────────────────────────────────────────────────────────┐
│  Topbar: Tuần x | Capacity Preset Selector                  │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────────────┐  ┌──────────────────────────────┐  │
│  │ Weekly Capacity     │  │ Planned vs Actual Hours      │  │
│  │ - Preset: Recovery  │  │ - Progress bar               │  │
│  │   Busy/Normal/Sprint│  │ - Capacity utilization       │  │
│  └─────────────────────┘  └──────────────────────────────┘  │
│  ┌──────────────────────────────────────────────────────┐   │
│  │ Main Focus                                           │   │
│  │ Supporting Skills (tối đa 2)                         │   │
│  └──────────────────────────────────────────────────────┘   │
│  ┌──────────────────────────────────────────────────────┐   │
│  │ Missions (tuần này)                                  │   │
│  │ - Primary missions                                   │   │
│  │ - Supporting missions                                │   │
│  │ - Language sessions                                  │   │
│  │ - Project work                                       │   │
│  │ - Review session                                     │   │
│  └──────────────────────────────────────────────────────┘   │
│  ┌──────────────────────────────────────────────────────┐   │
│  │ AI Workload Recommendation                           │   │
│  │ - Đề xuất workload                                   │   │
│  │ - Approve/Reject                                     │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

**Data hiển thị:**
- Weekly Capacity
- Planned Hours
- Actual Hours
- Main Focus
- Supporting Skills
- Missions
- Language Sessions
- Project Work
- Review Session
- Capacity Utilization

**Workload Presets:**
| Preset | Hours |
|--------|-------|
| Recovery | 8–10h |
| Busy | 12–14h |
| Normal | 17.5h |
| Sprint | 20–22h |

**UX States:**
- Loading: skeleton loading
- Empty: "Chưa có kế hoạch tuần này. Tạo mới."
- Normal: hiển thị đầy đủ
- Error: "Không thể lưu kế hoạch. Thử lại."
- Success: "Kế hoạch tuần đã lưu."
- Warning: "Workload vượt capacity X giờ. Giảm bớt hoặc confirm override."

---

### 3.4 Roadmap

**Mục đích:** Hiển thị 30-month roadmap với 5 macro stages.

**Layout:**

```
┌─────────────────────────────────────────────────────────────┐
│  Topbar: Roadmap 30 tháng | Revisions count                 │
├─────────────────────────────────────────────────────────────┤
│  ┌──────────────────────────────────────────────────────┐   │
│  │ Timeline View (horizontal scroll)                    │   │
│  │ - 5 stages                                           │   │
│  │ - 30 months                                          │   │
│  │ - Milestones                                         │   │
│  │ - Current position marker                            │   │
│  └──────────────────────────────────────────────────────┘   │
│  ┌──────────────────────────────────────────────────────┐   │
│  │ Stage Detail (click stage)                           │   │
│  │ - Stage name + months                                │   │
│  │ - Skill targets                                      │   │
│  │ - Project targets                                    │   │
│  │ - Evidence targets                                   │   │
│  │ - Status + progress                                  │   │
│  └──────────────────────────────────────────────────────┘   │
│  ┌──────────────────────────────────────────────────────┐   │
│  │ Revisions History                                    │   │
│  │ - Revision date                                      │   │
│  │ - Change description                                 │   │
│  │ - Approved by                                        │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

**Data hiển thị:**
- Stage (5 stages)
- Month (1–30)
- Milestone
- Skill targets
- Project targets
- Evidence targets
- Status
- Progress
- Revisions

**UX States:**
- Loading: skeleton loading
- Empty: "Chưa có roadmap. Khởi tạo roadmap."
- Normal: hiển thị đầy đủ
- Error: "Không thể tải roadmap. Thử lại."

---

### 3.5 Skills

**Mục đích:** Hiển thị skill matrix 9 domain với 8 Google ecosystem skills trackable.

**Layout:**

```
┌─────────────────────────────────────────────────────────────┐
│  Topbar: Skills | Filter theo domain                        │
├─────────────────────────────────────────────────────────────┤
│  ┌──────────────────────────────────────────────────────┐   │
│  │ Domain Tabs (9 domains)                               │   │
│  │ - Web & Infrastructure                               │   │
│  │ - UI/UX & CRO                                        │   │
│  │ - SEO                                                │   │
│  │ - Paid Media                                         │   │
│  │ - Analytics & Data                                   │   │
│  │ - Automation & AI                                    │   │
│  │ - Business Strategy                                  │   │
│  │ - Consulting                                         │   │
│  │ - Language                                           │   │
│  └──────────────────────────────────────────────────────┘   │
│  ┌──────────────────────────────────────────────────────┐   │
│  │ Google Ecosystem Skills (8 trackables)               │   │
│  │ - Google Ads Fundamentals (Paid Media)               │   │
│  │ - Search Campaigns (Paid Media)                      │   │
│  │ - Performance Max PMax (Paid Media)                  │   │
│  │ - Google Merchant Center (Paid Media)                │   │
│  │ - Google Search Console (SEO)                        │   │
│  │ - GA4 (Analytics & Data)                             │   │
│  │ - Google Tag Manager (Analytics & Data)              │   │
│  │ - Looker Studio (Analytics & Data)                   │   │
│  └──────────────────────────────────────────────────────┘   │
│  ┌──────────────────────────────────────────────────────┐   │
│  │ Skill Cards Grid                                     │   │
│  │ Mỗi card:                                            │   │
│  │ - Skill name                                         │   │
│  │ - Current Level                                      │   │
│  │ - Target Level                                       │   │
│  │ - Evidence Strength                                  │   │
│  │ - Last Practiced                                     │   │
│  │ - Review Pass Rate                                   │   │
│  │ - Rework Rate                                        │   │
│  │ - Project Usage                                      │   │
│  │ - Status                                             │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

**Data hiển thị:**
- Current Level
- Target Level
- Evidence Strength
- Last Practiced
- Review Pass Rate
- Rework Rate
- Project Usage
- Status

**UX States:**
- Loading: skeleton loading
- Empty: "Chưa có skill data. Bắt đầu học."
- Normal: hiển thị đầy đủ
- Error: "Không thể tải skills. Thử lại."

---

### 3.6 Learning

**Mục đích:** Quản lý learning sessions.

**Layout:**

```
┌─────────────────────────────────────────────────────────────┐
│  Topbar: Learning | Filter theo skill/domain                │
├─────────────────────────────────────────────────────────────┤
│  ┌──────────────────────────────────────────────────────┐   │
│  │ Learning Session List                                │   │
│  │ Mỗi session:                                         │   │
│  │ - Skill                                              │   │
│  │ - Topic                                              │   │
│  │ - Source                                             │   │
│  │ - Duration                                           │   │
│  │ - Notes                                              │   │
│  │ - Practice                                           │   │
│  │ - Output                                             │   │
│  │ - Usefulness                                         │   │
│  │ - Linked Mission                                     │   │
│  └──────────────────────────────────────────────────────┘   │
│  [+ New Learning Session]                                   │
└─────────────────────────────────────────────────────────────┘
```

**Data hiển thị:**
- Skill
- Topic
- Source
- Duration
- Notes
- Practice
- Output
- Usefulness
- Linked Mission

**UX States:**
- Loading: skeleton loading
- Empty: "Chưa có learning session. Tạo session đầu tiên."
- Normal: hiển thị đầy đủ
- Error: "Không thể tải learning sessions. Thử lại."

---

### 3.7 Knowledge

**Mục đích:** Personal knowledge base.

**Layout:**

```
┌─────────────────────────────────────────────────────────────┐
│  Topbar: Knowledge | Search | Filter                        │
├─────────────────────────────────────────────────────────────┤
│  ┌──────────────────────────────────────────────────────┐   │
│  │ Search Bar                                           │   │
│  │ Filter: tag, domain, skill                           │   │
│  └──────────────────────────────────────────────────────┘   │
│  ┌──────────────────────────────────────────────────────┐   │
│  │ Knowledge Items Grid                                 │   │
│  │ - Notes                                              │   │
│  │ - Concepts                                           │   │
│  │ - Checklists                                         │   │
│  │ - Troubleshooting                                    │   │
│  │ - Lessons Learned                                    │   │
│  │ - Reusable Processes                                 │   │
│  └──────────────────────────────────────────────────────┘   │
│  [+ New Knowledge Item]                                     │
└─────────────────────────────────────────────────────────────┘
```

**Data hiển thị:**
- Notes
- Concepts
- Checklists
- Troubleshooting
- Lessons Learned
- Reusable Processes
- Tags
- Domain
- Skill
- Linked Project
- Linked Mission

**UX States:**
- Loading: skeleton loading
- Empty: "Chưa có ghi chú. Tạo ghi chú đầu tiên."
- Normal: hiển thị đầy đủ
- Error: "Không thể tải knowledge. Thử lại."

---

### 3.8 Missions

**Mục đích:** Danh sách mission, filter theo status/type.

**Layout:**

```
┌─────────────────────────────────────────────────────────────┐
│  Topbar: Missions | Filter: status/type/domain              │
├─────────────────────────────────────────────────────────────┤
│  ┌──────────────────────────────────────────────────────┐   │
│  │ Status Tabs                                          │   │
│  │ - All                                                │   │
│  │ - Planned                                            │   │
│  │ - In Progress                                        │   │
│  │ - Submitted                                          │   │
│  │ - Passed                                             │   │
│  │ - Rework                                             │   │
│  │ - Blocked                                            │   │
│  │ - Completed                                          │   │
│  └──────────────────────────────────────────────────────┘   │
│  ┌──────────────────────────────────────────────────────┐   │
│  │ Mission Cards List                                   │   │
│  │ Mỗi card:                                            │   │
│  │ - Title                                              │   │
│  │ - Type                                               │   │
│  │ - Status badge                                       │   │
│  │ - Objective                                          │   │
│  │ - Planned duration                                   │   │
│  │ - Actual duration                                    │   │
│  │ - Attempts count                                     │   │
│  │ - Evidence count                                     │   │
│  └──────────────────────────────────────────────────────┘   │
│  [+ New Mission]                                            │
└─────────────────────────────────────────────────────────────┘
```

**UX States:**
- Loading: skeleton loading
- Empty: "Chưa có mission. Tạo từ Week Plan."
- Normal: hiển thị đầy đủ
- Error: "Không thể tải missions. Thử lại."

---

### 3.9 Mission Detail

**Mục đích:** Chi tiết mission, attempts, evidence, review.

**Layout:**

```
┌─────────────────────────────────────────────────────────────┐
│  Breadcrumb: Missions / Mission Title                       │
├─────────────────────────────────────────────────────────────┤
│  ┌──────────────────────────────────────────────────────┐   │
│  │ Mission Header                                       │   │
│  │ - Title + Status badge                               │   │
│  │ - Type                                               │   │
│  │ - Objective                                          │   │
│  │ - Expected Output                                    │   │
│  │ - Acceptance Criteria                                │   │
│  │ - Skill Mapping                                       │   │
│  │ - Planned vs Actual Duration                         │   │
│  └──────────────────────────────────────────────────────┘   │
│  ┌─────────────────────┐  ┌──────────────────────────────┐  │
│  │ Attempts            │  │ Evidence                    │  │
│  │ - List attempts     │  │ - List evidence             │  │
│  │ - Start new attempt │  │ - Add evidence              │  │
│  └─────────────────────┘  └──────────────────────────────┘  │
│  ┌─────────────────────┐  ┌──────────────────────────────┐  │
│  │ Review Status       │  │ Blockers                    │  │
│  │ - Passed/Rework     │  │ - List blockers             │  │
│  │ - Review notes      │  │ - Add blocker               │  │
│  └─────────────────────┘  └──────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

**Data hiển thị:**
- Title
- Type
- Objective
- Expected Output
- Acceptance Criteria
- Skill Mapping
- Planned Duration
- Actual Duration
- Attempts
- Evidence
- Review Status
- Blockers

**UX States:**
- Loading: skeleton loading
- Empty: "Chưa có attempt. Bắt đầu attempt đầu tiên."
- Normal: hiển thị đầy đủ
- Error: "Không thể tải mission. Thử lại."
- Blocked: "Mission bị blocked. Ghi lý do."

---

### 3.10 Mission Attempt

**Mục đích:** Thực hiện mission attempt.

**Layout:**

```
┌─────────────────────────────────────────────────────────────┐
│  Breadcrumb: Missions / Mission / Attempt                   │
├─────────────────────────────────────────────────────────────┤
│  ┌──────────────────────────────────────────────────────┐   │
│  │ Attempt Timer                                        │   │
│  │ - Start/Pause/Resume/End                             │   │
│  │ - Duration                                           │   │
│  └──────────────────────────────────────────────────────┘   │
│  ┌──────────────────────────────────────────────────────┐   │
│  │ Note Editor                                          │   │
│  │ - Ghi chú trong lúc thực hiện                        │   │
│  └──────────────────────────────────────────────────────┘   │
│  ┌──────────────────────────────────────────────────────┐   │
│  │ End Attempt Form                                     │   │
│  │ - Lesson learned                                     │   │
│  │ - Blocker (nếu có)                                   │   │
│  │ - Output link                                        │   │
│  │ - Evidence attachment/reference                      │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

**Data hiển thị:**
- Start
- Pause/End
- Note
- Duration
- Blocker
- Lesson Learned
- Output Link
- Evidence Attachment/Reference

**UX States:**
- Loading: skeleton loading
- Empty: "Chưa có attempt nào. Bắt đầu attempt đầu tiên."
- Normal: timer + note + actions
- Error: "Không thể lưu attempt. Thử lại."
- Success: "Attempt đã lưu thành công."
- Blocked: "Mission bị blocked. Ghi lý do."

---

### 3.11 Projects

**Mục đích:** Danh sách projects.

**Layout:**

```
┌─────────────────────────────────────────────────────────────┐
│  Topbar: Projects | Filter theo status                      │
├─────────────────────────────────────────────────────────────┤
│  ┌──────────────────────────────────────────────────────┐   │
│  │ Project Cards Grid                                   │   │
│  │ Mỗi card:                                            │   │
│  │ - Project name                                       │   │
│  │ - Problem                                            │   │
│  │ - Goal                                               │   │
│  │ - Status                                             │   │
│  │ - Progress                                           │   │
│  │ - Skills involved                                    │   │
│  │ - Evidence count                                     │   │
│  └──────────────────────────────────────────────────────┘   │
│  [+ New Project]                                            │
└─────────────────────────────────────────────────────────────┘
```

**UX States:**
- Loading: skeleton loading
- Empty: "Chưa có project. Tạo project đầu tiên."
- Normal: hiển thị đầy đủ
- Error: "Không thể tải projects. Thử lại."

---

### 3.12 Project Detail

**Mục đích:** Chi tiết project, milestones, deliverables, evidence.

**Layout:**

```
┌─────────────────────────────────────────────────────────────┐
│  Breadcrumb: Projects / Project Name                        │
├─────────────────────────────────────────────────────────────┤
│  ┌──────────────────────────────────────────────────────┐   │
│  │ Project Header                                       │   │
│  │ - Problem                                            │   │
│  │ - Business Context                                   │   │
│  │ - Goal                                               │   │
│  │ - Requirements                                       │   │
│  │ - Skills                                             │   │
│  └──────────────────────────────────────────────────────┘   │
│  ┌──────────────────────────────────────────────────────┐   │
│  │ Milestones                                           │   │
│  │ - List milestones + progress                         │   │
│  └──────────────────────────────────────────────────────┘   │
│  ┌──────────────────────────────────────────────────────┐   │
│  │ Deliverables                                         │   │
│  │ - List deliverables                                  │   │
│  └──────────────────────────────────────────────────────┘   │
│  ┌──────────────────────────────────────────────────────┐   │
│  │ Evidence                                             │   │
│  │ - List evidence linked                               │   │
│  └──────────────────────────────────────────────────────┘   │
│  ┌──────────────────────────────────────────────────────┐   │
│  │ Outcome + Retrospective + Case Study                 │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

**Data hiển thị:**
- Problem
- Business Context
- Goal
- Requirements
- Skills
- Milestones
- Deliverables
- Evidence
- Outcome
- Retrospective
- Case Study

**UX States:**
- Loading: skeleton loading
- Empty: "Chưa có dữ liệu project."
- Normal: hiển thị đầy đủ
- Error: "Không thể tải project. Thử lại."

---

### 3.13 Evidence

**Mục đích:** Evidence library.

**Layout:**

```
┌─────────────────────────────────────────────────────────────┐
│  Topbar: Evidence | Filter: type/status                     │
├─────────────────────────────────────────────────────────────┤
│  ┌──────────────────────────────────────────────────────┐   │
│  │ Type Filter                                          │   │
│  │ - Live Website, GitHub, Screenshot, Figma, Audit,    │   │
│  │   Report, Dashboard, Campaign, Tracking Setup,       │   │
│  │   Automation, Case Study, Document, Certificate,     │   │
│  │   Other                                              │   │
│  └──────────────────────────────────────────────────────┘   │
│  ┌──────────────────────────────────────────────────────┐   │
│  │ Status Filter                                        │   │
│  │ - Recorded / Reviewed / Verified                     │   │
│  └──────────────────────────────────────────────────────┘   │
│  ┌──────────────────────────────────────────────────────┐   │
│  │ Evidence Cards Grid                                  │   │
│  │ Mỗi card:                                            │   │
│  │ - Type badge                                         │   │
│  │ - Status badge                                       │   │
│  │ - Title                                              │   │
│  │ - Linked mission/project                             │   │
│  │ - Date                                               │   │
│  └──────────────────────────────────────────────────────┘   │
│  [+ New Evidence]                                           │
└─────────────────────────────────────────────────────────────┘
```

**UX States:**
- Loading: skeleton loading
- Empty: "Chưa có evidence. Hoàn thành mission để tạo."
- Normal: hiển thị đầy đủ
- Error: "Không thể tải evidence. Thử lại."

---

### 3.14 Analytics

**Mục đích:** Data dashboard — không vanity metrics.

**Layout:**

```
┌─────────────────────────────────────────────────────────────┐
│  Topbar: Analytics | Time range selector                    │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────────────┐  ┌──────────────────────────────┐  │
│  │ Planned vs Actual   │  │ Mission Completion           │  │
│  │ Hours               │  │ Rate                         │  │
│  └─────────────────────┘  └──────────────────────────────┘  │
│  ┌─────────────────────┐  ┌──────────────────────────────┐  │
│  │ Review Pass Rate    │  │ Rework Rate                  │  │
│  └─────────────────────┘  └──────────────────────────────┘  │
│  ┌─────────────────────┐  ┌──────────────────────────────┐  │
│  │ Evidence Generation │  │ Skill Progress               │  │
│  └─────────────────────┘  └──────────────────────────────┘  │
│  ┌─────────────────────┐  ┌──────────────────────────────┐  │
│  │ Project Progress    │  │ Consistency                  │  │
│  └─────────────────────┘  └──────────────────────────────┘  │
│  ┌─────────────────────┐  ┌──────────────────────────────┐  │
│  │ Language Progress   │  │ Workload + Blocked Reasons   │  │
│  └─────────────────────┘  └──────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

**Data hiển thị:**
- Planned vs Actual Hours
- Mission Completion Rate
- Review Pass Rate
- Rework Rate
- Evidence Generation
- Skill Progress
- Project Progress
- Consistency
- Language Progress
- Workload
- Blocked Reasons

**UX States:**
- Loading: skeleton loading
- Empty: "Chưa đủ dữ liệu. Cần ít nhất 1 tuần hoạt động."
- Normal: hiển thị đầy đủ
- Error: "Không thể tải analytics. Thử lại."

---

### 3.15 AI Mentor

**Mục đích:** 5 chế độ AI Mentor, data-driven recommendations.

**Layout:**

```
┌─────────────────────────────────────────────────────────────┐
│  Topbar: AI Mentor | Mode selector                          │
├─────────────────────────────────────────────────────────────┤
│  ┌──────────────────────────────────────────────────────┐   │
│  │ Mode Tabs                                             │   │
│  │ 1. Daily Coach                                        │   │
│  │ 2. Weekly Reviewer                                    │   │
│  │ 3. Skill Gap Analyst                                  │   │
│  │ 4. Roadmap Advisor                                    │   │
│  │ 5. Project Reviewer                                   │   │
│  └──────────────────────────────────────────────────────┘   │
│  ┌──────────────────────────────────────────────────────┐   │
│  │ AI Recommendation Card                               │   │
│  │ - Data-driven explanation                            │   │
│  │ - Evidence references                                │   │
│  │ - Approve/Reject buttons                             │   │
│  └──────────────────────────────────────────────────────┘   │
│  ┌──────────────────────────────────────────────────────┐   │
│  │ Supporting Data                                      │   │
│  │ - Charts, tables, evidence links                     │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

**UX States:**
- Loading: skeleton loading
- Empty: "Chưa đủ dữ liệu để phân tích. Hoàn thành mission đầu tiên."
- Normal: hiển thị đầy đủ
- Error: "Không thể tải AI recommendation. Thử lại."
- Blocked: "AI không thể phân tích do thiếu dữ liệu."

---

### 3.16 Reviews

**Mục đích:** Weekly review + mission reviews.

**Layout:**

```
┌─────────────────────────────────────────────────────────────┐
│  Topbar: Reviews | Week selector                            │
├─────────────────────────────────────────────────────────────┤
│  ┌──────────────────────────────────────────────────────┐   │
│  │ Weekly Review Card                                   │   │
│  │ - What was planned?                                  │   │
│  │ - What was completed?                                │   │
│  │ - What passed?                                       │   │
│  │ - What failed?                                       │   │
│  │ - What required rework?                              │   │
│  │ - What evidence was produced?                        │   │
│  │ - What caused blockers?                              │   │
│  │ - Which skill improved?                              │   │
│  │ - Which skill is weak?                               │   │
│  │ - Should next week change?                           │   │
│  └──────────────────────────────────────────────────────┘   │
│  ┌──────────────────────────────────────────────────────┐   │
│  │ AI Weekly Reviewer Recommendation                    │   │
│  │ - Data-driven                                        │   │
│  │ - Approve/Reject                                     │   │
│  └──────────────────────────────────────────────────────┘   │
│  ┌──────────────────────────────────────────────────────┐   │
│  │ Mission Reviews List                                 │   │
│  │ - Passed/Rework per mission                          │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

**UX States:**
- Loading: skeleton loading
- Empty: "Chưa có review cho tuần này."
- Normal: hiển thị đầy đủ
- Error: "Không thể tải reviews. Thử lại."

---

### 3.17 Career Profile

**Mục đích:** Career goal, target role, profile.

**Layout:**

```
┌─────────────────────────────────────────────────────────────┐
│  Topbar: Career Profile                                     │
├─────────────────────────────────────────────────────────────┤
│  ┌──────────────────────────────────────────────────────┐   │
│  │ Career Goal                                          │   │
│  │ - Digital Solutions Consultant                       │   │
│  │ - 30-month timeline                                  │   │
│  └──────────────────────────────────────────────────────┘   │
│  ┌──────────────────────────────────────────────────────┐   │
│  │ Target Role Requirements                             │   │
│  │ - Skills needed                                      │   │
│  │ - Experience needed                                  │   │
│  │ - Portfolio needed                                   │   │
│  └──────────────────────────────────────────────────────┘   │
│  ┌──────────────────────────────────────────────────────┐   │
│  │ Current Status                                       │   │
│  │ - Current phase                                      │   │
│  │ - Month x/30                                         │   │
│  │ - Overall progress                                   │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

**UX States:**
- Loading: skeleton loading
- Empty: "Chưa có career profile. Khởi tạo."
- Normal: hiển thị đầy đủ
- Error: "Không thể tải profile. Thử lại."

---

### 3.18 Settings

**Mục đích:** Cài đặt hệ thống.

**Layout:**

```
┌─────────────────────────────────────────────────────────────┐
│  Topbar: Settings                                            │
├─────────────────────────────────────────────────────────────┤
│  ┌──────────────────────────────────────────────────────┐   │
│  │ Workload Presets                                     │   │
│  │ - Recovery: 8–10h                                    │   │
│  │ - Busy: 12–14h                                       │   │
│  │ - Normal: 17.5h                                      │   │
│  │ - Sprint: 20–22h                                     │   │
│  └──────────────────────────────────────────────────────┘   │
│  ┌──────────────────────────────────────────────────────┐   │
│  │ AI Settings                                          │   │
│  │ - Adaptive state thresholds                          │   │
│  │ - AI recommendation frequency                        │   │
│  └──────────────────────────────────────────────────────┘   │
│  ┌──────────────────────────────────────────────────────┐   │
│  │ Language Settings                                    │   │
│  │ - English target (TOEIC)                             │   │
│  │ - Chinese target (HSK)                               │   │
│  └──────────────────────────────────────────────────────┘   │
│  ┌──────────────────────────────────────────────────────┐   │
│  │ Data & Storage                                       │   │
│  │ - Local data management                              │   │
│  │ - Export/Import                                      │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

**UX States:**
- Loading: skeleton loading
- Normal: hiển thị đầy đủ
- Error: "Không thể lưu settings. Thử lại."
- Success: "Settings đã lưu."

---

## 4. Mobile Priority

Mobile ưu tiên các màn hình:

| Priority | Screen | Lý do |
|----------|--------|-------|
| P0 | Today | Thực hiện mission hàng ngày |
| P0 | Mission | Xem và thực hiện mission |
| P0 | Evidence | Ghi evidence nhanh |
| P0 | AI Mentor | Xem recommendation |
| P0 | Weekly Review | Review cuối tuần |
| P1 | Dashboard | Tổng quan nhanh |
| P1 | Week Plan | Xem kế hoạch |
| P2 | Roadmap | Xem roadmap |
| P2 | Skills | Xem skill |
| P2 | Analytics | Xem data |
| P3 | Learning | Tạo session |
| P3 | Knowledge | Xem ghi chú |
| P3 | Projects | Xem project |
| P3 | Settings | Cài đặt |