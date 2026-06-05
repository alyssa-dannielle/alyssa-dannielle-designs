import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Alyssa's Cozy Crochet Corner — Visionaries 2026",
  description:
    'Find your creative flow amidst the music. A sanctuary for makers and the crochet-curious at Visionaries 2026.',
};

export default function VisionariesPage() {
  const styles = `
    /* ===========================
     CSS VARIABLES & RESET
  =========================== */
    .visionaries-page,
    .visionaries-page *,
    .visionaries-page *::before,
    .visionaries-page *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    .visionaries-page {
      --teal: #003135;
      --teal-mid: #004a50;
      --teal-light: #005f66;
      --gold: #daa520;
      --gold-light: #f0c040;
      --rose: #d490a7;
      --rose-light: #e8b5c8;
      --walnut: #5c4033;
      --walnut-light: #7a5545;
      --moss: #8a9a5b;
      --moss-light: #a8b97a;
      --cream: #faf6f0;
      --cream-dark: #f2ebe0;
      --off-white: #fdf9f4;
      --text-dark: #1a1a1a;
      --text-mid: #3a3330;
      scroll-behavior: smooth;
      font-family: 'Montserrat', sans-serif;
      background-color: var(--off-white);
      color: var(--text-dark);
      overflow-x: hidden;
    }

    /* ===========================
     HERO SECTION
  =========================== */
    .hero {
      position: relative;
      min-height: 100vh;
      background-color: var(--teal);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      padding: 100px 40px 80px;
      overflow: hidden;
    }

    /* Layered texture background */
    .hero::before {
      content: '';
      position: absolute;
      inset: 0;
      background:
        radial-gradient(
          ellipse 80% 60% at 50% 30%,
          rgba(138, 154, 91, 0.18) 0%,
          transparent 70%
        ),
        radial-gradient(
          ellipse 50% 40% at 20% 80%,
          rgba(218, 165, 32, 0.1) 0%,
          transparent 60%
        ),
        radial-gradient(
          ellipse 60% 50% at 80% 70%,
          rgba(212, 144, 167, 0.1) 0%,
          transparent 60%
        );
      pointer-events: none;
    }

    /* Crochet-motif dot grid overlay */
    .hero::after {
      content: '';
      position: absolute;
      inset: 0;
      background-image: radial-gradient(
        circle,
        rgba(255, 255, 255, 0.04) 1px,
        transparent 1px
      );
      background-size: 28px 28px;
      pointer-events: none;
    }

    /* Decorative corner yarn loops */
    .hero-ornament {
      position: absolute;
      width: 220px;
      height: 220px;
      border-radius: 50%;
      border: 1px solid rgba(218, 165, 32, 0.18);
      pointer-events: none;
    }
    .hero-ornament--tl {
      top: -80px;
      left: -80px;
      border-color: rgba(212, 144, 167, 0.2);
    }
    .hero-ornament--tl-2 {
      top: -40px;
      left: -40px;
      width: 160px;
      height: 160px;
      border-color: rgba(218, 165, 32, 0.12);
    }
    .hero-ornament--br {
      bottom: -80px;
      right: -80px;
      border-color: rgba(138, 154, 91, 0.2);
    }
    .hero-ornament--br-2 {
      bottom: -40px;
      right: -40px;
      width: 160px;
      height: 160px;
      border-color: rgba(218, 165, 32, 0.14);
    }

    .hero-eyebrow--mobile {
      display: none;
    }

    .hero-eyebrow {
      font-family: 'Montserrat', sans-serif;
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 4px;
      text-transform: uppercase;
      color: var(--gold);
      margin-bottom: 24px;
      position: relative;
      z-index: 2;
    }

    .hero-eyebrow span {
      display: inline-block;
      width: 36px;
      height: 1px;
      background: var(--gold);
      vertical-align: middle;
      margin: 0 12px;
      opacity: 0.6;
    }

    .hero-headline {
      font-family: 'Alice', serif;
      font-size: 72px;
      line-height: 1.08;
      color: var(--cream);
      max-width: 820px;
      margin-bottom: 28px;
      position: relative;
      z-index: 2;
    }

    .hero-headline em {
      font-style: normal;
      color: var(--gold);
    }

    .hero-subheadline {
      font-size: 17px;
      font-weight: 300;
      line-height: 1.75;
      color: rgba(250, 246, 240, 0.75);
      max-width: 580px;
      margin-bottom: 48px;
      position: relative;
      z-index: 2;
    }

    .hero-location-badge {
      display: inline-flex;
      align-items: flex-start;
      gap: 14px;
      background: rgba(255, 255, 255, 0.06);
      border: 1px solid rgba(218, 165, 32, 0.25);
      border-radius: 8px;
      padding: 20px 28px;
      max-width: 560px;
      text-align: left;
      position: relative;
      z-index: 2;
    }

    .hero-location-badge svg {
      flex-shrink: 0;
      margin-top: 2px;
      color: var(--gold);
    }

    .hero-location-badge p {
      font-size: 14px;
      font-weight: 400;
      line-height: 1.65;
      color: rgba(250, 246, 240, 0.8);
    }

    .hero-scroll-hint {
      position: absolute;
      bottom: 36px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
      z-index: 2;
      animation: bounce 2.4s ease-in-out infinite;
    }

    .hero-scroll-hint span {
      font-size: 10px;
      letter-spacing: 3px;
      text-transform: uppercase;
      color: rgba(218, 165, 32, 0.5);
    }

    .hero-scroll-hint svg {
      color: rgba(218, 165, 32, 0.45);
    }

    @keyframes bounce {
      0%,
      100% {
        transform: translateX(-50%) translateY(0);
      }
      50% {
        transform: translateX(-50%) translateY(6px);
      }
    }

    /* ===========================
     SECTION SHARED STYLES
  =========================== */
    .section-eyebrow {
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 4px;
      text-transform: uppercase;
      color: var(--moss);
      margin-bottom: 12px;
    }

    .section-headline {
      font-family: 'Alice', serif;
      font-size: 42px;
      line-height: 1.2;
      color: var(--teal);
      margin-bottom: 12px;
    }

    .section-subtext {
      font-size: 14px;
      font-weight: 400;
      line-height: 1.7;
      color: #666;
      max-width: 520px;
    }

    /* ===========================
     WORKSHOPS SECTION
  =========================== */
    .workshops {
      padding: 100px 60px;
      background: var(--cream);
      position: relative;
    }

    .workshops::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: linear-gradient(
        90deg,
        var(--teal) 0%,
        var(--moss) 40%,
        var(--gold) 70%,
        var(--rose) 100%
      );
    }

    .workshops-header {
      text-align: center;
      margin-bottom: 64px;
    }

    .workshops-header .section-subtext {
      margin: 0 auto;
    }

    .workshops-note {
      display: inline-block;
      margin-top: 20px;
      background: rgba(92, 64, 51, 0.08);
      border-left: 3px solid var(--walnut);
      padding: 10px 18px;
      font-size: 13px;
      font-style: italic;
      color: var(--walnut);
      border-radius: 0 4px 4px 0;
    }

    /* 2x2 Grid */
    .workshops-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 28px;
      max-width: 1060px;
      margin: 0 auto;
    }

    .workshop-card {
      background: var(--off-white);
      border-radius: 12px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      border: 1px solid rgba(0, 49, 53, 0.08);
      transition:
        transform 0.25s ease,
        box-shadow 0.25s ease;
      position: relative;
    }

    .workshop-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 16px 48px rgba(0, 49, 53, 0.12);
    }

    /* Color-coded top bar per card */
    .workshop-card--snake .card-bar {
      background: var(--teal);
    }
    .workshop-card--pro .card-bar {
      background: var(--walnut);
    }
    .workshop-card--autumn .card-bar {
      background: var(--moss);
    }
    .workshop-card--hangout .card-bar {
      background: var(--rose);
    }

    .card-bar {
      height: 6px;
      width: 100%;
    }

    .card-body {
      padding: 32px 32px 28px;
      flex: 1;
      display: flex;
      flex-direction: column;
    }

    .card-icon {
      width: 44px;
      height: 44px;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 18px;
      font-size: 20px;
    }

    .workshop-card--snake .card-icon {
      background: rgba(0, 49, 53, 0.08);
    }
    .workshop-card--pro .card-icon {
      background: rgba(92, 64, 51, 0.1);
    }
    .workshop-card--autumn .card-icon {
      background: rgba(138, 154, 91, 0.12);
    }
    .workshop-card--hangout .card-icon {
      background: rgba(212, 144, 167, 0.15);
    }

    .card-label {
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 3px;
      text-transform: uppercase;
      margin-bottom: 8px;
    }

    .workshop-card--snake .card-label {
      color: var(--teal);
    }
    .workshop-card--pro .card-label {
      color: var(--walnut);
    }
    .workshop-card--autumn .card-label {
      color: var(--moss);
    }
    .workshop-card--hangout .card-label {
      color: var(--rose);
    }

    .card-title {
      font-family: 'Alice', serif;
      font-size: 24px;
      line-height: 1.2;
      color: var(--teal);
      margin-bottom: 6px;
    }

    .card-subtitle {
      font-size: 12px;
      font-weight: 600;
      color: var(--gold);
      letter-spacing: 0.5px;
      margin-bottom: 16px;
    }

    .card-copy {
      font-size: 14px;
      font-weight: 400;
      line-height: 1.75;
      color: #555;
      flex: 1;
    }

    .card-footer {
      margin-top: 24px;
      padding-top: 20px;
      border-top: 1px solid rgba(0, 49, 53, 0.08);
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .card-time {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 13px;
      font-weight: 600;
      color: var(--teal);
    }

    .card-time svg {
      color: var(--gold);
      flex-shrink: 0;
    }

    .card-note {
      display: flex;
      align-items: flex-start;
      gap: 8px;
      background: rgba(138, 154, 91, 0.1);
      border: 1px solid rgba(138, 154, 91, 0.25);
      border-radius: 6px;
      padding: 10px 12px;
      font-size: 12px;
      font-style: italic;
      color: var(--walnut);
      line-height: 1.5;
      margin-top: 6px;
    }

    .card-note svg {
      flex-shrink: 0;
      margin-top: 1px;
      color: var(--moss);
    }

    /* Hangout card special styling */
    .workshop-card--hangout .card-body {
      background: linear-gradient(
        145deg,
        var(--off-white) 0%,
        rgba(212, 144, 167, 0.04) 100%
      );
    }

    /* ===========================
     ABOUT SECTION
  =========================== */
    .about {
      padding: 100px 60px;
      background: var(--off-white);
    }

    .about-grid {
      max-width: 1060px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 72px;
      align-items: center;
    }

    .about-image-col {
      position: relative;
    }

    .about-image-frame {
      position: relative;
      border-radius: 12px;
      overflow: hidden;
      aspect-ratio: 4 / 5;
      background: var(--cream-dark);
    }

    /* Decorative offset border */
    .about-image-frame::before {
      content: '';
      position: absolute;
      inset: -12px;
      border: 2px solid var(--gold);
      border-radius: 16px;
      opacity: 0.3;
      z-index: 0;
      pointer-events: none;
    }

    .about-image-frame::after {
      content: '';
      position: absolute;
      inset: -6px;
      border: 1px solid var(--moss);
      border-radius: 14px;
      opacity: 0.2;
      z-index: 0;
      pointer-events: none;
    }

    .about-image-placeholder {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 16px;
      background: linear-gradient(
        160deg,
        var(--cream-dark) 0%,
        rgba(138, 154, 91, 0.15) 100%
      );
      color: var(--moss);
      position: relative;
      z-index: 1;
    }

    .about-image-placeholder img {
      max-width: 90%;
      max-height: 90%;
      width: auto;
      height: auto;
      object-fit: contain;
    }

    .about-image-placeholder svg {
      opacity: 0.35;
    }

    .about-image-placeholder p {
      font-size: 12px;
      font-weight: 500;
      letter-spacing: 2px;
      text-transform: uppercase;
      opacity: 0.45;
      color: var(--teal);
    }

    .about-moss-tag {
      position: absolute;
      bottom: -18px;
      left: 32px;
      background: var(--moss);
      color: white;
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 2px;
      text-transform: uppercase;
      padding: 8px 18px;
      border-radius: 4px;
      z-index: 3;
    }

    .about-text-col {
      padding-left: 8px;
    }

    .about-text-col .section-eyebrow {
      margin-bottom: 10px;
    }

    .about-name {
      font-family: 'Alice', serif;
      font-size: 46px;
      line-height: 1.1;
      color: var(--teal);
      margin-bottom: 32px;
    }

    .about-body p {
      font-size: 15px;
      font-weight: 400;
      line-height: 1.8;
      color: #4a4540;
      margin-bottom: 20px;
    }

    .about-body p:last-child {
      margin-bottom: 0;
    }

    .about-divider {
      width: 56px;
      height: 3px;
      background: var(--gold);
      border-radius: 2px;
      margin-bottom: 32px;
    }

    /* ===========================
     FOOTER STRIP
  =========================== */
    .footer-strip {
      background: var(--teal);
      padding: 36px 60px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .footer-strip-brand {
      font-family: 'Alice', serif;
      font-size: 18px;
      color: var(--cream);
    }

    .footer-strip-brand span {
      color: var(--gold);
    }

    .footer-strip-note {
      font-size: 12px;
      color: rgba(250, 246, 240, 0.45);
      letter-spacing: 1px;
    }

    /* ===========================
     RESPONSIVE
  =========================== */
    @media (max-width: 900px) {
      .hero-headline {
        font-size: 48px;
      }

      .hero-eyebrow--desktop {
        display: none;
      }

      .hero-eyebrow--mobile {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
      }

      .workshops {
        padding: 72px 28px;
      }

      .workshops-grid {
        grid-template-columns: 1fr;
      }

      .about {
        padding: 72px 28px;
      }

      .about-grid {
        grid-template-columns: 1fr;
        gap: 48px;
      }

      .footer-strip {
        flex-direction: column;
        gap: 12px;
        text-align: center;
      }
    }
  `;

  const htmlContent = `
    <!-- HERO -->
    <section class="hero">
      <div class="hero-ornament hero-ornament--tl"></div>
      <div class="hero-ornament hero-ornament--tl-2"></div>
      <div class="hero-ornament hero-ornament--br"></div>
      <div class="hero-ornament hero-ornament--br-2"></div>

      <p class="hero-eyebrow hero-eyebrow--desktop">
        <span></span>
        Visionaries 2026 · Alyssa Dannielle Design
        <span></span>
      </p>

      <p class="hero-eyebrow hero-eyebrow--mobile">
        Visionaries 2026
        <span></span>
        Alyssa Dannielle Design
      </p>

      <h1 class="hero-headline">
        Unwind at Alyssa's<br />
        <em>Cozy Crochet Corner</em>
      </h1>

      <p class="hero-subheadline">
        Find your creative flow amidst the music. A sanctuary for makers and the
        "crochet-curious" at Visionaries 2026.
      </p>

      <div class="hero-location-badge">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
        <p>
          Join us in the elegant sun-room lounge of
          <strong>Beacon Hill Manor</strong>, just outside of Leesburg, VA, this
          October 31st. It's the perfect comfy nook just steps away from the
          main event.
        </p>
      </div>

      <div class="hero-scroll-hint">
        <span>Explore</span>
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </section>

    <!-- WORKSHOPS -->
    <section class="workshops">
      <div class="workshops-header">
        <p class="section-eyebrow">45-Minute Sessions</p>
        <h2 class="section-headline">The Workshop Schedule</h2>
        <p class="section-subtext">
          Drop in, learn something new, and leave with a new skill or a spark of
          inspiration. All levels welcome.
        </p>
        <span class="workshops-note">
          ✦ Space in the sun-room is cozy! Workshops are first-come,
          first-served — feel free to drop by a few minutes early to snag a
          seat.
        </span>
      </div>

      <div class="workshops-grid">
        <!-- Card 1: Snake School -->
        <div class="workshop-card workshop-card--snake">
          <div class="card-bar"></div>
          <div class="card-body">
            <div class="card-icon">🐍</div>
            <p class="card-label">Beginner Friendly</p>
            <h3 class="card-title">The "Snake" School</h3>
            <p class="card-subtitle">Finger Crochet for Absolute Beginners</p>
            <p class="card-copy">
              No hooks, no stress. Learn the fundamental "knot-logic" of crochet
              using extra-plush jumbo yarn. We'll start with finger-looping
              "snakes" before graduating to traditional hooks. Perfect for those
              who've never picked up a tool!
            </p>
            <div class="card-footer">
              <div class="card-time">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                6:00 PM – 6:45 PM
              </div>
              <div class="card-time">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                9:45 PM – 10:30 PM
              </div>
            </div>
          </div>
        </div>

        <!-- Card 2: Pro-Stitch Lab -->
        <div class="workshop-card workshop-card--pro">
          <div class="card-bar"></div>
          <div class="card-body">
            <div class="card-icon">🧵</div>
            <p class="card-label">Intermediate Level</p>
            <h3 class="card-title">The Pro-Stitch Lab</h3>
            <p class="card-subtitle">Intermediate Techniques</p>
            <p class="card-copy">
              Level up your craft. We'll dive into the "Foundation Row" (ditch
              the starting chain forever!), Invisible Decreases for seamless
              shaping, and the cozy Waffle Stitch. We'll wrap up with a
              10-minute technical AMA — bring your toughest crochet hurdles!
            </p>
            <div class="card-footer">
              <div class="card-time">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                7:15 PM – 8:00 PM
              </div>
            </div>
          </div>
        </div>

        <!-- Card 3: Autumn Alchemist -->
        <div class="workshop-card workshop-card--autumn">
          <div class="card-bar"></div>
          <div class="card-body">
            <div class="card-icon">🍂</div>
            <p class="card-label">Tunisian Crochet</p>
            <h3 class="card-title">The Autumn Alchemist</h3>
            <p class="card-subtitle">Intro to Tunisian Crochet</p>
            <p class="card-copy">
              Experience the unique blend of crochet and knitting. Using the
              Tunisian Simple Stitch, we'll begin work on your own variegated
              Autumn Triangle Scarf — a perfect, meditative project for the
              cooler October air.
            </p>
            <div class="card-footer">
              <div class="card-time">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                8:30 PM – 9:15 PM
              </div>
              <div class="card-note">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                <span>
                  This workshop requires the purchase of a
                  <strong>Tunisian Starter Kit</strong>.
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Card 4: The Hangout Spot -->
        <div class="workshop-card workshop-card--hangout">
          <div class="card-bar"></div>
          <div class="card-body">
            <div class="card-icon">🛋️</div>
            <p class="card-label">Open All Evening</p>
            <h3 class="card-title">The Hangout Spot</h3>
            <p class="card-subtitle">
              Not here for a lesson? Just stay for the vibes.
            </p>
            <p class="card-copy">
              Alyssa's Corner is a relaxed space to catch your breath. Bring
              your current WIP (Work In Progress), grab a seat on the manor's
              comfy sofas, and enjoy a moment of creative calm away from the
              main stage.
            </p>
            <div class="card-footer">
              <div class="card-time">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                Open All Evening · No Sign-Up Needed
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ABOUT -->
    <section class="about">
      <div class="about-grid">
        <!-- Left: Image -->
        <div class="about-image-col">
          <div class="about-image-frame">
            <div class="about-image-placeholder">
              <img src="/profilePic.PNG" alt="Profile photo of Alyssa Dannielle" />
            </div>
          </div>
          <span class="about-moss-tag">Fiber Artist</span>
        </div>

        <!-- Right: Text -->
        <div class="about-text-col">
          <p class="section-eyebrow">Behind the Stitches</p>
          <h2 class="about-name">Meet Alyssa<br />Dannielle</h2>
          <div class="about-divider"></div>
          <div class="about-body">
            <p>
              I am a professional fiber artist, pattern designer, and technical
              project manager based in Halethorpe, Maryland. My work is where
              the structure of logic meets the flow of creative intuition.
            </p>
            <p>
              With a background spanning from the pet care industry to
              high-level software implementation, I bring a unique perspective
              to the world of crochet. For me, every pattern is a puzzle to be
              solved, and every garment is an opportunity to build something
              both beautiful and functional.
            </p>
            <p>
              When I'm not at my desk building software mockups or managing tech
              projects, you can find me in my garden removing invasive species
              to make room for natives, or tucked away in my sanctuary shed with
              a hook and a fresh ball of yarn. My goal is to make the art of
              crochet accessible to everyone — from the absolute beginner making
              their first "snake" to the seasoned maker looking for their next
              challenge.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- FOOTER STRIP -->
    <footer class="footer-strip">
      <div class="footer-strip-brand">Alyssa Dannielle <span>Design</span></div>
      <div class="footer-strip-note">
        Visionaries 2026 · Beacon Hill Manor · Leesburg, VA
      </div>
    </footer>
  `;

  const scopedStyles = styles.replace(
    /(^|})\s*([^@{}][^{}]*)\{/g,
    (_fullMatch: string, blockEnd: string, selectorGroup: string) => {
      const scopedSelectorGroup = selectorGroup
        .split(',')
        .map((rawSelector: string) => {
          const selector = rawSelector.trim();

          if (
            selector.length === 0 ||
            selector.startsWith('.visionaries-page') ||
            selector === 'from' ||
            selector === 'to' ||
            /^\d+%$/.test(selector)
          ) {
            return selector;
          }

          return `.visionaries-page ${selector}`;
        })
        .join(', ');

      return `${blockEnd}\n    ${scopedSelectorGroup} {`;
    }
  );

  return (
    <>
      <link
        href='https://fonts.googleapis.com/css2?family=Alice&family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&display=swap'
        rel='stylesheet'
      />
      <style dangerouslySetInnerHTML={{ __html: scopedStyles }} />
      <div className='visionaries-page' dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </>
  );
}
