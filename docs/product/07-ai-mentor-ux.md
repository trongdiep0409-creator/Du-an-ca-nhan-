# 07 — AI Mentor UX

## 1. Overview

AI Mentor không phải chatbox đơn giản. Đây là hệ thống AI hỗ trợ quyết định dựa trên dữ liệu, với 5 chế độ hoạt động.

**Nguyên tắc cốt lõi:**
- AI observe → analyze → recommend
- User review → approve/reject
- AI phải giải thích recommendation bằng dữ liệu
- AI không được thay user ra quyết định cuối cùng

---

## 2. AI Adaptive State

### 2.1 4 Trạng thái

| State | Threshold | Mô tả |
|-------|-----------|-------|
| **AHEAD** | completion > 90%, evidence strong, low rework | Đang vượt tiến độ |
| **ON TRACK** | completion 70–90%, evidence acceptable | Đúng tiến độ |
| **AT RISK** | completion 40–70%, repeated rework | Có nguy cơ chậm tiến độ |
| **BLOCKED** | completion < 40%, repeated failure hoặc thiếu prerequisite/evidence | Bị chặn |

> Threshold chỉ là baseline design; implementation sau có thể configurable trong Settings.

### 2.2 UI Hiển thị

- Status badge trên Dashboard
- Màu sắc theo design system:
  - AHEAD: Success
  - ON TRACK: Info
  - AT RISK: Warning
  - BLOCKED: Danger

### 2.3 Adaptive Flow

```
AI observe → AI analyze → AI recommend → User review → User approve/reject
```

**Bắt buộc:**
- AI không được tự thay đổi roadmap
- AI không được tự thay đổi workload
- AI không được tự thay đổi focus
- Mọi thay đổi phải có user approval

---

## 3. 5 Chế độ AI Mentor

### 3.1 Daily Coach

**Mục đích:** Hỗ trợ quyết định hàng ngày.

**Input data:**
- Today's missions
- Weekly progress
- Yesterday's performance
- Blocked items
- Skill health

**Output:**
- AI Daily Brief
- Đề xuất focus hôm nay
- Đề xuất thứ tự thực hiện mission
- Cảnh báo nếu có nguy cơ

**Ví dụ recommendation:**
> "Hôm nay bạn có 3 mission. Mission 'Deploy VPS' nên làm đầu tiên vì nó đã bị Rework 2 lần tuần trước. Evidence DNS chưa đạt, cần ưu tiên hoàn thành trước khi chuyển sang mission khác."

### 3.2 Weekly Reviewer

**Mục đích:** Review tuần, đề xuất thay đổi cho tuần sau.

**Input data:**
- Weekly plan vs actual
- Mission completion
- Review pass rate
- Rework rate
- Evidence generated
- Blocked reasons
- Skill changes

**Output:**
- Weekly review summary
- Đề xuất workload tuần sau
- Đề xuất focus tuần sau
- Đề xuất thay đổi roadmap (nếu cần)

**Ví dụ recommendation:**
> "Tuần này bạn hoàn thành 12/15 mission (80%). 3 mission bị Rework đều liên quan đến deployment. Đề xuất giảm workload tuần sau xuống Busy (14h) để tập trung fix deployment skill. Evidence DNS cần được verify trước khi chuyển sang SEO."

### 3.3 Skill Gap Analyst

**Mục đích:** Phân tích skill gaps, đề xuất focus.

**Input data:**
- Skill matrix
- Evidence strength
- Review pass rate
- Rework rate
- Project usage
- Roadmap targets

**Output:**
- Skill gap analysis
- Đề xuất skill cần ưu tiên
- Đề xuất learning path
- Đề xuất mission để tăng evidence

**Ví dụ recommendation:**
> "Skill 'DNS Configuration' đang ở Level 1 nhưng roadmap yêu cầu Level 3 vào tháng 4. Evidence strength chỉ có 1/5. Đề xuất tạo 2 mission thực hành DNS trong 2 tuần tới để tăng evidence strength lên 3/5."

### 3.4 Roadmap Advisor

**Mục đích:** Đề xuất thay đổi roadmap dựa trên dữ liệu.

**Input data:**
- Roadmap progress
- Adaptive state
- Skill progress
- Blocked patterns
- Time remaining

**Output:**
- Đề xuất điều chỉnh roadmap
- Đề xuất thay đổi milestone
- Đề xuất thay đổi focus
- Cảnh báo rủi ro

**Ví dụ recommendation:**
> "Bạn đang ở tháng 5/30, adaptive state = AT RISK. Completion rate 55% do 3 tuần liên tiếp bị blocker về VPS. Đề xuất: (1) Giảm workload tuần sau xuống Recovery, (2) Chuyển 1 mission SEO sang tháng 6, (3) Tăng 2 mission VPS practice. Bạn có approve không?"

### 3.5 Project Reviewer

**Mục đích:** Review project, đề xuất cải thiện.

**Input data:**
- Project progress
- Milestones
- Deliverables
- Evidence
- Skills involved
- Outcome

**Output:**
- Project review
- Đề xuất cải thiện
- Đề xuất case study
- Đề xuất skill development

**Ví dụ recommendation:**
> "Project 'Portfolio Website' đạt 80% milestone. Deliverable 'Contact Form' chưa hoàn thành do thiếu skill 'Form Validation'. Đề xuất tạo 1 mission học Form Validation trước khi tiếp tục. Evidence 'Live Website' đã đủ để verify skill 'HTML/CSS'."

---

## 4. AI Recommendation Card

### 4.1 Cấu trúc

```
┌─────────────────────────────────────────────────────────────┐
│  🤖 AI Mentor — Daily Coach                                 │
├─────────────────────────────────────────────────────────────┤
│  Recommendation:                                            │
│  "Giảm VPS tuần tới vì 3/5 mission deployment bị Rework     │
│   và DNS evidence chưa đạt."                                 │
├─────────────────────────────────────────────────────────────┤
│  Data Explanation:                                          │
│  - 3/5 mission deployment bị Rework (60%)                   │
│  - DNS evidence: 1/5 evidence strength                      │
│  - Adaptive state: AT RISK                                  │
│  - Tuần trước: 12/15 mission completed (80%)                │
├─────────────────────────────────────────────────────────────┤
│  [Approve]  [Reject]  [Xem chi tiết]                        │
└─────────────────────────────────────────────────────────────┘
```

### 4.2 Rules

- **Phải** có data explanation
- **Phải** có evidence references
- **Phải** có Approve/Reject buttons
- **Không được** dùng ngôn ngữ mơ hồ ("có vẻ", "nên thử")
- **Phải** dùng ngôn ngữ cụ thể, dựa trên số liệu

### 4.3 Approve/Reject Flow

**Approve:**
1. User click Approve
2. AI recommendation được áp dụng
3. Toast: "Recommendation đã được áp dụng."
4. Log được lưu

**Reject:**
1. User click Reject
2. Modal hỏi lý do reject (optional)
3. AI recommendation bị từ chối
4. Toast: "Recommendation đã bị từ chối."
5. Log được lưu

---

## 5. AI Data Sources

| Data | Nguồn |
|------|-------|
| Mission completion | Missions |
| Evidence generation | Evidence |
| Review pass rate | Reviews |
| Rework rate | Reviews |
| Blocked reasons | Mission attempts |
| Actual hours | Mission attempts |
| Planned hours | Week Plan |
| Skill levels | Skills |
| Evidence strength | Evidence |
| Project progress | Projects |
| Language progress | Language sessions |

---

## 6. AI UX States

| State | Mô tả |
|-------|-------|
| **Loading** | "AI đang phân tích dữ liệu..." |
| **Empty** | "Chưa đủ dữ liệu để phân tích. Hoàn thành mission đầu tiên." |
| **Normal** | Hiển thị recommendation đầy đủ |
| **Error** | "Không thể tạo recommendation. Thử lại." |
| **Blocked** | "AI không thể phân tích do thiếu dữ liệu." |
| **Disabled** | "AI chưa sẵn sàng. Cần ít nhất 1 tuần dữ liệu." |

---

## 7. AI Privacy & Control

- AI chỉ đọc dữ liệu local
- AI không gửi dữ liệu ra ngoài (trong Phase 1)
- User có thể tắt AI recommendation trong Settings
- User luôn có quyền approve/reject
- AI không được tự động thay đổi bất kỳ dữ liệu nào

---

## 8. AI Recommendation Log

Mỗi recommendation phải được log:

| Field | Mô tả |
|-------|-------|
| ID | Unique ID |
| Mode | Daily Coach / Weekly Reviewer / Skill Gap Analyst / Roadmap Advisor / Project Reviewer |
| Date | Ngày tạo |
| Recommendation | Nội dung đề xuất |
| Data | Dữ liệu hỗ trợ |
| Status | Pending / Approved / Rejected |
| Approved Date | Ngày approve |
| Rejected Reason | Lý do reject (nếu có) |
| Applied Changes | Thay đổi đã áp dụng (nếu approve) |