const myStyleButton = document.querySelector(".hw11-button");
const myStyleText = document.querySelector(".hw11-div");

function showMyStyle() {
  if (myStyleButton.style.background === "green") {
    myStyleButton.style.background = "red";
    myStyleButton.textContent = "OFF";
    myStyleText.style.color = "red";
    myStyleText.textContent = "OFF";
  } else {
    myStyleButton.style.background = "green";
    myStyleButton.textContent = "ON";
    myStyleText.style.color = "green";
    myStyleText.textContent = "ON";
  }
}
