# 06 — Responsive Strategy

## 1. Overview

Titan OS Web v1 là **web-first**. Responsive strategy đảm bảo Web v1 dùng được trên desktop, laptop, tablet, và mobile web.

Không cần native mobile implementation trong Phase 1, nhưng mobile UX phải được preview để đảm bảo responsive.

---

## 2. Breakpoints

| Breakpoint | Width | Target Device |
|------------|-------|---------------|
| `--bp-desktop` | ≥ 1440px | Desktop |
| `--bp-laptop` | 1280px – 1439px | Laptop |
| `--bp-tablet` | 768px – 1279px | Tablet |
| `--bp-mobile` | ≤ 390px | Mobile web |

### 2.1 Breakpoint Rules

- **Desktop 1440**: Layout đầy đủ, sidebar 240px, content max-width 1200px
- **Laptop 1280**: Layout đầy đủ, sidebar 240px, content max-width 1000px
- **Tablet**: Sidebar thu gọn (icon-only), grid 2 columns
- **Mobile 390**: Bottom navigation, single column, drawer cho filters

---

## 3. Layout Strategy

### 3.1 Desktop (≥ 1280px)

```
┌──────────┬──────────────────────────────────────┐
│ Sidebar  │  Topbar                             │
│ 240px    ├──────────────────────────────────────┤
│          │  Content (max-width: 1200px)        │
│          │  Grid: 12 columns                   │
└──────────┴──────────────────────────────────────┘
```

### 3.2 Tablet (768px – 1279px)

```
┌──────┬─────────────────────────────────────────┐
│ Icon │  Topbar                                │
│ Bar  ├─────────────────────────────────────────┤
│ 64px │  Content                               │
│      │  Grid: 6 columns                       │
└──────┴─────────────────────────────────────────┘
```

- Sidebar thu gọn thành icon bar (64px)
- Tooltip hiển thị tên khi hover
- Grid: 6 columns

### 3.3 Mobile (≤ 390px)

```
┌───────────────────────────────────────────────┐
│  Topbar (compact)                             │
├───────────────────────────────────────────────┤
│  Content (single column)                      │
│  Padding: 16px                                │
├───────────────────────────────────────────────┤
│  Bottom Navigation                            │
│  [Today] [Missions] [AI] [Analytics] [More]   │
└───────────────────────────────────────────────┘
```

- Sidebar ẩn, thay bằng hamburger menu
- Bottom navigation: Today, Missions, AI Mentor, Analytics, More
- Single column layout
- Padding: 16px

---

## 4. Component Responsive Rules

### 4.1 Sidebar

| Breakpoint | Behavior |
|------------|----------|
| Desktop | Full sidebar 240px |
| Tablet | Icon-only 64px |
| Mobile | Hidden, hamburger menu |

### 4.2 Topbar

| Breakpoint | Behavior |
|------------|----------|
| Desktop | Logo + Search + Streak + Settings |
| Tablet | Logo + Search (icon) + Streak + Settings |
| Mobile | Logo + Search (icon) + Menu |

### 4.3 Cards Grid

| Breakpoint | Columns |
|------------|---------|
| Desktop | 3–4 columns |
| Laptop | 2–3 columns |
| Tablet | 2 columns |
| Mobile | 1 column |

### 4.4 Tables

| Breakpoint | Behavior |
|------------|----------|
| Desktop | Full table |
| Tablet | Horizontal scroll |
| Mobile | Card list thay thế table |

### 4.5 Modal

| Breakpoint | Behavior |
|------------|----------|
| Desktop | Centered, max-width 480px |
| Tablet | Centered, max-width 480px |
| Mobile | Full-screen bottom sheet |

### 4.6 Drawer

| Breakpoint | Behavior |
|------------|----------|
| Desktop | Slide from right, 320px |
| Tablet | Slide from right, 320px |
| Mobile | Full-width drawer |

### 4.7 Mission Card

| Breakpoint | Behavior |
|------------|----------|
| Desktop | Full card với progress |
| Tablet | Compact card |
| Mobile | Minimal card, tap để xem chi tiết |

### 4.8 AI Recommendation Card

| Breakpoint | Behavior |
|------------|----------|
| Desktop | Full width |
| Tablet | Full width |
| Mobile | Collapsible, tap để expand |

---

## 5. Mobile Priority Screens

Mobile ưu tiên các màn hình sau:

| Priority | Screen | Mobile UX |
|----------|--------|-----------|
| P0 | Today | Primary Mission dominant, quick start |
| P0 | Mission | Timer + note + submit |
| P0 | Evidence | Quick add evidence |
| P0 | AI Mentor | Recommendation + approve/reject |
| P0 | Weekly Review | Review checklist |
| P1 | Dashboard | Tổng quan nhanh |
| P1 | Week Plan | Xem kế hoạch |
| P2 | Roadmap | Xem roadmap |
| P2 | Skills | Xem skill |
| P2 | Analytics | Xem data |
| P3 | Learning | Tạo session |
| P3 | Knowledge | Xem ghi chú |
| P3 | Projects | Xem project |
| P3 | Settings | Cài đặt |

---

## 6. Mobile Navigation

### 6.1 Bottom Navigation

```
┌───────────────────────────────────────────────┐
│  [Today]  [Missions]  [AI]  [Analytics]  [More]│
└───────────────────────────────────────────────┘
```

- **Today**: Mở Today screen
- **Missions**: Mở Missions list
- **AI**: Mở AI Mentor
- **Analytics**: Mở Analytics
- **More**: Mở drawer với tất cả navigation items

### 6.2 Hamburger Menu

- Mở drawer từ trái
- Chứa toàn bộ navigation
- Overlay dim background

---

## 7. Touch Targets

| Element | Min Size |
|---------|----------|
| Button | 44px × 44px |
| Icon Button | 44px × 44px |
| Input | 44px height |
| Select | 44px height |
| Checkbox | 24px × 24px |
| Radio | 24px × 24px |
| Switch | 44px × 24px |
| Tab | 44px height |
| Bottom nav item | 56px height |

---

## 8. Typography Responsive

| Token | Desktop | Mobile |
|-------|---------|--------|
| `--text-display` | 32px | 24px |
| `--text-h1` | 24px | 20px |
| `--text-h2` | 20px | 18px |
| `--text-h3` | 16px | 16px |
| `--text-body` | 14px | 14px |
| `--text-small` | 12px | 12px |
| `--text-caption` | 11px | 11px |

---

## 9. Spacing Responsive

| Token | Desktop | Mobile |
|-------|---------|--------|
| Content padding | 24px | 16px |
| Card padding | 24px | 16px |
| Section gap | 32px | 24px |
| Grid gap | 24px | 16px |

---

## 10. Preview Requirements

Phase 1 phải có mobile preview để đảm bảo:

- Today screen dùng được trên mobile
- Mission execution dùng được trên mobile
- Evidence recording dùng được trên mobile
- AI recommendation review dùng được trên mobile
- Weekly review dùng được trên mobile

Preview có thể là:

- Responsive HTML mockup
- Figma mobile frames
- CSS media query demo

Không cần native mobile app.