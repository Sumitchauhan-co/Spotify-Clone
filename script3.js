// 1. block screen rotate

const warning = document.getElementById("rotate-warning");

function isMobileDevice() {
  return window.matchMedia("(max-width: 1025px)").matches;
}

function handleOrientationChange() {
  if (!isMobileDevice()) {
    warning.style.display = "none";
    return;
  }

  const isLandscape = window.matchMedia("(orientation: landscape)").matches;
  warning.style.display = isLandscape ? "flex" : "none";
}

handleOrientationChange();

if (screen.orientation && screen.orientation.addEventListener) {
  screen.orientation.addEventListener("change", handleOrientationChange);
} else {
  window.addEventListener("orientationchange", handleOrientationChange);
}

window.addEventListener("resize", handleOrientationChange);

// 2. Full screen

let fullScreenSvg1 = document.querySelector(".full-screen svg:nth-child(1)"),
  fullScreenSvg2 = document.querySelector(".full-screen svg:nth-child(2)");

document.querySelector(".full-screen").addEventListener("click", async () => {
  try {
    if (document.documentElement.requestFullscreen) {
      await document.documentElement.requestFullscreen();
    }
    await screen.orientation.lock("portrait");
  } catch (err) {
    console.warn("⚠ Orientation lock failed:", err);
  }
});

document.querySelector(".full-screen").addEventListener("click", () => {
  try {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    }
  } catch (err) {
    console.warn("⚠ exit failed:", err);
  }
});

document.addEventListener("fullscreenchange", () => {
  if (document.fullscreenElement) {
    fullScreenSvg1.classList.add("display-none");
    fullScreenSvg2.classList.remove("display-none");
  } else {
    fullScreenSvg2.classList.add("display-none");
    fullScreenSvg1.classList.remove("display-none");
  }
});

// 3. Volume Control

const volumeSlider = document.getElementById("volume-slider");
let currentVol = 1.0

volumeSlider.addEventListener("input", (e) => {
  currentVol = parseFloat(e.target.value);
  if (b) b.volume = currentVol;
  // console.log("set vol to:", currentVol);
  e.target.style.setProperty("--val", currentVol * 100 + "%");
});
