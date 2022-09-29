const selectable1 = document.getElementById("selectable-1");
const selectable2 = document.getElementById("selectable-2");
const selectable1Content = document.querySelector(
  ".selectable-1-content-container"
);
const selectable2Content = document.querySelector(
  ".selectable-2-content-container"
);

selectable1.addEventListener("click", function () {
  selectable1Content.classList.toggle("toggled");
  if (selectable2Content.matches(".toggled")) {
    selectable2Content.classList.toggle("toggled");
  }
});

selectable2.addEventListener("click", function () {
  selectable2Content.classList.toggle("toggled");
  if (selectable1Content.matches(".toggled")) {
    selectable1Content.classList.toggle("toggled");
  }
});
