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
let currentVol = 1.0;

volumeSlider.addEventListener("input", (e) => {
  currentVol = parseFloat(e.target.value);
  if (b) b.volume = currentVol;
  // console.log("set vol to:", currentVol);
  e.target.style.setProperty("--val", currentVol * 100 + "%");
});

// screen load

// window.addEventListener("load", () => {
//   const preloader = document.getElementById("preloader");
//   preloader.style.opacity = "0";
//   preloader.addEventListener("transitionend", () => {
//     preloader.remove();
//   });
// });

// Promise.all([
//   fetch("json/songs2.json"),
//   fetch("json/songs3.json"),
//   fetch("json/section1.json"),
// ]).then(() => {
//   window.dispatchEvent(new Event("load"));
// });

document.onreadystatechange = () => {
  const preloader = document.getElementById("preloader");

  if (document.readyState !== "complete") {
    preloader.style.display = "flex";
    document.body.style.overflow = "hidden"; // prevent scroll during load
  } else {
    document.body.style.overflow = "auto";
    document.body.style.height = "100vh";
    preloader.style.opacity = "0";
    preloader.addEventListener("transitionend", () => {
      preloader.remove();
    });
  }
};

// Tab device unavailable

["resize", "load"].forEach((evt) => {
  window.addEventListener(evt, () => {
    if (window.innerWidth <= 1414 && window.innerWidth > 768) {
      document.querySelector(".not-available").style.display = "flex";
    } else {
      document.querySelector(".not-available").style.display = "none";
    }
  });
});
