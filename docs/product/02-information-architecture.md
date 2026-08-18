# 02 — Information Architecture

## 1. Navigation Structure

Sidebar chính với 5 nhóm chức năng:

```
┌─────────────────────────────────────────────┐
│  TITAN OS                                   │
├─────────────────────────────────────────────┤
│  TODAY                                      │
│  ├── Dashboard                              │
│  ├── Today                                  │
│  └── Week Plan                              │
├─────────────────────────────────────────────┤
│  GROWTH                                     │
│  ├── Roadmap                                │
│  ├── Skills                                 │
│  ├── Learning                               │
│  └── Knowledge                              │
├─────────────────────────────────────────────┤
│  WORK                                       │
│  ├── Missions                               │
│  ├── Projects                               │
│  └── Evidence                               │
├─────────────────────────────────────────────┤
│  INTELLIGENCE                               │
│  ├── Analytics                              │
│  ├── AI Mentor                              │
│  └── Reviews                                │
├─────────────────────────────────────────────┤
│  SYSTEM                                     │
│  ├── Career Profile                         │
│  └── Settings                               │
└─────────────────────────────────────────────┘
```

---

## 2. Screen Hierarchy

### 2.1 Today Group

| Screen | Route | Mục đích |
|--------|-------|----------|
| Dashboard | `/` | Tổng quan trạng thái, focus, tiến độ, AI recommendation |
| Today | `/today` | Daily execution screen — Primary Mission + Supporting Missions |
| Week Plan | `/week` | Kế hoạch tuần, capacity, missions, review session |

### 2.2 Growth Group

| Screen | Route | Mục đích |
|--------|-------|----------|
| Roadmap | `/roadmap` | 30-month roadmap, 5 stages, milestones, revisions |
| Skills | `/skills` | Skill matrix 9 domain, levels, evidence strength |
| Learning | `/learning` | Learning sessions, topics, sources, notes |
| Knowledge | `/knowledge` | Personal knowledge base, notes, concepts, checklists |

### 2.3 Work Group

| Screen | Route | Mục đích |
|--------|-------|----------|
| Missions | `/missions` | Danh sách mission, filter theo status/type |
| Projects | `/projects` | Projects, deliverables, case studies |
| Evidence | `/evidence` | Evidence library, types, statuses |

### 2.4 Intelligence Group

| Screen | Route | Mục đích |
|--------|-------|----------|
| Analytics | `/analytics` | Data dashboard, trends, insights |
| AI Mentor | `/ai-mentor` | 5 chế độ AI Mentor |
| Reviews | `/reviews` | Weekly review, mission reviews |

### 2.5 System Group

| Screen | Route | Mục đích |
|--------|-------|----------|
| Career Profile | `/profile` | Career goal, target role, profile |
| Settings | `/settings` | Cài đặt hệ thống, workload presets |

---

## 3. Detail Screens (Sub-screens)

### 3.1 Mission Detail
- Route: `/missions/:id`
- Hiển thị: title, type, objective, expected output, acceptance criteria, skill mapping, planned/actual duration, attempts, evidence, review status, blockers

### 3.2 Mission Attempt
- Route: `/missions/:id/attempts/:attemptId`
- Hiển thị: start, pause/end, note, duration, blocker, lesson learned, output link, evidence attachment

### 3.3 Project Detail
- Route: `/projects/:id`
- Hiển thị: problem, business context, goal, requirements, skills, milestones, deliverables, evidence, outcome, retrospective, case study

### 3.4 Evidence Detail
- Route: `/evidence/:id`
- Hiển thị: type, status, linked mission, linked project, verification

### 3.5 Skill Detail
- Route: `/skills/:id`
- Hiển thị: current level, target level, evidence strength, last practiced, review pass rate, rework rate, project usage, status

### 3.6 Learning Session Detail
- Route: `/learning/:id`
- Hiển thị: skill, topic, source, duration, notes, practice, output, usefulness, linked mission

### 3.7 Knowledge Item Detail
- Route: `/knowledge/:id`
- Hiển thị: notes, concepts, checklists, troubleshooting, lessons learned, reusable processes

### 3.8 Weekly Review Detail
- Route: `/reviews/:weekId`
- Hiển thị: planned vs completed, passed/failed, rework, evidence, blockers, skill changes, next week changes

### 3.9 AI Mentor Conversation
- Route: `/ai-mentor/:mode`
- Hiển thị: 5 modes, data-driven recommendations, approval flow

---

## 4. Data Relationships

```
Career Goal (1) ──→ Roadmap (1) ──→ Stage (5) ──→ Month (30)
                                                    │
                                                    ▼
                                              Current Focus (1 Main + 2 Supporting)
                                                    │
                                                    ▼
                                              Weekly Plan (1/tuần)
                                                    │
                                                    ▼
                                              Daily Mission (Primary + Supporting)
                                                    │
                                                    ▼
                                              Mission Attempt (nhiều)
                                                    │
                                                    ▼
                                              Output ──→ Evidence ──→ Review
                                                    │                    │
                                                    ▼                    ▼
                                              Skill Progress        Skill Matrix
                                                    │
                                                    ▼
                                              Analytics ──→ AI Mentor ──→ Adaptive Recommendation
                                                                              │
                                                                              ▼
                                                                        User Approval
                                                                              │
                                                                              ▼
                                                                        Roadmap Revision
```

---

## 5. Navigation Rules

### 5.1 Global Navigation
- Sidebar luôn hiển thị trên desktop
- Mobile: hamburger menu + bottom navigation (Today, Missions, AI Mentor, Analytics)
- Breadcrumb cho detail screens

### 5.2 Contextual Navigation
- Dashboard → Today (Primary Mission)
- Dashboard → Week Plan (Weekly Progress)
- Mission → Attempt → Evidence
- Project → Missions → Evidence
- Skill → Learning → Mission
- AI Mentor → Recommendation → Approval

### 5.3 Quick Actions
- Topbar: Command/Search (⌘K)
- Quick start mission từ Today
- Quick add evidence từ Mission

---

## 6. Information Priority

### 6.1 Dashboard Priority
1. Current Phase + Month x/30
2. Current Focus
3. Today Primary Mission
4. Weekly Progress
5. AI Recommendation
6. Skill Health
7. Evidence Generated
8. Streak
9. Blocked Items

### 6.2 Today Priority
1. Date + Capacity
2. Primary Mission (visually dominant)
3. Supporting Missions
4. Language Session
5. AI Daily Brief
6. Quick Start
7. Current Attempt
8. End-of-Day Review

### 6.3 Week Plan Priority
1. Weekly Capacity
2. Planned vs Actual Hours
3. Main Focus
4. Supporting Skills
5. Missions
6. Language Sessions
7. Project Work
8. Review Session

---

## 7. Search & Command

### 7.1 Command Palette (⌘K)
- Tìm mission, project, evidence, skill, knowledge
- Quick actions: start mission, add evidence, create note
- Navigate nhanh giữa các screens

### 7.2 Search
- Global search trong Knowledge
- Filter theo tag, domain, skill
- Kết quả hiển thị context

---

## 8. Empty States

Mỗi screen phải có empty state thiết kế riêng:

| Screen | Empty State Message |
|--------|---------------------|
| Dashboard | "Chưa có dữ liệu. Bắt đầu với Week Plan đầu tiên." |
| Today | "Chưa có mission hôm nay. Tạo từ Week Plan." |
| Week Plan | "Chưa có kế hoạch tuần này. Tạo mới." |
| Missions | "Chưa có mission. Tạo từ Week Plan." |
| Evidence | "Chưa có evidence. Hoàn thành mission để tạo." |
| Skills | "Chưa có skill data. Bắt đầu học." |
| Knowledge | "Chưa có ghi chú. Tạo ghi chú đầu tiên." |
| Analytics | "Chưa đủ dữ liệu. Cần ít nhất 1 tuần hoạt động." |
| AI Mentor | "Chưa đủ dữ liệu để phân tích. Hoàn thành mission đầu tiên." |