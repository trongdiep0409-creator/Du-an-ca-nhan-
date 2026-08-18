# 03 — Core User Flow

## 1. Overview

Core user flow mô tả hành trình chính của người dùng trong Titan OS, từ khi bắt đầu ngày mới đến khi hoàn thành vòng lặp phát triển nghề nghiệp.

---

## 2. Daily Flow

### 2.1 Morning — Daily Brief

```
┌─────────────────────────────────────────────────────────┐
│  BẮT ĐẦU NGÀY MỚI                                      │
├─────────────────────────────────────────────────────────┤
│  1. Mở Dashboard                                        │
│  2. Xem Current Phase + Month x/30                      │
│  3. Xem Current Focus                                   │
│  4. Xem AI Daily Brief (AI observe → analyze → recommend)│
│  5. Xem Today Primary Mission                           │
│  6. Xem Supporting Missions                             │
│  7. Xem Language Session                                │
│  8. Xem Weekly Progress                                 │
│  9. Xem Blocked Items (nếu có)                          │
│  10. Quyết định: Approve/Reject AI recommendation       │
└─────────────────────────────────────────────────────────┘
```

**UX States:**
- Loading: skeleton loading
- Empty: "Chưa có mission hôm nay. Tạo từ Week Plan."
- Normal: hiển thị đầy đủ
- Error: "Không thể tải dữ liệu. Thử lại."
- Blocked: hiển thị blocked items với lý do

### 2.2 Execution — Mission Attempt

```
┌─────────────────────────────────────────────────────────┐
│  THỰC HIỆN MISSION                                     │
├─────────────────────────────────────────────────────────┤
│  1. Mở Today → Primary Mission (visually dominant)      │
│  2. Click "Start" → Mission Attempt bắt đầu             │
│  3. Thực hiện công việc (Learning / Practice / Build)   │
│  4. Ghi note trong attempt                              │
│  5. Pause/Resume nếu cần                                │
│  6. Kết thúc attempt → End attempt                      │
│  7. Ghi lesson learned                                  │
│  8. Ghi blocker (nếu có)                                │
│  9. Đính kèm output link / evidence                     │
│  10. Submit mission                                     │
└─────────────────────────────────────────────────────────┘
```

**UX States:**
- Loading: skeleton loading
- Empty: "Chưa có attempt nào. Bắt đầu attempt đầu tiên."
- Normal: timer + note + actions
- Error: "Không thể lưu attempt. Thử lại."
- Success: "Attempt đã lưu thành công."
- Blocked: "Mission bị blocked. Ghi lý do."

### 2.3 End of Day — Review

```
┌─────────────────────────────────────────────────────────┐
│  KẾT THÚC NGÀY                                         │
├─────────────────────────────────────────────────────────┤
│  1. Xem danh sách mission đã hoàn thành hôm nay         │
│  2. Xem evidence đã tạo                                 │
│  3. Ghi end-of-day review                               │
│  4. Xem AI daily summary                                │
│  5. Xem AI recommendation cho ngày mai                  │
│  6. Approve/Reject recommendation                       │
└─────────────────────────────────────────────────────────┘
```

---

## 3. Weekly Flow

### 3.1 Week Planning

```
┌─────────────────────────────────────────────────────────┐
│  LẬP KẾ HOẠCH TUẦN                                     │
├─────────────────────────────────────────────────────────┤
│  1. Mở Week Plan                                        │
│  2. Xem Weekly Capacity (preset: Recovery/Busy/Normal/Sprint)│
│  3. Xem AI đề xuất workload                             │
│  4. Approve/Reject AI workload đề xuất                  │
│  5. Xác định Main Focus                                 │
│  6. Xác định Supporting Skills (tối đa 2)               │
│  7. Tạo missions cho tuần                               │
│  8. Phân bổ language sessions                           │
│  9. Phân bổ project work                                │
│  10. Lên lịch review session                            │
│  11. Kiểm tra capacity utilization                      │
└─────────────────────────────────────────────────────────┘
```

**UX States:**
- Loading: skeleton loading
- Empty: "Chưa có kế hoạch tuần này. Tạo mới."
- Normal: hiển thị đầy đủ
- Error: "Không thể lưu kế hoạch. Thử lại."
- Success: "Kế hoạch tuần đã lưu."
- Warning: "Workload vượt capacity X giờ. Giảm bớt hoặc confirm override."

### 3.2 Capacity Override Flow

```
┌─────────────────────────────────────────────────────────┐
│  WORKLOAD VƯỢT CAPACITY                                 │
├─────────────────────────────────────────────────────────┤
│  1. User tạo mission vượt capacity                       │
│  2. UI hiển thị warning                                  │
│  3. UI hiển thị số giờ vượt capacity                     │
│  4. AI đề xuất không overload (không bắt buộc)           │
│  5. User lựa chọn:                                       │
│     - Giảm workload (bớt mission)                       │
│     - HOẶC Confirm override (giữ nguyên)                 │
│  6. AI không được tự chặn user                           │
└─────────────────────────────────────────────────────────┘
```

### 3.3 Weekly Review

```
┌─────────────────────────────────────────────────────────┐
│  REVIEW CUỐI TUẦN                                      │
├─────────────────────────────────────────────────────────┤
│  1. Mở Reviews → Weekly Review                          │
│  2. Xem What was planned?                               │
│  3. Xem What was completed?                             │
│  4. Xem What passed?                                    │
│  5. Xem What failed?                                    │
│  6. Xem What required rework?                           │
│  7. Xem What evidence was produced?                     │
│  8. Xem What caused blockers?                           │
│  9. Xem Which skill improved?                           │
│  10. Xem Which skill is weak?                           │
│  11. Xem AI Weekly Reviewer recommendation               │
│  12. Approve/Reject recommendation                      │
│  13. Quyết định: Should next week change?               │
└─────────────────────────────────────────────────────────┘
```

---

## 4. Mission Lifecycle Flow

```
┌─────────────────────────────────────────────────────────┐
│  MISSION LIFECYCLE                                      │
├─────────────────────────────────────────────────────────┤
│  Planned ──→ In Progress ──→ Submitted ──→ Passed       │
│     │              │              │         │           │
│     │              │              │         ▼           │
│     │              │              │     Completed       │
│     │              │              │                     │
│     │              │              └──→ Rework ──→ In Progress
│     │              │                                     │
│     │              └──→ Blocked ──→ Unblocked ──→ In Progress
│     │                                                    │
│     └──→ Cancelled                                       │
└─────────────────────────────────────────────────────────┘
```

**Completed chỉ xảy ra khi:**
1. Output tồn tại
2. Evidence tồn tại
3. Acceptance criteria đạt
4. Review = Passed

---

## 5. Evidence Flow

```
┌─────────────────────────────────────────────────────────┐
│  EVIDENCE LIFECYCLE                                     │
├─────────────────────────────────────────────────────────┤
│  Recorded ──→ Reviewed ──→ Verified                     │
│     │            │              │                       │
│     │            │              └──→ (không downgrade)  │
│     │            └──→ Rejected                           │
│     └──→ Deleted                                         │
└─────────────────────────────────────────────────────────┘
```

**Rules:**
- Evidence `Verified` không được tự động downgrade
- Evidence phải được link với mission/project
- Evidence là điều kiện bắt buộc cho mission Completed

---

## 6. Google Skills Flow

```
┌─────────────────────────────────────────────────────────┐
│  GOOGLE SKILLS FLOW                                     │
├─────────────────────────────────────────────────────────┤
│  1. Chọn Google skill từ 8 skills trackables            │
│     - Google Ads Fundamentals (Paid Media)              │
│     - Search Campaigns (Paid Media)                     │
│     - Performance Max PMax (Paid Media)                 │
│     - Google Merchant Center (Paid Media)               │
│     - Google Search Console (SEO)                       │
│     - GA4 (Analytics & Data)                            │
│     - Google Tag Manager (Analytics & Data)             │
│     - Looker Studio (Analytics & Data)                  │
│  2. Domain → Skill → Mission                            │
│  3. Thực hiện Practice                                  │
│  4. Liên kết với Project nếu có                         │
│  5. Tạo Evidence (Campaign, Dashboard, Audit, Report)   │
│  6. Review evidence                                     │
│  7. Cập nhật Skill Progress                             │
└─────────────────────────────────────────────────────────┘
```

---

## 7. Skill Progression Flow

```
┌─────────────────────────────────────────────────────────┐
│  SKILL PROGRESSION                                      │
├─────────────────────────────────────────────────────────┤
│  1. Mission Completed (có evidence)                     │
│  2. Evidence được review + verify                       │
│  3. Skill được mapping với mission                      │
│  4. Evidence strength tăng                              │
│  5. Skill level tăng (dựa trên evidence, không phải giờ)│
│  6. Skill matrix cập nhật                               │
│  7. Analytics phản ánh                                  │
│  8. AI Skill Gap Analyst phân tích                      │
│  9. AI đề xuất focus mới                                │
│  10. User approve/reject                                │
└─────────────────────────────────────────────────────────┘
```

---

## 8. AI Adaptive Flow

```
┌─────────────────────────────────────────────────────────┐
│  AI ADAPTIVE FLOW                                       │
├─────────────────────────────────────────────────────────┤
│  1. AI observe: thu thập dữ liệu                        │
│     - Mission completion rate                           │
│     - Evidence generation                               │
│     - Review pass rate                                  │
│     - Rework rate                                       │
│     - Blocked reasons                                   │
│     - Actual hours vs planned                           │
│  2. AI analyze: phân tích                               │
│     - Xác định adaptive state (AHEAD/ON TRACK/AT RISK/BLOCKED)│
│     - Xác định skill gaps                               │
│     - Xác định blockers                                 │
│  3. AI recommend: đề xuất                               │
│     - Điều chỉnh workload                               │
│     - Điều chỉnh focus                                  │
│     - Điều chỉnh roadmap (ADAPTIVE items only)          │
│  4. User review: xem xét                                │
│  5. User approve/reject                                 │
│  6. Nếu approve: áp dụng thay đổi + log revision        │
│  7. Nếu reject: giữ nguyên, ghi lý do                   │
└─────────────────────────────────────────────────────────┘
```

**Bắt buộc:**
- AI không được tự thay đổi LOCKED roadmap items
- AI chỉ được đề xuất thay đổi ADAPTIVE items
- Mọi thay đổi phải có user approval
- Mọi thay đổi roadmap phải được log

---

## 9. Project Flow

```
┌─────────────────────────────────────────────────────────┐
│  PROJECT LIFECYCLE                                      │
├─────────────────────────────────────────────────────────┤
│  1. Xác định problem                                    │
│  2. Xác định business context                           │
│  3. Xác định goal                                       │
│  4. Xác định requirements                               │
│  5. Xác định skills liên quan                           │
│  6. Tạo milestones                                      │
│  7. Tạo deliverables                                    │
│  8. Thực hiện missions (liên kết với project)           │
│  9. Thu thập evidence                                   │
│  10. Đánh giá outcome                                   │
│  11. Retrospective                                      │
│  12. Tạo case study                                     │
└─────────────────────────────────────────────────────────┘
```

---

## 10. Learning Flow

```
┌─────────────────────────────────────────────────────────┐
│  LEARNING SESSION                                       │
├─────────────────────────────────────────────────────────┤
│  1. Chọn skill                                          │
│  2. Chọn topic                                          │
│  3. Chọn source                                         │
│  4. Ghi duration                                        │
│  5. Ghi notes                                           │
│  6. Thực hành (practice)                                │
│  7. Tạo output                                          │
│  8. Đánh giá usefulness                                 │
│  9. Link với mission (nếu có)                           │
│  10. Lưu learning session                               │
└─────────────────────────────────────────────────────────┘
```

**Phân biệt:**
- Learning ≠ Evidence
- Learning là quá trình học
- Evidence là bằng chứng năng lực

---

## 11. Knowledge Flow

```
┌─────────────────────────────────────────────────────────┐
│  KNOWLEDGE BASE                                         │
├─────────────────────────────────────────────────────────┤
│  1. Tạo note/concept/checklist/troubleshooting          │
│  2. Gắn tag                                             │
│  3. Gắn domain                                          │
│  4. Gắn skill                                           │
│  5. Link với project/mission (nếu có)                   │
│  6. Lưu knowledge item                                  │
│  7. Tìm kiếm khi cần                                    │
│  8. Tái sử dụng trong mission/project                   │
└─────────────────────────────────────────────────────────┘
```

---

## 12. Language Flow

```
┌─────────────────────────────────────────────────────────┐
│  LANGUAGE SESSION                                       │
├─────────────────────────────────────────────────────────┤
│  1. Chọn ngôn ngữ (English/Chinese)                     │
│  2. Chọn kỹ năng (listening/vocabulary/reading/...)     │
│  3. Thực hiện session                                   │
│  4. Ghi duration                                        │
│  5. Ghi notes                                           │
│  6. Tạo output (nếu có)                                 │
│  7. Cập nhật progress (TOEIC/HSK)                       │
│  8. Lưu session                                         │
└─────────────────────────────────────────────────────────┘
```

---

## 13. Edge Cases

### 13.1 Mission Blocked
- User ghi blocker reason
- Mission chuyển sang Blocked
- AI phân tích blocker pattern
- AI đề xuất giải pháp
- User approve → Unblocked

### 13.2 Mission Rework
- Review = Rework
- Mission quay lại In Progress
- User thực hiện lại
- Submit lại → Review lại

### 13.3 Capacity Overload
- User tạo mission vượt capacity
- UI hiển thị warning + số giờ vượt capacity
- User có thể giảm workload HOẶC confirm override
- AI có thể đề xuất không overload nhưng không tự chặn user

### 13.4 Missing Prerequisite
- Mission yêu cầu skill chưa đạt
- UI hiển thị warning
- AI đề xuất học prerequisite trước

### 13.5 Evidence Rejected
- Evidence bị reject
- User phải tạo evidence mới
- Mission không thể Completed

---

## 14. UX State Coverage

Mỗi screen quan trọng phải hỗ trợ đầy đủ:

| State | Mô tả | Ví dụ |
|-------|-------|-------|
| **Loading** | Đang tải dữ liệu | Skeleton loading |
| **Empty** | Không có dữ liệu | "Chưa có mission" |
| **Normal** | Dữ liệu đầy đủ | Hiển thị bình thường |
| **Error** | Lỗi xảy ra | "Không thể tải dữ liệu" |
| **Success** | Thao tác thành công | "Đã lưu thành công" |
| **Blocked** | Bị chặn | "Mission bị blocked" |
| **Disabled** | Không khả dụng | "Không thể lưu" |
| **Warning** | Cảnh báo vượt capacity | "Workload vượt capacity X giờ" |