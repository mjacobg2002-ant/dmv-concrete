/* =====================================================================
   DMV Concrete — Concrete Calculator
   Vanilla-JS re-implementation of the original calculators.js formulas.
   Slab / Column / Footing → cubic yards, live-updating.
   ===================================================================== */
(function () {
  "use strict";

  var round = function (x) { return Math.round(x * 100) / 100; };
  var num = function (id) {
    var el = document.getElementById(id);
    var v = parseFloat(el && el.value);
    return isNaN(v) ? 0 : v;
  };
  var setResult = function (id, val) {
    var el = document.getElementById(id);
    if (el) el.textContent = (isNaN(val) ? 0 : val);
  };

  // --- formulas (identical math to the source site) ---
  function calcSlab() {
    // width (ft) x length (ft) x thickness (in) -> cubic yards
    var w = num("slab-width"), l = num("slab-length"), t = num("slab-thick");
    setResult("slab-result", round((w * l * t / 12) / 27));
  }
  function calcColumn() {
    // height (ft), diameter (in), quantity -> cubic yards
    var h = num("column-height"), d = num("column-diameter");
    var q = parseInt(document.getElementById("column-quantity").value, 10);
    if (isNaN(q) || q < 1) q = 1;
    var r = d / 24; // inches -> radius in feet (d/12/2)
    setResult("column-result", round(((3.14 * r * r * h) / 27) * q));
  }
  function calcFooter() {
    // width (in), length (ft), thickness (in) -> cubic yards
    var w = num("footer-width"), l = num("footer-length"), t = num("footer-thick");
    setResult("footer-result", round((w / 12 * l * t / 12) / 27));
  }

  var calcs = { slab: calcSlab, column: calcColumn, footer: calcFooter };

  // --- live updates ---
  ["slab-width", "slab-length", "slab-thick"].forEach(function (id) {
    var el = document.getElementById(id); if (el) el.addEventListener("input", calcSlab);
  });
  ["column-height", "column-diameter", "column-quantity"].forEach(function (id) {
    var el = document.getElementById(id); if (el) el.addEventListener("input", calcColumn);
  });
  ["footer-width", "footer-length", "footer-thick"].forEach(function (id) {
    var el = document.getElementById(id); if (el) el.addEventListener("input", calcFooter);
  });

  // --- tabs ---
  var tabs = document.querySelectorAll("[data-calc-tab]");
  var panels = document.querySelectorAll("[data-calc-panel]");
  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      var name = tab.getAttribute("data-calc-tab");
      tabs.forEach(function (t) { t.setAttribute("aria-selected", t === tab ? "true" : "false"); });
      panels.forEach(function (p) { p.classList.toggle("is-active", p.getAttribute("data-calc-panel") === name); });
      if (calcs[name]) calcs[name](); // refresh result on switch
    });
  });

  // initial compute
  calcSlab(); calcColumn(); calcFooter();
})();
