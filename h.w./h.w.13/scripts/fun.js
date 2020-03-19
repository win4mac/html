const inputName = document.querySelector(".form-input__name");
const inputComment = document.querySelector(".form-input__comment");
const addBtn = document.querySelector(".btn-view");
const answerForm = document.querySelector(".answer");

addBtn.addEventListener("click", checkEnter);

function checkEnter() {
  const valueName = inputName.value;
  const valueComment = inputComment.value;
  if (!valueName) {
    inputName.classList.add("error");
    return;
  } else {
    inputName.classList.remove("error");
    if (!valueComment) {
      inputComment.classList.add("error");
      return;
    }
    inputComment.classList.remove("error");
  }
  answerForm.innerHTML =
    answerForm.innerHTML + addComment(valueName, valueComment);
  inputName.value = "";
  inputComment.value = "";
}

function addComment(value1, value2) {
  return `<div class="answer__form answer__view"><span class="answer__view_text">${value2}</span>
<span class="answer__view_name">${value1}</span>
</div>`;
}
