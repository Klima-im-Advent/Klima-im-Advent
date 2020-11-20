import "scroll-behavior-polyfill";
const body = document.getElementsByTagName('body')[0];

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
    body.scrollBy({
      left: distance,
    });
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
    const remainder = body.scrollLeft % elementWidth;

    let breakpoint = null;
    if (lastX < startX) {
      breakpoint = elementWidth / 4;
    } else {
      breakpoint = 3 * elementWidth / 4;
    }
    if (remainder < breakpoint) {
      body.scroll({
        left: body.scrollLeft - remainder,
        behavior: 'smooth',
      });
    } else {
      body.scroll({
        left: body.scrollLeft + elementWidth - remainder,
        behavior: 'smooth',
      });
    }
  }); 
