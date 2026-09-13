// Staging copies (github.io) must not compete with botsmith.dev in search.
if (location.hostname.endsWith("github.io")) {
  var m = document.createElement("meta");
  m.name = "robots"; m.content = "noindex";
  document.head.appendChild(m);
}
// Send the form back to the page it was on, whichever host serves it.
var next = document.querySelector('input[name="_next"]');
if (next) next.value = location.origin + location.pathname.replace(/[^/]*$/, "") + "thanks.html";
