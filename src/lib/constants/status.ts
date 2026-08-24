/// Titan OS Web v1 — status constants placeholder (Phase 2).
///
/// Business-rule enums are intentionally NOT defined here.
///
/// The previous file contained incorrect enums (e.g. MissionStatus.DRAFT,
/// TO_DO, ARCHIVED; EvidenceStatus.PENDING, APPROVED, REJECTED) that
/// contradict the locked product rules in docs/product/*.
///
/// Locked future product rules (Phase 3+) — do NOT implement prematurely:
///
///   Mission status:  Planned → In Progress → Submitted → Passed → Completed
///                    (with Rework / Blocked side-paths)
///   Evidence status: Recorded → Reviewed → Verified
///
/// Completed mission requires: output + evidence + acceptance criteria + review Passed.
/// Evidence "Verified" must never auto-downgrade.
///
/// No business enums are exported during Phase 2.
export {};
