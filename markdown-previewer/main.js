const userInputEl = document.querySelector(".user-input");
const markdwonPreviewEl = document.querySelector(".markdown-preview");
const btnCopy = document.querySelector(".copy");

const getData = function (value) {
  if (value) {
    const markdownObj = JSON.parse(value);
    userInputEl.innerHTML = markdownObj.userInput;
    markdwonPreviewEl.innerHTML = markdownObj.userMd;
  }
};

getData(localStorage.getItem("markdown"));

userInputEl.addEventListener("input", function () {
  const userInput = this.value;
  const userMd = marked(userInput);
  markdwonPreviewEl.innerHTML = userMd;
  const object = { userInput, userMd };
  localStorage.setItem("markdown", JSON.stringify(object));
});

btnCopy.addEventListener("click", function () {
  userInputEl.select();
  userInputEl.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(userInputEl.value);
});
