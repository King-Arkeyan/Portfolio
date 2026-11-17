const header = document.querySelector("header"),
  hbg = header.querySelector(".hbg"),
  menu = document.querySelector(".menu");

hbg.addEventListener("click", () => {
  if (menu.classList.contains("show")) {
    menu.classList.remove("show");
  } else {
    menu.classList.add("show");
  }
});
