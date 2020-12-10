const orange = document.getElementById("orange")!;
const apple = document.getElementById("apple")!;

const has_to_switch = document.getElementsByClassName("switch");

const show_apple = document.getElementsByClassName("apple");
const show_orange = document.getElementsByClassName("orange");

orange.addEventListener("click", () => {
  for (const element of has_to_switch as any) {
    const e = element as HTMLElement;
    e.style.background = "#70041F";
  }
  for (const element of show_apple as any) {
    const e = element as HTMLElement;
    e.style.display = "None";
  }
  for (const element of show_orange as any) {
    const e = element as HTMLElement;
    e.style.display = "Block";
  }
})
apple.addEventListener("click", () => {
  for (const element of has_to_switch as any) {
    const e = element as HTMLElement;
    e.style.background = "#5B7D42";
  }
 for (const element of show_orange as any) {
    const e = element as HTMLElement;
    e.style.display = "None";
  }
  for (const element of show_apple as any) {
    const e = element as HTMLElement;
    e.style.display = "Block";
  } 
}) 
