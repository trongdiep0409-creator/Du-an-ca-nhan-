/// Titan OS Web v1 — shared type definitions (Phase 2 foundation).
///
/// Business-domain interfaces (Mission, Skill, Project, Evidence, Review,
/// User) have been removed — they belong to Phase 3+ after the product
/// design review.  This file retains only UI/UX-related types needed for
/// the Phase 2 foundation shell.

/**
 * Adaptive state reported by AI analysis.
 * This is a UI-level concept, NOT a persisted business rule.
 * Actual values will be driven by real data in Phase 3+.
 */
export type AdaptiveState = "AHEAD" | "ON_TRACK" | "AT_RISK" | "BLOCKED";

export interface AdaptiveInfo {
  state: AdaptiveState;
  reason: string;
  recommendation: string;
}
