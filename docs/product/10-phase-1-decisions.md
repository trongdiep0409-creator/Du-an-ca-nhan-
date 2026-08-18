# 10 — Phase 1 Decisions

## 1. Overview

Tài liệu này ghi lại các quyết định quan trọng trong Phase 1, để developer Phase 2 hiểu rõ lý do thiết kế.

---

## 2. Product Decisions

### 2.1 Single-User Focus

**Quyết định:** Titan OS Web v1 chỉ phục vụ một người dùng duy nhất.

**Lý do:**
- Mục tiêu cá nhân hóa tối đa
- Không cần multi-user, team, billing, SaaS
- Giảm độ phức tạp hệ thống
- Tập trung vào giá trị cốt lõi: phát triển nghề nghiệp

### 2.2 Evidence First

**Quyết định:** Skill progression chỉ dựa trên evidence, không dựa trên giờ học.

**Lý do:**
- Giờ học không phản ánh năng lực thực tế
- Evidence là bằng chứng cụ thể về năng lực
- Ngăn chặn fake completion
- Đảm bảo chất lượng phát triển

### 2.3 Mission Completed Rules

**Quyết định:** Mission chỉ Completed khi:
1. Output tồn tại
2. Evidence tồn tại
3. Acceptance criteria đạt
4. Review = Passed

**Lý do:**
- Đảm bảo output thực tế
- Đảm bảo evidence thực tế
- Ngăn chặn hoàn thành giả tạo

### 2.4 One Main Focus

**Quyết định:** Luôn chỉ có 1 Main Focus + tối đa 2 Supporting Skills.

**Lý do:**
- Tránh phân tán
- Tập trung năng lượng
- Đảm bảo tiến độ thực chất

### 2.5 Weekly Capacity Presets

**Quyết định:** 4 presets workload:
- Recovery: 8–10h
- Busy: 12–14h
- Normal: 17.5h
- Sprint: 20–22h

**Lý do:**
- Linh hoạt theo tình trạng thực tế
- AI có thể đề xuất nhưng user approve
- Tránh quá tải hoặc lười biếng

---

## 3. UX Decisions

### 3.1 Sidebar Navigation

**Quyết định:** Sidebar với 6 nhóm: Today, Growth, Work, Intelligence, System.

**Lý do:**
- Phân nhóm theo mục đích sử dụng
- Today: hành động hàng ngày
- Growth: phát triển dài hạn
- Work: công việc cụ thể
- Intelligence: phân tích + AI
- System: cấu hình

### 3.2 Primary Mission Visually Dominant

**Quyết định:** Trên Today screen, Primary Mission phải visually dominant.

**Lý do:**
- Hướng sự tập trung
- Giảm quyết định
- Đảm bảo thực hiện mission quan trọng nhất

### 3.3 AI Recommendation Card

**Quyết định:** AI recommendation phải có data explanation + Approve/Reject.

**Lý do:**
- AI không được thay user quyết định
- User phải hiểu lý do
- Tăng trust vào AI

### 3.4 Mobile Bottom Navigation

**Quyết định:** Mobile dùng bottom navigation: Today, Missions, AI, Analytics, More.

**Lý do:**
- Ưu tiên các chức năng mobile chính
- Dễ thao tác bằng ngón tay
- Phù hợp mobile-first usage

### 3.5 Empty States

**Quyết định:** Mỗi screen phải có empty state riêng.

**Lý do:**
- Hướng dẫn user bắt đầu
- Tránh confusion
- Cải thiện UX

---

## 4. AI Adaptive Decisions

### 4.1 AI observe → analyze → recommend

**Quyết định:** AI chỉ observe, analyze, recommend. User review → approve/reject.

**Lý do:**
- AI không được thay user quyết định
- User giữ quyền kiểm soát
- Đảm bảo trách nhiệm

### 4.2 Adaptive State Thresholds

**Quyết định:** 4 trạng thái với threshold baseline:
- AHEAD: completion > 90%
- ON TRACK: completion 70–90%
- AT RISK: completion 40–70%
- BLOCKED: completion < 40%

**Lý do:**
- Baseline cho Phase 2
- Configurable sau này
- Phản ánh tình trạng thực tế

### 4.3 Roadmap Fixed

**Quyết định:** Roadmap 30 tháng là cố định trừ khi user approve.

**Lý do:**
- Đảm bảo định hướng dài hạn
- Tránh thay đổi tùy tiện
- AI chỉ đề xuất, không tự thực hiện

### 4.4 Evidence Verified Không Downgrade

**Quyết định:** Evidence `Verified` không được tự động downgrade.

**Lý do:**
- Đảm bảo tính ổn định
- Tránh mất dữ liệu do lỗi hệ thống
- Chỉ thay đổi khi có lý do chính đáng

---

## 5. Technical Decisions

### 5.1 Web-First

**Quyết định:** Web-first, responsive desktop + mobile.

**Lý do:**
- Dễ triển khai
- Dễ bảo trì
- Dùng được trên mọi thiết bị

### 5.2 Local-First

**Quyết định:** Dữ liệu ưu tiên lưu local.

**Lý do:**
- Không cần backend phức tạp trong Phase 1
- Dữ liệu cá nhân an toàn
- Offline-friendly

### 5.3 TypeScript Strict

**Quyết định:** TypeScript strict mode bắt buộc.

**Lý do:**
- An toàn type
- Giảm bug
- Maintainable

### 5.4 No Backend in Phase 1

**Quyết định:** Không build database production, AI API, authentication, backend feature trong Phase 1.

**Lý do:**
- Phase 1 chỉ là foundation
- Tránh scope creep
- Tập trung vào product + UX design

---

## 6. Scope Decisions

### 6.1 In Scope

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

### 6.2 Out of Scope

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

## 7. Terminology

| Thuật ngữ | Định nghĩa |
|-----------|------------|
| Mission | Đơn vị nhỏ của công việc |
| Attempt | Một lần thực hiện mission |
| Evidence | Bằng chứng năng lực |
| Skill | Kỹ năng trong 9 domain |
| Project | Tập hợp mission liên quan |
| Weekly Plan | Kế hoạch tuần |
| Capacity | Số giờ tối đa trong tuần |
| Main Focus | Trọng tâm chính |
| Supporting Skill | Kỹ năng hỗ trợ |
| Adaptive State | Trạng thái thích ứng AI |
| AI Mentor | Hệ thống AI hỗ trợ |
| Recommendation | Đề xuất AI |
| Approval | Phê duyệt user |
| Roadmap Revision | Thay đổi roadmap |

---

## 8. Definition of Done — Phase 1

Phase 1 PASS khi:

- [x] IA đầy đủ
- [x] Core user flow đầy đủ
- [x] Screen inventory đầy đủ
- [x] Design system specification đầy đủ
- [x] Responsive strategy đầy đủ
- [x] AI Mentor UX đầy đủ
- [x] 30-month roadmap được mô hình hóa
- [x] English + Chinese track được đưa vào
- [x] 17.5h weekly capacity được đưa vào
- [x] Adaptive AI flow có human approval
- [x] Edge states được định nghĩa
- [x] README đúng project mới
- [x] AGENTS.md đúng rules
- [x] Không chứa code/prototype cũ
- [x] Không có secret
- [x] Tất cả tài liệu thống nhất thuật ngữ