/* ============================================================
   Tweaks island — wires the in-page Tweaks panel to the page.
   Drives CSS custom properties + body state classes so every
   section recolors / re-lights live.
   ============================================================ */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": ["#8B5CF6", "#D946EF", "#22D3EE"],
  "ambience": "Balanced",
  "light": false,
  "glow": 78,
  "grain": true,
  "grid": true,
  "orbit": true
}/*EDITMODE-END*/;

/* Curated accent palettes: [violet-slot, fuchsia-slot, cyan-slot] */
const PALETTES = [
  ["#8B5CF6", "#D946EF", "#22D3EE"], // Nebula (default)
  ["#6366F1", "#3B82F6", "#22D3EE"], // Electric blue
  ["#10B981", "#14B8A6", "#38BDF8"], // Aurora green
  ["#FB7185", "#F472B6", "#A855F7"]  // Sunset
];

function applyTweaks(t) {
  const root = document.documentElement;
  const body = document.body;
  if (!body) return;
  const pal = Array.isArray(t.palette) && t.palette.length === 3 ? t.palette : PALETTES[0];
  root.style.setProperty("--violet", pal[0]);
  root.style.setProperty("--fuchsia", pal[1]);
  root.style.setProperty("--cyan", pal[2]);
  // glow 0..100 -> aura opacity 0.1 .. 1.1
  const op = Math.max(0, Math.min(1.1, (Number(t.glow) / 100) * 1.1));
  root.style.setProperty("--aura-op", op.toFixed(3));
  body.classList.toggle("amb-darker", t.ambience === "Darker");
  body.classList.toggle("amb-brighter", t.ambience === "Brighter");
  body.classList.toggle("light", !!t.light);
  body.classList.toggle("no-grain", !t.grain);
  body.classList.toggle("no-grid", !t.grid);
  body.classList.toggle("no-orbit", !t.orbit);
}

// Apply persisted tweaks immediately (before React mounts) to avoid a flash.
// We persist to localStorage so selections survive a page refresh.
const LS_KEY = "pf-tweaks-v1";
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
  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Theme" />
      <TweakColor label="Accent palette" value={t.palette} options={PALETTES}
        onChange={(v) => setTweak("palette", v)} />
      <TweakRadio label="Ambience" value={t.ambience}
        options={["Darker", "Balanced", "Brighter"]}
        onChange={(v) => setTweak("ambience", v)} />
      <TweakToggle label="Light mode" value={t.light}
        onChange={(v) => setTweak("light", v)} />

      <TweakSection label="Atmosphere" />
      <TweakSlider label="Glow" value={t.glow} min={0} max={100} unit="%"
        onChange={(v) => setTweak("glow", v)} />
      <TweakToggle label="Film grain" value={t.grain}
        onChange={(v) => setTweak("grain", v)} />
      <TweakToggle label="Grid lines" value={t.grid}
        onChange={(v) => setTweak("grid", v)} />

      <TweakSection label="Hero" />
      <TweakToggle label="Floating badges" value={t.orbit}
        onChange={(v) => setTweak("orbit", v)} />
    </TweaksPanel>
  );
}

ReactDOM.createRoot(document.getElementById("tweaks-root")).render(<TweaksApp />);
