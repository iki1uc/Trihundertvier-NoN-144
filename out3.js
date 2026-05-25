// out3.js – Wissenschaftlicher Output für Cube‑3

function out3_write(ist, soll, ableitung) {
  document.getElementById("out").innerHTML = `
    <div class="out-title">Wissenschaftlicher Output – Cube‑3</div>
    <div class="out-ist"><b>IST:</b> ${ist}</div>
    <div class="out-soll"><b>SOLL:</b> ${soll}</div>
    <div class="out-ableitung"><b>Ableitung:</b> ${ableitung}</div>
  `;
}

// Beispielstart
out3_write(
  "QI aktiv",
  "Verbund bereit",
  "Cube‑3 liefert Evolutions‑Impulse für den Verbund."
);

