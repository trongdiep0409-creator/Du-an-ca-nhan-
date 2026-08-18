# 05 — Design System

## 1. Overview

Design system cho Titan OS Web v1. Tất cả component phải tuân theo specification này.

---

## 2. Color

### 2.1 Neutral

| Token | Value | Usage |
|-------|-------|-------|
| `--color-neutral-0` | `#FFFFFF` | Background chính |
| `--color-neutral-50` | `#F9FAFB` | Background phụ |
| `--color-neutral-100` | `#F3F4F6` | Background hover |
| `--color-neutral-200` | `#E5E7EB` | Border |
| `--color-neutral-300` | `#D1D5DB` | Border strong |
| `--color-neutral-400` | `#9CA3AF` | Placeholder |
| `--color-neutral-500` | `#6B7280` | Text secondary |
| `--color-neutral-600` | `#4B5563` | Text muted |
| `--color-neutral-700` | `#374151` | Text primary |
| `--color-neutral-800` | `#1F2937` | Text strong |
| `--color-neutral-900` | `#111827` | Text darkest |
| `--color-neutral-950` | `#030712` | Background dark |

### 2.2 Primary

| Token | Value | Usage |
|-------|-------|-------|
| `--color-primary-50` | `#EFF6FF` | Background nhẹ |
| `--color-primary-100` | `#DBEAFE` | Background hover |
| `--color-primary-500` | `#3B82F6` | Primary button |
| `--color-primary-600` | `#2563EB` | Primary button hover |
| `--color-primary-700` | `#1D4ED8` | Primary active |

### 2.3 Success

| Token | Value | Usage |
|-------|-------|-------|
| `--color-success-50` | `#F0FDF4` | Background nhẹ |
| `--color-success-100` | `#DCFCE7` | Background hover |
| `--color-success-500` | `#22C55E` | Success |
| `--color-success-600` | `#16A34A` | Success strong |
| `--color-success-700` | `#15803D` | Success dark |

### 2.4 Warning

| Token | Value | Usage |
|-------|-------|-------|
| `--color-warning-50` | `#FEFCE8` | Background nhẹ |
| `--color-warning-100` | `#FEF9C3` | Background hover |
| `--color-warning-500` | `#EAB308` | Warning |
| `--color-warning-600` | `#CA8A04` | Warning strong |
| `--color-warning-700` | `#A16207` | Warning dark |

### 2.5 Danger

| Token | Value | Usage |
|-------|-------|-------|
| `--color-danger-50` | `#FEF2F2` | Background nhẹ |
| `--color-danger-100` | `#FEE2E2` | Background hover |
| `--color-danger-500` | `#EF4444` | Danger |
| `--color-danger-600` | `#DC2626` | Danger strong |
| `--color-danger-700` | `#B91C1C` | Danger dark |

### 2.6 Info

| Token | Value | Usage |
|-------|-------|-------|
| `--color-info-50` | `#EFF6FF` | Background nhẹ |
| `--color-info-100` | `#DBEAFE` | Background hover |
| `--color-info-500` | `#3B82F6` | Info |
| `--color-info-600` | `#2563EB` | Info strong |
| `--color-info-700` | `#1D4ED8` | Info dark |

### 2.7 AI Accent

| Token | Value | Usage |
|-------|-------|-------|
| `--color-ai-50` | `#F5F3FF` | Background nhẹ |
| `--color-ai-100` | `#EDE9FE` | Background hover |
| `--color-ai-500` | `#8B5CF6` | AI accent |
| `--color-ai-600` | `#7C3AED` | AI accent strong |
| `--color-ai-700` | `#6D28D9` | AI accent dark |

---

## 3. Typography

### 3.1 Font Family

- **Primary**: `Inter`, system-ui, sans-serif
- **Code/Data**: `JetBrains Mono`, monospace

### 3.2 Type Scale

| Token | Size | Line Height | Weight | Usage |
|-------|------|-------------|--------|-------|
| `--text-display` | 32px | 40px | 700 | Page title |
| `--text-h1` | 24px | 32px | 700 | Section title |
| `--text-h2` | 20px | 28px | 600 | Sub-section title |
| `--text-h3` | 16px | 24px | 600 | Card title |
| `--text-body` | 14px | 20px | 400 | Body text |
| `--text-small` | 12px | 16px | 400 | Small text |
| `--text-caption` | 11px | 14px | 400 | Caption |
| `--text-code` | 13px | 20px | 400 | Code/data |

---

## 4. Spacing

### 4.1 Spacing Scale

| Token | Value |
|-------|-------|
| `--space-1` | 4px |
| `--space-2` | 8px |
| `--space-3` | 12px |
| `--space-4` | 16px |
| `--space-5` | 20px |
| `--space-6` | 24px |
| `--space-8` | 32px |
| `--space-10` | 40px |
| `--space-12` | 48px |
| `--space-16` | 64px |

### 4.2 Usage Rules

- Card padding: `--space-4` hoặc `--space-6`
- Section gap: `--space-6` hoặc `--space-8`
- Grid gap: `--space-4` hoặc `--space-6`
- Form field gap: `--space-4`
- Button padding: `--space-2` `--space-4`

---

## 5. Radius

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-sm` | 4px | Input, button nhỏ |
| `--radius-md` | 8px | Card, button |
| `--radius-lg` | 12px | Modal, drawer |
| `--radius-full` | 9999px | Badge, pill |

**Rule:** Hạn chế tối đa 4 loại radius.

---

## 6. Shadows

| Token | Value | Usage |
|-------|-------|-------|
| `--shadow-sm` | `0 1px 2px rgba(0,0,0,0.05)` | Card nhẹ |
| `--shadow-md` | `0 4px 6px rgba(0,0,0,0.07)` | Card, dropdown |
| `--shadow-lg` | `0 10px 15px rgba(0,0,0,0.1)` | Modal, drawer |
| `--shadow-focus` | `0 0 0 3px rgba(59,130,246,0.3)` | Focus state |

**Rule:** Tối giản, chỉ dùng khi cần phân cấp.

---

## 7. Components

### 7.1 Button

**Variants:**
- Primary: `--color-primary-500` background, white text
- Secondary: white background, `--color-neutral-200` border
- Ghost: transparent, hover `--color-neutral-100`
- Danger: `--color-danger-500` background, white text
- AI: `--color-ai-500` background, white text

**Sizes:**
- Small: 32px height
- Medium: 40px height
- Large: 48px height

**States:**
- Default
- Hover
- Active
- Disabled (opacity 0.5)
- Loading (spinner)

### 7.2 Icon Button

- 32px × 32px
- Icon 16px
- Variants: ghost, primary, danger

### 7.3 Input

- Height: 40px
- Border: `--color-neutral-200`
- Focus: `--shadow-focus`
- Error: `--color-danger-500` border
- Disabled: opacity 0.5

### 7.4 Select

- Tương tự Input
- Có chevron icon

### 7.5 Textarea

- Min height: 80px
- Resize: vertical

### 7.6 Checkbox

- 16px × 16px
- Checked: `--color-primary-500`

### 7.7 Radio

- 16px × 16px
- Checked: `--color-primary-500`

### 7.8 Switch

- Width: 36px, Height: 20px
- On: `--color-primary-500`
- Off: `--color-neutral-300`

### 7.9 Badge

- Radius: `--radius-full`
- Padding: 4px 8px
- Font: `--text-caption`
- Variants: neutral, primary, success, warning, danger, info, AI

### 7.10 Status Badge

**Mission Status:**
| Status | Color |
|--------|-------|
| Planned | Neutral |
| In Progress | Info |
| Submitted | Warning |
| Passed | Success |
| Rework | Warning |
| Blocked | Danger |
| Completed | Success |

**Evidence Status:**
| Status | Color |
|--------|-------|
| Recorded | Neutral |
| Reviewed | Info |
| Verified | Success |

**Adaptive State:**
| State | Color |
|-------|-------|
| AHEAD | Success |
| ON TRACK | Info |
| AT RISK | Warning |
| BLOCKED | Danger |

### 7.11 Card

- Background: white
- Border: `--color-neutral-200`
- Radius: `--radius-md`
- Shadow: `--shadow-sm`
- Padding: `--space-4` hoặc `--space-6`

### 7.12 Metric Card

- Title: `--text-small` secondary
- Value: `--text-display` bold
- Trend: success/danger
- Optional: mini chart

### 7.13 Mission Card

- Title: `--text-h3`
- Status badge
- Type
- Objective (1 line)
- Planned duration
- Progress bar (nếu có)

### 7.14 Skill Card

- Skill name: `--text-h3`
- Current Level + Target Level
- Evidence Strength (progress bar)
- Last Practiced
- Status badge

### 7.15 Evidence Card

- Type badge
- Status badge
- Title
- Linked mission/project
- Date

### 7.16 Project Card

- Project name: `--text-h3`
- Problem (1 line)
- Goal
- Status badge
- Progress bar
- Skills involved (tags)

### 7.17 AI Recommendation Card

- Background: `--color-ai-50`
- Border: `--color-ai-100`
- AI icon
- Recommendation text
- Data explanation
- Approve/Reject buttons

### 7.18 Progress Bar

- Height: 8px
- Background: `--color-neutral-200`
- Fill: `--color-primary-500`
- Success: `--color-success-500`
- Warning: `--color-warning-500`
- Danger: `--color-danger-500`

### 7.19 Progress Ring

- Size: 48px, 64px, 96px
- Stroke: 4px
- Track: `--color-neutral-200`
- Fill: `--color-primary-500`

### 7.20 Tabs

- Border-bottom: `--color-neutral-200`
- Active: `--color-primary-600` + border-bottom
- Inactive: `--color-neutral-500`

### 7.21 Table

- Header: `--color-neutral-50` background, `--text-small` bold
- Row: border-bottom `--color-neutral-100`
- Hover: `--color-neutral-50`

### 7.22 Modal

- Overlay: rgba(0,0,0,0.5)
- Width: 480px (default), 640px (large)
- Radius: `--radius-lg`
- Shadow: `--shadow-lg`

### 7.23 Drawer

- Width: 320px (default), 480px (large)
- Slide from right
- Overlay: rgba(0,0,0,0.5)

### 7.24 Tooltip

- Background: `--color-neutral-900`
- Text: white
- Font: `--text-small`
- Position: top, bottom, left, right

### 7.25 Dropdown

- Trigger: button/icon button
- Menu: white background, `--shadow-md`
- Item: hover `--color-neutral-50`

### 7.26 Command/Search (⌘K)

- Modal-like overlay
- Search input
- Results list
- Keyboard navigation
- Quick actions

### 7.27 Sidebar

- Width: 240px
- Background: white
- Border-right: `--color-neutral-200`
- Group label: `--text-caption` uppercase
- Item: hover `--color-neutral-50`
- Active: `--color-primary-50` + `--color-primary-600` text

### 7.28 Topbar

- Height: 56px
- Background: white
- Border-bottom: `--color-neutral-200`
- Contains: logo, search, streak, settings

### 7.29 Empty State

- Icon (48px)
- Title: `--text-h3`
- Description: `--text-body` secondary
- CTA button (optional)

### 7.30 Loading State

- Skeleton loading
- Pulse animation
- Match layout structure

### 7.31 Error State

- Icon (48px) danger
- Title: `--text-h3`
- Description: `--text-body`
- Retry button

### 7.32 Toast

- Position: bottom-right
- Duration: 3–5s
- Variants: success, error, warning, info
- Auto-dismiss

---

## 8. Layout

### 8.1 Desktop Layout

```
┌──────────┬──────────────────────────────────────┐
│ Sidebar  │  Topbar                             │
│ 240px    ├──────────────────────────────────────┤
│          │  Content                            │
│          │  Max-width: 1200px                  │
│          │  Padding: 24px                      │
└──────────┴──────────────────────────────────────┘
```

### 8.2 Grid

- 12-column grid
- Gap: `--space-4` hoặc `--space-6`
- Responsive: 12 → 6 → 4 → 2 columns

---

## 9. Motion

### 9.1 Duration

| Token | Value | Usage |
|-------|-------|-------|
| `--duration-fast` | 100ms | Hover |
| `--duration-normal` | 200ms | Transition |
| `--duration-slow` | 300ms | Modal, drawer |

### 9.2 Easing

| Token | Value |
|-------|-------|
| `--ease-default` | `cubic-bezier(0.4, 0, 0.2, 1)` |
| `--ease-in` | `cubic-bezier(0.4, 0, 1, 1)` |
| `--ease-out` | `cubic-bezier(0, 0, 0.2, 1)` |

---

## 10. Accessibility

- Contrast ratio ≥ 4.5:1 cho text
- Focus visible: `--shadow-focus`
- Keyboard navigation đầy đủ
- ARIA labels cho icon buttons
- Semantic HTML
- Screen reader support cho status badges