// constante para manipulacion del Dom
const panels = document.querySelectorAll(".panel");

// recorre los elementos y asigna un listener para clicks agregando y removiendo classes css
panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});

// recorre los elementos y removiendo classes css
function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
