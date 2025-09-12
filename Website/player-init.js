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
  file: "https://p46.tr4.n0.cdn.zight.com/items/o0u0Yv2j/dd307e52-6c7b-4db5-80ad-908e7f16804b.webm",
  poster: "/web/image/website.s_image_text_default_image",
  autoplay: "0",
  muted: "1",
  controls: ["play", "fullscreen", "buffer"]
  });
  });
  }

  if (document.getElementById("player-rotor")) {
  loadScript("https://cdn.jsdelivr.net/gh/BC-JK/BC-WEB@refs/heads/main/Website/playerjs.js",
  function() {
  new Playerjs({
  id: "player-rotor",
  file: "https://vimeo.com/1118106388",
  poster: "/web/image/website.s_image_text_default_image",
  autoplay: "0",
  muted: "1",
  controls: ["play", "fullscreen", "buffer"]
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
