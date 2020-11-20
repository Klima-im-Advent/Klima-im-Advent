const body = document.getElementsByTagName('body')[0];
const list = document.getElementsByTagName('ul')[0];


let currentTranslate = 0;
const translateBy = (x: number, smooth: boolean) => {
  if (smooth) {
    list.style.transition = "transform 0.3s";
  } else {
    list.style.transition = "transform 0s ease 0s";
  }
  currentTranslate =
    Math.min(list.getBoundingClientRect().width - 0.9 * screen.width, currentTranslate + x);
  list.style.transform = "translate3d(-" + currentTranslate + "px,0,0)";
};
let startX = 0;
let lastX = 0;
body.addEventListener(
  'touchstart',
  (event) => {
    startX = event.touches[0].clientX;
    lastX = startX;
  });
body.addEventListener(
  'touchmove',
  (event) => {
    event.preventDefault();
    const currentX = event.touches[0].clientX;
    const distance = lastX - currentX;

    translateBy(distance, false);

    lastX = event.touches[0].clientX;
  },
  {
    passive: false,
  });
body.addEventListener(
  'touchend',
  (event) => {
    event.preventDefault();

    const elementWidth = 0.9 * screen.width;
    const remainder = currentTranslate % elementWidth;

    let breakpoint = null;
    if (lastX < startX) {
      breakpoint = elementWidth / 4;
    } else {
      breakpoint = 3 * elementWidth / 4;
    }
    if (remainder < breakpoint) {
      translateBy(-remainder, true);
    } else {
      translateBy(elementWidth - remainder, true);
    }
  }); 
