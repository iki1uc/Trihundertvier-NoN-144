// CUBE‑3 – Meta / Zukunft / Synthese

// Konfiguration: Ebenen, Modi, Sprüche
const C3_CONFIG = {
  modes: ["SCAN", "FUTURE", "META"],
  quotes: {
    SCAN: [
      "Ich scanne deinen Zustand – ohne Urteil.",
      "Alles, was ist, darf erst einmal einfach nur sein.",
      "Beobachtung ist der erste Akt von Klarheit."
    ],
    FUTURE: [
      "Zukunft ist kein Ort – sie ist eine Richtung.",
      "Du musst nicht alles wissen, nur den nächsten ehrlichen Schritt.",
      "Wenn du weiter siehst, musst du nicht schneller rennen."
    ],
    META: [
      "Du bist mehr als dein aktueller Zustand.",
      "Systeme sind Spiegel – die Frage ist: Was willst du sehen?",
      "Meta heißt nicht Abstand – sondern bewusste Nähe."
    ]
  }
};

let c3_state = {
  lastInput: "",
  modeIndex: 0,
  vr: null
};

// Hilfsfunktion: zufälliges Element
function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Hauptfunktion: CUBE‑3 ausführen
export function cube3_run(input, vr = null) {
  const out = document.getElementById("c4");
  if (!out) return;

  c3_state.lastInput = input;
  c3_state.vr = vr;

  const mode = C3_CONFIG.modes[c3_state.modeIndex % C3_CONFIG.modes.length];
  c3_state.modeIndex++;

  const quote = pick(C3_CONFIG.quotes[mode]);

  const vrLine =
    vr === null
      ? "VR: – (neutral)"
      : "VR: " + vr + (vr >= 1 ? " → Verhandlung offen" : " → Verhandlung blockiert");

  out.textContent =
    "CUBE‑3 · " + mode + "\n" +
    "────────────────────\n" +
    shinePresent(input) + "\n\n" +
    vrLine + "\n" +
    "META: " + quote;
}

// optional global
window.cube3_run = cube3_run;
