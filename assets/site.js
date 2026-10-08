// Staging copies (github.io) must not compete with botsmith.dev in search.
if (location.hostname.endsWith("github.io")) {
  var m = document.createElement("meta");
  m.name = "robots"; m.content = "noindex";
  document.head.appendChild(m);
}

// The hero exchange plays once on load. Without this class the lines are simply visible,
// so the page reads the same with scripts off or under reduced motion (handled in CSS).
var ex = document.querySelector(".exchange");
if (ex && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  ex.classList.add("play");
}
