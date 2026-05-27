export function cube3_run(input) {
  const out = document.getElementById("c4");
  if (!out) return;

  out.textContent =
    "CUBE‑3\n" +
    "──────────────\n" +
    shinePresent(input) + "\n" +
    "META: Zukunfts‑Pfad aktiviert.";
}

window.cube3_run = cube3_run;
