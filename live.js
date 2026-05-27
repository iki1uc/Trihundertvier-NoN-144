/* ============================================================
   CUBE‑LIVE UPGRADE 2026
   – Meta‑Sync zu CUBE‑3
   – ALL4ALL Routing
   – Respo‑Check
   – Name‑Check
============================================================ */

// 1) CUBE‑LIVE → CUBE‑3 Meta‑Sync
window.live_toC3 = function(input) {
    if (typeof cube3_run === "function") {
        cube3_run("LIVE→C3:" + input, null, null, "LIVE‑SYNC");
    }
};

// 2) CUBE‑LIVE → ALL4ALL Routing
window.live_toA4A = function(data) {
    const el = document.getElementById("all4all-status");
    if (!el) return;

    el.textContent =
        "ALL4ALL‑ROUTING\n" +
        "───────────────\n" +
        "IN:  " + data.in + "\n" +
        "OUT: " + data.out + "\n" +
        "MODE: " + data.mode + "\n" +
        "GRAV: " + data.grav + "\n" +
        "CUBE: " + data.cube + "\n" +
        "ROLE: " + data.role + "\n";
};

// 3) Respo‑Check
window.live_respo = function() {
    return {
        width: window.innerWidth,
        height: window.innerHeight,
        ratio: window.innerWidth + "×" + window.innerHeight
    };
};

// 4) Name‑Check (CUBE‑LIVE Instanzname)
window.live_name = function() {
    return "CUBE‑LIVE#SHIFT2026";
};
