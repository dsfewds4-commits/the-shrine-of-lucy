:root {
  --bg: #120616;
  --panel: #1a0b24;
  --card: #24112f;
  --accent: #ff7ab8;
  --accent-2: #ffc94f;
  --text: #ffe9f7;
  --muted: #f3a9d3;
  --shadow: 0 20px 60px rgba(0, 0, 0, 0.45);
  --glow: 0 0 30px rgba(255, 122, 184, 0.6);
  --radius: 16px;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  color: var(--text);
  background:
    radial-gradient(circle at 10% 10%, rgba(255, 192, 203, 0.2), transparent 45%),
    radial-gradient(circle at 80% 0%, rgba(177, 109, 244, 0.25), transparent 45%),
    radial-gradient(circle at 10% 90%, rgba(255, 217, 102, 0.15), transparent 45%),
    var(--bg);
  min-height: 100vh;
  overflow-x: hidden;
}

h1, h2, h3 {
  font-family: 'Playfair Display', 'Inter', serif;
  margin: 0 0 8px;
  letter-spacing: -0.02em;
}

p {
  margin: 0;
  color: var(--muted);
}

code {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 6px;
  padding: 2px 6px;
}

.eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.14em;
  font-size: 12px;
  color: var(--accent);
  margin-bottom: 6px;
}

.lede {
  max-width: 680px;
  line-height: 1.6;
}

.primary-btn,
.secondary-btn {
  cursor: pointer;
  border: none;
  font-weight: 700;
  padding: 12px 18px;
  border-radius: 12px;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
}

.primary-btn {
  background: linear-gradient(135deg, var(--accent), #ffb347);
  color: #1a1305;
  box-shadow: var(--glow);
}

.primary-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 12px 40px rgba(248, 211, 79, 0.35);
}

.secondary-btn {
  background: rgba(255, 255, 255, 0.06);
  color: var(--text);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.secondary-btn:hover {
  transform: translateY(-1px);
}

.background-lights {
  position: fixed;
  inset: 0;
  background:
    radial-gradient(circle at 30% 20%, rgba(255, 182, 193, 0.4), transparent 40%),
    radial-gradient(circle at 80% 70%, rgba(186, 85, 211, 0.4), transparent 40%),
    radial-gradient(circle at 10% 80%, rgba(255, 215, 0, 0.25), transparent 35%);
  filter: blur(40px);
  z-index: 0;
  pointer-events: none;
  opacity: 0.7;
  transition: opacity 0.6s ease;
}

body.dim .background-lights {
  opacity: 0.35;
}

.cupboard-stage {
  position: relative;
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 60px 20px;
  z-index: 1;
  text-align: center;
}

.cupboard {
  position: relative;
  width: 260px;
  height: 420px;
  perspective: 1200px;
}

.cupboard-shadow {
  position: absolute;
  inset: 10px;
  background: linear-gradient(145deg, rgba(0,0,0,0.25), rgba(0,0,0,0.45));
  filter: blur(18px);
  transform: translateY(16px);
  z-index: 0;
}

.door {
  position: absolute;
  inset: 0;
  transform-style: preserve-3d;
  transform-origin: left;
  transition: transform 1s cubic-bezier(0.22, 1, 0.36, 1);
  z-index: 2;
}

.door-front {
  position: absolute;
  inset: 0;
  background: linear-gradient(160deg, #f7d045, #f0b43c);
  border-radius: 24px;
  box-shadow: var(--shadow);
  border: 6px solid #1d1a11;
  display: grid;
  place-items: center;
}

.door-front::after {
  content: "";
  position: absolute;
  inset: 18px;
  border-radius: 18px;
  border: 3px solid rgba(0,0,0,0.25);
}

.door .label {
  font-family: 'Playfair Display', serif;
  font-size: 28px;
  color: #1d1a11;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.knob {
  position: absolute;
  right: 26px;
  top: 50%;
  width: 26px;
  height: 26px;
  background: #1d1a11;
  border-radius: 50%;
  transform: translateY(-50%);
  box-shadow: inset 0 2px 0 rgba(255,255,255,0.2);
}

.cupboard.open .door {
  transform: rotateY(-100deg);
}

.intro-text {
  margin-top: 26px;
  max-width: 520px;
  color: var(--muted);
}

.intro-text p {
  margin-bottom: 14px;
  color: var(--text);
}

.shrine {
  opacity: 0;
  pointer-events: none;
  transform: translateY(40px);
  transition: opacity 0.8s ease, transform 0.8s ease;
  z-index: 1;
}

.shrine.visible {
  opacity: 1;
  pointer-events: auto;
  transform: translateY(0);
}

.shrine {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px 120px;
}

.shrine-hero {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 32px;
  align-items: center;
  margin-bottom: 32px;
}

.hero-photo {
  justify-self: end;
  max-width: 360px;
  width: 100%;
}

.hero-photo img {
  width: 100%;
  border-radius: 20px;
  object-fit: cover;
  box-shadow: var(--shadow);
  border: 2px solid rgba(255,255,255,0.05);
}

.hero-actions {
  display: flex;
  gap: 12px;
  margin-top: 18px;
  flex-wrap: wrap;
}

.panel {
  background: linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0));
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: var(--radius);
  padding: 22px;
  box-shadow: var(--shadow);
  margin-bottom: 24px;
  position: relative;
  overflow: hidden;
}

.panel::after {
  content: "";
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 30% 20%, rgba(255, 122, 184, 0.3), transparent 40%),
    radial-gradient(circle at 80% 90%, rgba(255, 255, 255, 0.08), transparent 45%);
  pointer-events: none;
}

.panel-header {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  align-items: flex-start;
  margin-bottom: 14px;
}

.hint {
  max-width: 320px;
  text-align: right;
}

.upload-area {
  margin-bottom: 16px;
  display: flex;
  gap: 12px;
  align-items: center;
}

.password-box {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 10px;
  border-radius: 999px;
  background: rgba(0,0,0,0.35);
  border: 1px solid rgba(255,255,255,0.18);
}

.password-box label {
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--muted);
}

.password-box input {
  width: 60px;
  padding: 4px 8px;
  border-radius: 999px;
  border: none;
  outline: none;
  background: rgba(255,255,255,0.1);
  color: var(--text);
  text-align: center;
}

.secondary-btn.tiny {
  padding: 6px 10px;
  font-size: 11px;
}

.secondary-btn.locked {
  opacity: 0.4;
}

.photo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 14px;
}

.photo-card {
  position: relative;
  overflow: hidden;
  border-radius: 14px;
  background: var(--card);
  cursor: pointer;
  min-height: 200px;
  border: 1px solid rgba(255,255,255,0.04);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.photo-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.photo-card .caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 10px 12px;
  background: linear-gradient(180deg, transparent, rgba(0,0,0,0.7));
  color: #f6f8ff;
  font-weight: 600;
}

.photo-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 14px 35px rgba(0,0,0,0.4);
}

.photo-card .placeholder {
  position: absolute;
  inset: 0;
  background:
    repeating-linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.06) 14px, rgba(255,255,255,0.02) 14px, rgba(255,255,255,0.02) 28px),
    radial-gradient(circle at 20% 10%, rgba(255, 192, 203, 0.4), transparent 55%);
  display: grid;
  place-items: center;
  color: var(--muted);
  padding: 16px;
  text-align: center;
}

.hero-photo img.no-photo {
  background:
    radial-gradient(circle at 20% 15%, rgba(255,255,255,0.25), transparent 55%),
    radial-gradient(circle at 80% 85%, rgba(255, 122, 184, 0.7), transparent 60%);
  display: block;
}

.hero-photo img.no-photo::after {
  content: "LUCY ★ SHRINE";
}

.shake {
  animation: shake 0.3s linear;
}

@keyframes shake {
  0% { transform: translateX(0); }
  25% { transform: translateX(-3px); }
  50% { transform: translateX(3px); }
  75% { transform: translateX(-2px); }
  100% { transform: translateX(0); }
}

.notes textarea {
  width: 100%;
  min-height: 120px;
  border-radius: 12px;
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.08);
  color: var(--text);
  padding: 12px;
  font-family: inherit;
}

.notes {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.note-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 10px;
  margin-top: 10px;
}

.note {
  background: var(--card);
  border-radius: 12px;
  padding: 12px;
  border: 1px solid rgba(255,255,255,0.06);
  position: relative;
  min-height: 120px;
  box-shadow: var(--shadow);
}

.note .time {
  font-size: 11px;
  color: var(--muted);
  margin-top: 8px;
}

.timeline {
  display: grid;
  gap: 12px;
}

.timeline-item {
  background: var(--card);
  padding: 12px;
  border-radius: 12px;
  border: 1px solid rgba(255,255,255,0.05);
  position: relative;
  overflow: hidden;
}

.timeline-item::before {
  content: attr(data-year);
  position: absolute;
  top: 12px;
  right: 12px;
  font-weight: 700;
  color: var(--accent);
}

.lightbox {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.7);
  backdrop-filter: blur(6px);
  display: none;
  align-items: center;
  justify-content: center;
  padding: 16px;
  z-index: 999;
}

.lightbox.open {
  display: flex;
}

.lightbox-content {
  position: relative;
  max-width: 800px;
  width: 100%;
  background: #0d0f1a;
  border-radius: 16px;
  padding: 12px;
  box-shadow: 0 30px 70px rgba(0,0,0,0.5);
  border: 1px solid rgba(255,255,255,0.1);
}

.lightbox img {
  width: 100%;
  border-radius: 12px;
  object-fit: contain;
  max-height: 70vh;
}

.lightbox .close {
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(255,255,255,0.1);
  color: white;
  border: none;
  border-radius: 50%;
  width: 34px;
  height: 34px;
  cursor: pointer;
  font-size: 20px;
}

.lightbox p {
  margin-top: 10px;
  color: var(--text);
  text-align: center;
}

.fallback {
  background: repeating-linear-gradient(45deg, rgba(255,255,255,0.06), rgba(255,255,255,0.06) 14px, rgba(255,255,255,0.08) 14px, rgba(255,255,255,0.08) 28px);
}

.credit {
  position: fixed;
  bottom: 16px;
  right: 16px;
  font-size: 12px;
  color: var(--muted);
  opacity: 0.6;
  z-index: 100;
  font-weight: 500;
  letter-spacing: 0.05em;
  pointer-events: none;
}

@media (max-width: 720px) {
  .cupboard {
    width: 220px;
    height: 360px;
  }
  .hero-actions {
    flex-direction: column;
  }
  .hint {
    text-align: left;
  }
}
