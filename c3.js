// CUBE‑3 · Analyse / Meta-Knoten
// ID: CUBE‑3 / FILE: c3.js / ROLE: Analyse & Meta-Auswertung

// 1) Kontext LESEN (nicht überschreiben)
// Warum? → Cube‑3 bewertet nur, was Cube‑2 erzeugt hat.
const CUBE_ID = "CUBE-3";
const FILE_ID = "c3.js";
const ROLE = "Analyse / Meta-Knoten";

const PREV = localStorage.getItem("PREV") || "c2";
const MODE = localStorage.getItem("MODE") || "A"; // A/B/AB → Cluster-Modus

// 2) Gravitation (Zugkraft)
// Warum? → Cube‑3 interpretiert die Richtung, nicht erzeugt sie.
function gravitation3() {
  if (MODE === "A") return "→A";
  if (MODE === "B") return "→B";
  return "↔"; // AB = symmetrisch
}

// 3) Schiene (Pfad c2 → c3 → c4)
// Warum? → Cube‑3 ist der Meta-Knoten zwischen Bewegung und Synthese.
function schiene3() {
  return {
    vorher: PREV,
    jetzt: "c3",
    nachher: "c4",
    grav: gravitation3(),
    mode: MODE
  };
}

// 4) Meta-Slot (Analyse)
// Warum? → Cube‑3 erzeugt die erste Meta-Aussage des Systems.
function metaSlot(input, grav) {
  return `META(${input}) [${grav}]`;
}

// 5) Kernfunktion (Analyse)
// Warum? → Cube‑3 bewertet die Bewegung aus Cube‑2.
function cube3Core(input) {
  const s = schiene3();

  if (MODE === "A") return metaSlot("A3:" + input, s.grav);
  if (MODE === "B") return metaSlot("B3:" + input, s.grav);

  if (MODE === "AB") {
    const left = metaSlot("A3:" + input, s.grav);
    const right = metaSlot("B3:" + input, s.grav);
    return left + " | " + right;
  }
}

// 6) Wissenschaftlicher Output
function c3_out(ist, soll) {
  document.getElementById("out").innerHTML = `
    <div class="out-title">CUBE‑3 – Analyse / Meta-Knoten</div>
    <div class="out-ist"><b>IST:</b> ${ist}</div>
    <div class="out-soll"><b>SOLL:</b> ${soll}</div>
  `;
}

// 7) Startsignal
const s3 = schiene3();
c3_out(
  "Analyse aktiv",
  `Schiene: ${s3.vorher} → ${s3.jetzt} → ${s3.nachher} | MODE: ${s3.mode} | GRAV: ${s3.grav}`
);

// 8) Anzeige (optional)
const md = document.getElementById("modeDisplay");
if (md) {
  md.textContent =
    `CUBE‑3 | MODE: ${MODE} | vorher: ${PREV} | nachher: c4`;
}
