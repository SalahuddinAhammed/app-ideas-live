const inputTopRight = document.querySelector("#inputTopRight");
const inputBottomRight = document.querySelector("#inputBottomRight");
const inputTopLeft = document.querySelector("#inputTopLeft");
const inputBottomLeft = document.querySelector("#inputBottomLeft");
const allInput = document.querySelectorAll(".input-group");
const previewEl = document.querySelector("#previewEl");
const codeEl = document.querySelector("#codeEl");
const btnCopy = document.querySelector("#btnCopy");
const btnIconClipboard = document.querySelector("#btnIconClipboard");
const btnIconCheck = document.querySelector("#btnIconCheck");

const getInputValue = (id, selector) => {
  return event.target.id === id ? event.target.value : selector.value;
};

const showPreview = (position, value) => {
  const borderRadiusValue = value + "px";
  switch (position) {
    case "top-left":
      previewEl.style.borderTopLeftRadius = borderRadiusValue;
      break;
    case "top-right":
      previewEl.style.borderTopRightRadius = borderRadiusValue;
      break;
    case "bottom-right":
      previewEl.style.borderBottomRightRadius = borderRadiusValue;
      break;
    case "bottom-left":
      previewEl.style.borderBottomLeftRadius = borderRadiusValue;
      break;
    default:
      alert("Can not update preview");
  }
};

const resetPreview = (position, value) => {
  if (!Number(value)) {
    if (position === "top-left") previewEl.style.borderTopLeftRadius = "0";
    if (position === "top-right") previewEl.style.borderTopRightRadius = "0";
    if (position === "bottom-right")
      previewEl.style.borderBottomRightRadius = "0";
    if (position === "bottom-left")
      previewEl.style.borderBottomLeftRadius = "0";
  }
};

const generateCssCode = () => {
  codeEl.innerHTML = `-webkit-${previewEl.getAttribute("style")}
-moz-${previewEl.getAttribute("style")}
${previewEl.getAttribute("style")}`;
};

allInput.forEach((i) => {
  i.addEventListener("input", (event) => {
    const valueTopRight = getInputValue("inputTopRight", inputTopRight);
    const valueTopLeft = getInputValue("inputTopLeft", inputTopLeft);
    const valueBottomLeft = getInputValue("inputBottomLeft", inputBottomLeft);
    const valueBottomRight = getInputValue(
      "inputBottomRight",
      inputBottomRight
    );

    showPreview("top-left", valueTopLeft);
    showPreview("top-right", valueTopRight);
    showPreview("bottom-right", valueBottomRight);
    showPreview("bottom-left", valueBottomLeft);

    resetPreview("top-left", valueTopLeft);
    resetPreview("top-right", valueTopRight);
    resetPreview("bottom-right", valueBottomRight);
    resetPreview("bottom-left", valueBottomLeft);

    generateCssCode();
  });
});

btnCopy.addEventListener("click", () => {
  codeEl.select();
  codeEl.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(codeEl.value);

  btnIconClipboard.classList.add("hidden");
  btnIconCheck.classList.remove("hidden");

  setTimeout(() => {
    btnIconClipboard.classList.remove("hidden");
    btnIconCheck.classList.add("hidden");
  }, 2000);
});
