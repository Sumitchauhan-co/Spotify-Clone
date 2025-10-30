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

// Run once on load
handleOrientationChange();

// Listen for changes
if (screen.orientation && screen.orientation.addEventListener) {
  screen.orientation.addEventListener("change", handleOrientationChange);
} else {
  window.addEventListener("orientationchange", handleOrientationChange);
}

// Optional: Recheck if window resized
window.addEventListener("resize", handleOrientationChange);