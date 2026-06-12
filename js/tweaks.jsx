/* ============================================================
   Tweaks island — drives the refined monochrome system.
   One accent at a time, a clean Dark/Light switch, and
   restrained atmosphere controls.
   ============================================================ */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#F5A524",
  "theme": "Dark",
  "ambience": "Balanced",
  "glow": 48,
  "grain": true,
  "grid": true,
  "orbit": true
}/*EDITMODE-END*/;

/* Curated single accents — one confident hue, never a rainbow. */
const ACCENTS = ["#F5A524", "#BEF264", "#5B9DFF", "#9B7DF5", "#FF7A66"];

function hexToRgb(hex) {
  let h = String(hex).replace("#", "");
  if (h.length === 3) h = h.split("").map((c) => c + c).join("");
  const n = parseInt(h, 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}
function inkFor(rgb) {
  const L = (0.299 * rgb[0] + 0.587 * rgb[1] + 0.114 * rgb[2]) / 255;
  return L > 0.6 ? "#0A0A0C" : "#FFFFFF";
}

function applyTweaks(t) {
  const root = document.documentElement;
  const body = document.body;
  if (!body) return;
  const accent = t.accent || ACCENTS[0];
  const rgb = hexToRgb(accent);
  root.style.setProperty("--accent", accent);
  root.style.setProperty("--accent-rgb", rgb.join(", "));
  root.style.setProperty("--accent-ink", inkFor(rgb));
  // Glow 0..100 -> atmosphere opacity 0 .. 0.75 (kept restrained)
  const op = Math.max(0, Math.min(0.75, (Number(t.glow) / 100) * 0.75));
  root.style.setProperty("--aura-op", op.toFixed(3));
  body.classList.toggle("light", t.theme === "Light");
  body.classList.toggle("amb-darker", t.ambience === "Darker");
  body.classList.toggle("amb-brighter", t.ambience === "Brighter");
  body.classList.toggle("no-grain", !t.grain);
  body.classList.toggle("no-grid", !t.grid);
  body.classList.toggle("no-orbit", !t.orbit);
}

/* Persist to localStorage so selections survive a refresh. */
const LS_KEY = "pf-tweaks-v2";
function loadTweaks() {
  try {
    const saved = JSON.parse(localStorage.getItem(LS_KEY) || "null");
    if (saved && typeof saved === "object") return { ...TWEAK_DEFAULTS, ...saved };
  } catch (e) { /* ignore */ }
  return TWEAK_DEFAULTS;
}
function saveTweaks(t) {
  try { localStorage.setItem(LS_KEY, JSON.stringify(t)); } catch (e) { /* ignore */ }
}

const INITIAL_TWEAKS = loadTweaks();
applyTweaks(INITIAL_TWEAKS);

function TweaksApp() {
  const [t, setTweak] = useTweaks(INITIAL_TWEAKS);
  React.useEffect(() => { applyTweaks(t); saveTweaks(t); }, [t]);
  React.useEffect(() => {
    const onNavTheme = (e) => setTweak("theme", e.detail === "Light" ? "Light" : "Dark");
    window.addEventListener("pf-theme", onNavTheme);
    return () => window.removeEventListener("pf-theme", onNavTheme);
  }, [setTweak]);
  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Theme" />
      <TweakRadio label="Mode" value={t.theme}
        options={["Dark", "Light"]}
        onChange={(v) => setTweak("theme", v)} />
      <TweakColor label="Accent" value={t.accent} options={ACCENTS}
        onChange={(v) => setTweak("accent", v)} />
      <TweakRadio label="Ambience" value={t.ambience}
        options={["Darker", "Balanced", "Brighter"]}
        onChange={(v) => setTweak("ambience", v)} />

      <TweakSection label="Atmosphere" />
      <TweakSlider label="Glow" value={t.glow} min={0} max={100} unit="%"
        onChange={(v) => setTweak("glow", v)} />
      <TweakToggle label="Film grain" value={t.grain}
        onChange={(v) => setTweak("grain", v)} />
      <TweakToggle label="Grid lines" value={t.grid}
        onChange={(v) => setTweak("grid", v)} />
    </TweaksPanel>
  );
}

ReactDOM.createRoot(document.getElementById("tweaks-root")).render(<TweaksApp />);
