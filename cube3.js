// CUBE‑3 – Vollversion (Meta / Zukunft / Synthese / VR / EVO / ALL4ALL / Masken)

// 1. KONFIGURATION
const C3 = {
  modes: ["SCAN", "FUTURE", "META", "VR", "EVO", "ALL4ALL", "MASK"],
  quotes: {
    SCAN: [
      "Ich scanne deinen Zustand – ohne Urteil.",
      "Beobachtung ist der erste Akt von Klarheit."
    ],
    FUTURE: [
      "Zukunft ist kein Ort – sie ist eine Richtung.",
      "Der nächste Schritt ist immer klein – aber ehrlich."
    ],
    META: [
      "Du bist mehr als dein aktueller Zustand.",
      "Meta heißt bewusste Nähe, nicht Abstand."
    ],
    VR: [
      "VR zeigt, ob das System offen oder geschützt ist.",
      "Verhandlung ist ein Zustand, kein Befehl."
    ],
    EVO: [
      "ALT → EVO7 → EVO8 – Entwicklung ist Bewegung.",
      "EVO ist die Sprache der Veränderung."
    ],
    ALL4ALL: [
      "Ordnung ist die leise Form von Intelligenz.",
      "Gemeinschaft entsteht durch bewusste Entscheidungen."
    ],
    MASK: [
      "[■■■ META‑MASKE ■■■]",
      "[■■■ ZUKUNFTS‑MASKE ■■■]"
    ]
  }
};

let C3_STATE = {
  lastInput: "",
  modeIndex: 0,
  vr: null,
  evo: null,
  all4allQuote: null
};

// Hilfsfunktion
function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// 2. HAUPTFUNKTION
export function cube3_run(input, vr = null, evo = null, all4allQuote = null) {
  const out = document.getElementById("c4");
  if (!out) return;

  C3_STATE.lastInput = input;
  C3_STATE.vr = vr;
  C3_STATE.evo = evo;
  C3_STATE.all4allQuote = all4allQuote;

  const mode = C3.modes[C3_STATE.modeIndex % C3.modes.length];
  C3_STATE.modeIndex++;

  const quote = pick(C3.quotes[mode]);

  const vrLine =
    vr === null
      ? "VR: – (neutral)"
      : "VR: " + vr + (vr >= 1 ? " → offen" : " → blockiert");

  const evoLine =
    evo === null
      ? "EVO: –"
      : "EVO: " + evo;

  const all4allLine =
    all4allQuote === null
      ? "ALL4ALL: –"
      : "ALL4ALL: " + all4allQuote;

  // shinePresent optional
  let renderedInput = input;
  if (typeof shinePresent === "function") {
    renderedInput = shinePresent(input);
  }

  out.textContent =
    "CUBE‑3 · " + mode + "\n" +
    "────────────────────────\n" +
    renderedInput + "\n\n" +
    vrLine + "\n" +
    evoLine + "\n" +
    all4allLine + "\n\n" +
    "META: " + quote;
}

// optional global
window.cube3_run = cube3_run;
