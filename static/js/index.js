"use strict";

var body = document.getElementsByTagName('body')[0];
var list = document.getElementsByTagName('ul')[0];

var resizeHandler = function resizeHandler() {
  document.documentElement.style.setProperty("--inner-screen-height", window.innerHeight + "px");
};

window.addEventListener('resize', resizeHandler);
resizeHandler();
var currentSwiping = null;
var currentXTranslate = 2 * 0.9 * document.body.clientWidth;
list.style.transform = "translate3d(-" + currentXTranslate + "px,0,0)";

var translateBy = function translateBy(x, smooth) {
  if (smooth) {
    list.style.transition = "transform 0.3s";
  } else {
    list.style.transition = "transform 0s ease 0s";
  }

  currentXTranslate = Math.min(list.getBoundingClientRect().width - 0.9 * document.body.clientWidth, currentXTranslate + x);
  list.style.transform = "translate3d(-" + currentXTranslate + "px,0,0)";
};

var startX = 0;
var lastX = 0;
body.addEventListener("touchstart", function (event) {
  if (currentSwiping === null) {
    currentSwiping = "slider";
    startX = event.touches[0].clientX;
    lastX = startX;
  }
});
body.addEventListener("touchmove", function (event) {
  event.preventDefault();

  if (currentSwiping === "slider") {
    var currentX = event.touches[0].clientX;
    var distance = lastX - currentX;
    translateBy(distance, false);
    lastX = event.touches[0].clientX;
  }
}, {
  passive: false
});
body.addEventListener("touchend", function (event) {
  if (currentSwiping === "slider") {
    var elementWidth = 0.9 * document.body.clientWidth;
    var remainder = currentXTranslate % elementWidth;
    var breakpoint = null;

    if (lastX < startX) {
      breakpoint = elementWidth / 6;
    } else {
      breakpoint = 5 * elementWidth / 6;
    }

    if (remainder < breakpoint) {
      translateBy(-remainder, true);
    } else {
      translateBy(elementWidth - remainder, true);
    }

    currentSwiping = null;
  }
});
var overview = document.getElementById("overview");
var zuckerstange = document.getElementById("zuckerstange");
var currentY = 0;
var currentYTranslate = 0;
var isUp = false;

for (var _i = 0, _a = [overview, zuckerstange]; _i < _a.length; _i++) {
  var item = _a[_i];
  item.addEventListener('touchstart', function (event) {
    if (currentSwiping === null) {
      var touch = event.touches[0];
      currentY = touch.screenY;
      overview.style.transition = "transform 0s";
      currentSwiping = "overview";
    }
  });
  item.addEventListener('touchmove', function (event) {
    event.preventDefault();

    if (currentSwiping === "overview") {
      var touch = event.touches[0];
      var distance = touch.screenY - currentY;
      currentYTranslate += distance;
      currentY += distance;
      overview.style.transform = "translate3d(0," + Math.max(currentYTranslate, -document.body.clientHeight) + "px,0)";
    }
  });
  item.addEventListener('touchend', function (event) {
    if (currentSwiping === "overview") {
      overview.style.transition = "transform 0.3s";
      var threshold = document.body.clientHeight / 5;

      if (isUp) {
        threshold = 4 * document.body.clientHeight / 5;
      }

      if (Math.abs(currentYTranslate) > threshold) {
        overview.style.transform = "translate3d(0," + -document.body.clientHeight + "px,0)";
        currentYTranslate = -document.body.clientHeight;
        isUp = true;
      } else {
        overview.style.transform = "translate3d(0,0,0)";
        currentYTranslate = 0;
        isUp = false;
      }

      currentSwiping = null;
    }
  });
}

function stopProp(event) {
  alert("test");
}