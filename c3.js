// c3.js – Cube‑3 Logik (QI‑Cube)

function c3_out(ist, soll) {
  document.getElementById("out").innerHTML = `
    <div class="out-title">Wissenschaftlicher Output – Cube‑3</div>
    <div class="out-ist"><b>IST:</b> ${ist}</div>
    <div class="out-soll"><b>SOLL:</b> ${soll}</div>
  `;
}

c3_out("QI aktiv", "Bereit für Verbund");

