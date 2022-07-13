const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
const color = document.querySelectorAll(".color");
const currentColor = document.querySelector(".current-color");
const ColorDisplay = document.querySelector(".current-color-display");
const range = document.querySelector(".input-range");
const fillBtn = document.querySelector(".fill-btn");
const saveBtn = document.querySelector(".save-btn");

canvas.width = 600;
canvas.height = 600;

ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.lineWidth = 10.5;
ctx.lineCap = "round";

let painting = false;
let filling = false;

function onMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;

  if (!painting) {
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else {
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}

function onMouseDown() {
  painting = true;
  if (filling) {
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }
}

function changeTool() {
  if (!filling) {
    filling = true;
    fillBtn.innerText = "paint";
  } else {
    filling = false;
    fillBtn.innerText = "fill";
  }
}

function handleRange(event) {
  ctx.lineWidth = event.target.value;
}

function changeRadius(event) {
  color.forEach((color) => color.classList.remove("color-radius"));
  ColorDisplay.classList.remove("color-radius");
  event.classList.add("color-radius");
}

color.forEach((color) =>
  color.addEventListener("click", (event) => {
    changeRadius(event.target);
  })
);

currentColor.addEventListener("input", (event) => {
  changeRadius(event.target.parentElement);
});

function changeColor(event) {
  const color = event;
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  ColorDisplay.style.backgroundColor = color;
}
ColorDisplay.style.backgroundColor = currentColor.value;

color.forEach((color) =>
  color.addEventListener("click", (event) => {
    changeColor(event.target.style.backgroundColor);
  })
);

currentColor.addEventListener("input", (event) => {
  changeColor(event.target.value);
});

function saveImage() {
  const image = canvas.toDataURL();
  const link = document.createElement("a");
  link.href = image;
  link.download = "image";
  link.click();
}

function handleCM(event) {
  event.preventDefault();
}

canvas.addEventListener("mousemove", onMouseMove);
canvas.addEventListener("mousedown", onMouseDown);
canvas.addEventListener("mouseup", () => (painting = false));
fillBtn.addEventListener("click", changeTool);
range.addEventListener("input", handleRange);
saveBtn.addEventListener("click", saveImage);
canvas.addEventListener("contextmenu", handleCM);
