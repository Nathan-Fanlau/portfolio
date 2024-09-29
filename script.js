// FullpageJS
new fullpage('#fullPage', {
  autoScrolling: true,
  navigation: true,
  anchors: ['About', 'Projects', 'Contact'],
  navigationTooltips: ['About', 'Projects', 'Contact'],
  // showActiveTooltip: true,
  navigationPosition: 'left',
  continuousVertical: true,
})

// Cursor
const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");
window.addEventListener("mousemove", function(e) {
  let posX = e.clientX;
  let posY = e.clientY;
  cursorDot.style.left = `${posX}px`;
  cursorDot.style.top = `${posY}px`;
  cursorOutline.animate({
    left: `${posX}px`,
    top: `${posY}px`
  }, {duration: 100, fill: "forwards"});
})

