class Hoof {
  x: number;
  y: number;
  element: Element;
  nextHoof: Hoof | null;
  isVanishing = false;
  cssPrefix: string;

  constructor(
    x: number,
    y: number,
    element: Element,
    cssPrefix: string,
    nextHoof: Hoof | null) {
    this.x = x;
    this.y = y;
    this.element = element;
    this.cssPrefix = cssPrefix;
    this.nextHoof = nextHoof;

    document.documentElement.style.setProperty(
      "--" + this.cssPrefix + "-x",
      this.x + "px");
    document.documentElement.style.setProperty(
      "--" + this.cssPrefix + "-y",
      this.y + "px");
    document.documentElement.style.setProperty(
      "--" + this.cssPrefix + "-opacity",
      "1");

    this.element.addEventListener(
      "transitionend",
      () => {
        this.handleTransitionEnd();
      }
    );
  }

  vanish() {
    document.documentElement.style.setProperty(
      "--" + this.cssPrefix + "-opacity",
      "0");
    this.isVanishing = true;
  }

  handleTransitionEnd() {
    if (this.isVanishing) {
      this.isVanishing = false;
      this.y -= 100;
      if (this.y < 0) {
        this.y = document.body.clientHeight + this.y;
      }
      document.documentElement.style.setProperty(
        "--" + this.cssPrefix + "-y",
        this.y + "px");
      document.documentElement.style.setProperty(
        "--" + this.cssPrefix + "-opacity",
        "1");
    } else {
      this.nextHoof?.vanish();
    }
  }
}
const leftHoofBack =
  new Hoof(
    100,
    document.documentElement.clientHeight,
    document.getElementById("hoofs-left-1")!,
    "hoof-l-1",
    null);
const rightHoofBack =
  new Hoof(
    170,
    document.documentElement.clientHeight - 40,
    document.getElementById("hoofs-right-1")!,
    "hoof-r-1",
    null);

const leftHoofFront = 
  new Hoof(
    100,
    document.documentElement.clientHeight - 250,
    document.getElementById("hoofs-left-2")!,
    "hoof-l-2",
    rightHoofBack);
leftHoofBack.nextHoof = leftHoofFront;
const rightHoofFront = 
  new Hoof(
    170,
    document.documentElement.clientHeight - 190,
    document.getElementById("hoofs-right-2")!,
    "hoof-r-2",
    leftHoofBack);
rightHoofBack.nextHoof = rightHoofFront;
  
setTimeout(() => rightHoofFront.vanish(), 500);
