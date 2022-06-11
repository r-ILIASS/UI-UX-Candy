const rippleButton = document.getElementById("ripple-button");

const mousePositionToCustomProps = (event, element) => {
  let posX = event.offsetX;
  let posY = event.offsetY;

  element.style.setProperty("--x", posX + "px");
  element.style.setProperty("--y", posY + "px");
};

rippleButton.addEventListener("click", (event) => {
  mousePositionToCustomProps(event, rippleButton);
  rippleButton.classList.add("pulse");

  rippleButton.addEventListener("animationend", () =>
    rippleButton.classList.remove("pulse")
  );
});
