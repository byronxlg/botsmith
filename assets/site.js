// Staging copies (github.io) must not compete with botsmith.dev in search.
if (location.hostname.endsWith("github.io")) {
  var m = document.createElement("meta");
  m.name = "robots"; m.content = "noindex";
  document.head.appendChild(m);
}
