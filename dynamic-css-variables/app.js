const loginEl = document.querySelector(".login");

const inputUserId = loginEl.querySelector("#userid");
const inputPassword = loginEl.querySelector("#password");

const btnLogin = document.querySelector(".btn--login");
const btnCancel = document.querySelector(".btn--cancel");

const labelErrorNothing = document.querySelector(".error--nothing");
const labelErrorMatching = document.querySelector(".error--matching");

const showError = (element) => {
  element.classList.remove("hidden");
};

const hideError = () => {
  labelErrorNothing.classList.add("hidden");
  labelErrorMatching.classList.add("hidden");
};

const resetColor = (element) => {
  element.style.setProperty("--color-input-bg", "#fbfbfb");
};

const resetInputBox = (input) => {
  input.value = "";
};

const resetStyleOnClick = (selector) => {
  selector.addEventListener("click", () => {
    selector.style.setProperty("--color-input-bg", "#fbfbfb");
    hideError();
  });
};

resetStyleOnClick(inputUserId);
resetStyleOnClick(inputPassword);

btnLogin.addEventListener("click", () => {
  const userId = inputUserId.value;
  const password = inputPassword.value;
  const logicNothing = (value) => value.trim() === "";
  const logicMatching = (value, match) => value !== match;
  const changeInputBgColor = (logic, element, color) =>
    logic && element.style.setProperty("--color-input-bg", color);

  const logicNothingUserId = logicNothing(userId);
  const logicNothingPassword = logicNothing(password);
  const colorNothing = "#ffec99";

  const logicMatchingUserId = logicMatching(userId, "testuser");
  const logicMatchingPassword = logicMatching(password, "mypassword");
  const logicMatchingColor = "#ff8787";

  if (logicNothingUserId || logicNothingPassword) {
    showError(labelErrorNothing);
    changeInputBgColor(logicNothingUserId, inputUserId, colorNothing);
    changeInputBgColor(logicNothingPassword, inputPassword, colorNothing);
  } else if (logicMatchingUserId || logicMatchingPassword) {
    showError(labelErrorMatching);
    changeInputBgColor(logicMatchingUserId, inputUserId, logicMatchingColor);
    changeInputBgColor(
      logicMatchingPassword,
      inputPassword,
      logicMatchingColor
    );
  } else {
    document.body.innerHTML = `<p class="success-message">You have logged in!</p>`;
  }
});

btnCancel.addEventListener("click", () => {
  hideError();
  resetColor(inputUserId);
  resetColor(inputPassword);
  resetInputBox(inputUserId);
  resetInputBox(inputPassword);
});
