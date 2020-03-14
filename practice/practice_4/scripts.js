// const colorLighterRed = document.querySelector(".lighter__light_red");
// const colorLighterYellow = document.querySelector(".lighter__light_yellow");
// const colorLighterGreen = document.querySelector(".lighter__light_green");

// function disableAll() {
//   colorLighterRed.classList.remove("active");
//   colorLighterYellow.classList.remove("active");
//   colorLighterGreen.classList.remove("active");
// }

// function selectColorRed() {
//   disableAll();
//   colorLighterRed.classList.add("active");
// }

// function selectColorYellow() {
//   disableAll();
//   colorLighterYellow.classList.add("active");
// }

// function selectColorGreen() {
//   disableAll();
//   colorLighterGreen.classList.add("active");
// }

const light = document.querySelectorAll(".lighter__light");

function disableAll() {
  for (let i = 0; i < light.length; i++) {
    light[i].classList.remove("active");
  }
}

function selectColor(button) {
  disableAll();
  button.classList.add("active");
}
