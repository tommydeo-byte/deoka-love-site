/* SECTION: Design System */
:root {
  /* Color palette - Soft Blush */
  --color-bg: #fff9f5;
  --color-bg-soft: #fff0e8;
  --color-surface: #ffffff;
  --color-text: #4a3728;
  --color-text-soft: #7b5b44;
  --color-accent: #e07b5a;
  --color-accent-soft: #f4b19a;
  --color-accent-deep: #c2543a;
  --color-border-subtle: rgba(122, 85, 54, 0.12);

  /* Typography */
  --font-heading: "Playfair Display", system-ui, -apple-system, BlinkMacSystemFont,
    "Segoe UI", sans-serif;
  --font-body: "Nunito", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
    sans-serif;

  --size-page-max: 840px;

  /* Radii */
  --radius-lg: 24px;
  --radius-md: 16px;
  --radius-pill: 999px;

  /* Shadows */
  --shadow-soft: 0 1px 2px rgba(15, 23, 42, 0.04),
    0 8px 20px rgba(15, 23, 42, 0.08);

  /* Transitions */
  --ease-standard: cubic-bezier(0.22, 0.61, 0.36, 1);
  --transition-fast: 160ms var(--ease-standard);

  /* Accent RGB for glows */
  --accent-rgb: 224, 123, 90;
}

/* SECTION: Base Layout */
*,
*::before,
*::after {
  box-sizing: border-box;
}

html,
body {
  padding: 0;
  margin: 0;
}

body {
  min-height: 100vh;
  font-family: var(--font-body);
  background: var(--color-bg);
  color: var(--color-text);
  display: flex;
  align-items: stretch;
  justify-content: center;
}

.page {
  position: relative;
  max-width: var(--size-page-max);
  margin: 40px auto;
  padding: 32px 24px 40px;
  border-radius: var(--radius-lg);
  background: linear-gradient(145deg, rgba(255, 240, 232, 0.9), #ffffff);
  box-shadow: var(--shadow-soft);
  overflow: hidden;
}

@media (min-width: 768px) {
  .page {
    margin: 64px auto;
    padding: 40px 48px 48px;
  }
}

/* SECTION: Background Hearts (decorative) */
.floating-heart {
  position: fixed;
  width: 260px;
  height: 260px;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 20%, #ffe1d4 0, transparent 55%),
    radial-gradient(circle at 70% 80%, #ffc2ce 0, transparent 55%);
  opacity: 0.6;
  filter: blur(6px);
  mix-blend-mode: multiply;
  pointer-events: none;
  animation: floatHeart 18s ease-in-out infinite;
  z-index: -1;
}

.floating-heart--left {
  top: -40px;
  left: -60px;
}

.floating-heart--right {
  bottom: -40px;
  right: -60px;
  animation-delay: 4s;
}

@keyframes floatHeart {
  0%,
  100% {
    transform: translate3d(0, 0, 0) scale(1);
  }
  50% {
    transform: translate3d(10px, -18px, 0) scale(1.04);
  }
}

/* SECTION: Hero */
.hero {
  text-align: left;
  margin-bottom: 40px;
}

.hero-kicker {
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-size: 0.75rem;
  color: var(--color-text-soft);
  margin: 0 0 8px;
}

.hero h1 {
  font-family: var(--font-heading);
  font-size: 2.2rem;
  letter-spacing: -0.03em;
  margin: 0 0 12px;
  color: var(--color-text);
}

.hero-subtitle {
  margin: 0;
  max-width: 34rem;
  font-size: 0.98rem;
  line-height: 1.6;
  color: var(--color-text-soft);
}

/* SECTION: Sections */
.section {
  margin-top: 40px;
}

.section-title {
  font-family: var(--font-heading);
  font-size: 1.3rem;
  letter-spacing: -0.02em;
  margin: 0 0 8px;
}

.accent-line {
  width: 72px;
  height: 4px;
  border-radius: 999px;
  background: linear-gradient(90deg, var(--color-accent), transparent);
  margin-bottom: 16px;
}

.section p {
  margin: 0 0 12px;
  line-height: 1.7;
  font-size: 0.98rem;
  color: var(--color-text-soft);
}

/* SECTION: Timeline */
.timeline {
  list-style: none;
  padding: 0;
  margin: 16px 0 0;
  border-left: 2px solid var(--color-border-subtle);
}

.timeline-item {
  position: relative;
  padding-left: 28px;
  padding-bottom: 20px;
}

.timeline-item:last-child {
  padding-bottom: 0;
}

.timeline-dot {
  position: absolute;
  left: -7px;
  top: 4px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--color-accent);
  box-shadow: 0 0 0 4px rgba(224, 123, 90, 0.18);
}

.timeline-card {
  background: var(--color-surface);
  border-radius: var(--radius-md);
  padding: 14px 16px 14px;
  border: 1px solid var(--color-border-subtle);
}

.timeline-title {
  font-size: 1rem;
  font-weight: 700;
  margin: 0 0 6px;
  color: var(--color-text);
}

.timeline-text {
  margin: 0;
}

/* SECTION: Question */
.question {
  text-align: center;
}

.question-text {
  font-family: var(--font-heading);
  font-size: 1.8rem;
  letter-spacing: -0.03em;
  margin-top: 12px;
  margin-bottom: 20px;
  color: var(--color-accent-deep);
}

.question-actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  margin-bottom: 12px;
}

.question-note {
  font-size: 0.85rem;
  color: var(--color-text-soft);
}

/* SECTION: Buttons */
.btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 120px;
  min-height: 44px;
  padding: 0.6rem 1.4rem;
  border-radius: var(--radius-pill);
  border: 1px solid transparent;
  font-family: var(--font-body);
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform var(--transition-fast),
    box-shadow var(--transition-fast),
    background-color var(--transition-fast),
    color var(--transition-fast),
    border-color var(--transition-fast);
}

.btn-primary {
  background: linear-gradient(135deg, var(--color-accent), var(--color-accent-deep));
  color: #fffdf8;
  box-shadow: 0 10px 18px rgba(224, 123, 90, 0.35);
}

.btn-primary:hover {
  transform: translateY(-1px) scale(1.01);
  box-shadow: 0 14px 26px rgba(224, 123, 90, 0.4);
}

.btn-primary:active {
  transform: translateY(0) scale(0.98);
  box-shadow: 0 6px 12px rgba(224, 123, 90, 0.3);
}

.btn-ghost {
  background: rgba(255, 240, 232, 0.7);
  color: var(--color-accent-deep);
  border-color: rgba(224, 123, 90, 0.4);
}

.btn-ghost:hover {
  background: rgba(255, 240, 232, 1);
  transform: translateY(-1px);
}

.btn-ghost:active {
  transform: translateY(0) scale(0.98);
}

.btn:focus-visible {
  outline: none;
  box-shadow: 0 0 0 3px rgba(224, 123, 90, 0.5);
}

/* SECTION: Response Message */
.response {
  min-height: 32px;
}

.response-message {
  margin-top: 8px;
  text-align: center;
  font-weight: 600;
  color: var(--color-accent-deep);
}

/* SECTION: Utility Shadow Class */
.shadow-soft {
  box-shadow: var(--shadow-soft);
}

/* SECTION: Floating hearts animation for JS */
.falling-heart {
  position: fixed;
  width: 18px;
  height: 18px;
  pointer-events: none;
  z-index: 20;
  animation: fall 2.2s linear forwards;
}

.falling-heart svg {
  width: 100%;
  height: 100%;
}

@keyframes fall {
  0% {
    transform: translate3d(0, -10px, 0) scale(0.9) rotate(0deg);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  100% {
    transform: translate3d(-10px, 40px, 0) scale(1.05) rotate(18deg);
    opacity: 0;
  }
}
