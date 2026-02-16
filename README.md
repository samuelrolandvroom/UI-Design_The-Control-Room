# The Control Room

> Institutional-grade command center for modern freelancers and virtual agencies

---

## Screens

| Screen | Description |
|--------|-------------|
| **Dashboard** | High-level telemetry featuring "Safe to Spend" anchor |
| **Agency Foundry** | Legal entity setup and collaborator invites |
| **Equity & Roles** | Revenue distribution with precision sliders |
| **The Vault** | Multi-sig approvals and escrow monitoring |
| **Bid War Room** | Proposal staging with budget defense |
| **Tax Forensic Unit** | Per-member tax liability breakdown |

---

## Design System

### Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-primary` | `#0056D2` | Actions, active states, key data |
| `--color-bg` | `#F4F5F7` | App background |
| `--color-surface` | `#FFFFFF` | Cards, tables, panels |
| `--color-border` | `#D1D5DB` | Dividing lines |
| `--color-text-main` | `#111827` | Headings, data values |
| `--color-text-dim` | `#6B7280` | Labels, metadata |
| `--color-danger` | `#DC2626` | Negative balance, errors |
| `--color-success` | `#059669` | Positive flow, signed |

### Typography

```
Font Family: Inter / Roboto / System Sans
Monospace:   JetBrains Mono (hashes, transaction IDs)

Metric Huge:   700, 32px  (Safe to Spend)
Section Head: 600, 14px  (Module headers, uppercase)
Data Label:   500, 11px  (Column headers, uppercase)
Data Value:   400, 13px  (Table content)
Mono:         400, 12px  (TxIDs, hashes)
```

> **Note:** Use `font-variant-numeric: tabular-nums` for all numerical data

### Style Rules

- **Zero Radius:** All corners sharp (0px)
- **High Density:** 32px table rows
- **Borders over Shadows:** 1px solid borders for separation

---

## Component Specifications

### 1. Dashboard

**Layout:** 3-Column Bento Grid
- Left (25%): Navigation
- Center (50%): Safe to Spend + Cashflow
- Right (25%): Alerts

**Key Components:**

```
┌─────────────────────────────────────────────┐
│  $4,285.00              [Sparkline]         │
│  Safe to Spend           Daily Cap / 14 days│
├─────────────────────────────────────────────┤
│  Cashflow Table                             │
│  Source | Date | Amount | Status            │
│  ─────────────────────────────────────────  │
├─────────────────────────────────────────────┤
│  [Tax Reserve Ring]    [Alerts]             │
└─────────────────────────────────────────────┘
```

- **Safe to Spend:** 32px bold blue text (`#0056D2`)
- **Cashflow Row Hover:** `#EFF6FF`
- **Negative State:** Red text (`#DC2626`), "LIQUIDITY CRUNCH"

---

### 2. Agency Builder

**Layout:** Split View - Form (Left) + Preview (Right)

**Components:**

| Element | Type | Style |
|---------|------|-------|
| Agency Name | Input | `border-b` only |
| Jurisdiction | Dropdown | Standard |
| Membership Table | Table | Name, Email, Role, Access |
| Add Seat | Action | `[+]` text link |
| Date Range | Picker | Timeline bar visualization |

---

### 3. Role & Split Editor

**Layout:** Top: Visualizer Bar | Bottom: Input Matrix

**Key Components:**

```
┌─────────────────────────────────────────────┐
│  [====Dev Lead 45%==][===Design 25%===...] │  <- Colored bar
│  Total: 100% ✓                             │
├─────────────────────────────────────────────┤
│  Member    | Fixed | Rev % | Role          │
│  ─────────────────────────────────────────  │
│  [Input]   | [###] | [###]| [text]         │
└─────────────────────────────────────────────┘
```

- **Over-allocated:** Bar turns red, shakes, flashes "OVERALLOCATED"
- **Lock & Hash:** Button generates SHA-256 of agreement

---

### 4. The Vault (Shared Finance)

**Layout:** Master/Detail - Accounts List | Ledger

**Components:**

| Component | Description |
|-----------|-------------|
| Escrow Monitor | "Held" vs "Available" card |
| Approval Queue | "Awaiting 1/2 Signatures" list |
| Ledger Table | 30 visible rows, high density |
| Actions | Sign (Blue) / Reject (White+Red border) |

**Table Columns:** Time (UTC), TxID, Payee, Category, Amount, Sig Status

> Click TxID → Copy hash to clipboard + Toast

---

### 5. Bid War Room

**Layout:** Timeline (Left) + Editor (Right)

**Components:**

- **Line Items:** Phase → Task → Rate → Hours (nested)
- **Profit Margin:** Auto-calculated, bold
- **Gantt Blocks:** Drag edge to adjust, instant recalc
- **View Toggle:** Internal (white) / Client (blue tint)

---

### 6. Tax Forensic Unit

**Layout:** Card Dashboard

**Components:**

- **Waterfall Chart:** Gross → Fees → Write-offs → Net Taxable
- **Quarterly Payment:** Large numeral + "Mark Paid" button
- **Write-off Ledger:** Sorted by category

---

## Tech Stack

- **Framework:** React + Tailwind CSS
- **State:** Zustand
- **Charts:** Recharts (customized terminal style)

---

## Build Order

1. Dashboard (layout shell, typography, Safe to Spend)
2. Role & Split Editor (complex validation logic)
3. The Vault (data-table patterns)
4. Agency Builder (form components)
5. Tax Summary + Bid Workspace (derivative views)

---

*Created by Samuel Roland Vroom*
