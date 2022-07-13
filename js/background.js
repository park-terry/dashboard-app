function generateRandomHex() {
  return `#${Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padEnd(6, "0")}`;
}

document.body.style.backgroundColor = generateRandomHex();
document.body.style.transition = "background-color 10s ease-in-out";
