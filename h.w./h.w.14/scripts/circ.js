const startButton = document.getElementById("btb");
const container = document.querySelector(".container");

function randomSelect() {
  return Math.floor(Math.random() * 255);
}

function rgb() {
  let red = randomSelect();
  let green = randomSelect();
  let blue = randomSelect();
  let rgbColor = "rgb(" + `${red}` + "," + `${green}` + "," + `${blue}` + ")";
  return rgbColor;
}

startButton.addEventListener("click", addButton);

function checkCount() {
  let countCircle = Number(prompt("Enter count:", 0));
  if (countCircle === 0) {
    return;
  } else {
    while (Number.isNaN(countCircle) === true) {
      countCircle = Number(prompt("Enter count:", 0));
      if (countCircle === 0) {
        return;
      }
    }
    return countCircle;
  }
}

function addButton() {
  let countCircle = checkCount();
  var i = 0;
  for (i = 0; i < countCircle; i++) {
    const btn = document.createElement("button");
    btn.classList.add("lamp");
    container.append(btn);
    btn.style.backgroundColor = rgb();
  }
}

export { addButton };
