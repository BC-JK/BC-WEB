  document.addEventListener("DOMContentLoaded", function() {
  function loadScript(src, callback) {
  const script = document.createElement("script");
  script.src = src;
  script.onload = callback;
  document.head.appendChild(script);
  }

  if (document.getElementById("player")) {
  loadScript("https://cdn.jsdelivr.net/gh/BC-JK/BC-WEB@refs/heads/main/Website/playerjs.js",
  function() {
  new Playerjs({
  id: "player",
  file: "//samplelib.com/lib/preview/mp4/sample-5s.mp4",
  poster: "/web/image/website.s_image_text_default_image",
  autoplay: "0",
  muted: "1"
  });
  });
  }

  if (document.getElementById("player-rotor")) {
  loadScript("https://cdn.jsdelivr.net/gh/BC-JK/BC-WEB@refs/heads/main/Website/playerjs.js",
  function() {
  new Playerjs({
  id: "player-rotor",
  file: "//commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  poster: "/web/image/website.s_image_text_default_image",
  autoplay: "0",
  muted: "1"
  });
  });
  }

  if (document.getElementById("player-footer")) {
  loadScript("https://cdn.jsdelivr.net/gh/BC-JK/BC-WEB@refs/heads/main/Website/playerjs-autoplay-fullwidth.js",
  function() {
  new Playerjs({
  id: "player-footer",
  file: "//commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  autoplay: "1",
  muted: "1"
  });
  });
  }
  });
