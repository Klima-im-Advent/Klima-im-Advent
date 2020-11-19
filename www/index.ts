const body = document.getElementsByTagName('body')[0];

let startX = 0;
let lastX = 0;
body.addEventListener(
  'touchstart',
  (event) => {
    console.log(event.touches[0].clientX);
    startX = event.touches[0].clientX;
    lastX = startX;
  });
body.addEventListener(
  'touchmove',
  (event) => {
    event.preventDefault();
    console.log("New Position:", event.touches[0].clientX);
    const currentX = event.touches[0].clientX;
    const distance = lastX - currentX;
    console.log("Distance: ", distance);
    body.scrollBy({
      left: distance,
      behavior: 'smooth',
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
    console.log('end');
    const remainder = body.scrollLeft % screen.width;

    if (remainder < screen.width / 2) {
      body.scroll({
        left: body.scrollLeft - remainder,
        behavior: 'smooth',
      });
    } else {
      body.scroll({
        left: body.scrollLeft + screen.width - remainder,
        behavior: 'smooth',
      });
    }
  }); 
