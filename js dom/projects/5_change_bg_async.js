function randomColor() {
  const hex = "0123456789ABCDEF";
  let color = "#";
  let index;
  for (let i = 0; i < 6; i++) {
    index = Math.floor(Math.random() * 15 + 1);
    color += hex[index];
  }
  return color;
  alert("hi");
}
let intervalId;
const startChangingColor = function () {
  if (intervalId == null) {
    intervalId = setInterval(changeBgColor, 1000);
  }
  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};
function stopChangingColor() {
  clearInterval(intervalId);
  intervalId = null;
}
document.getElementById("start").addEventListener("click", startChangingColor);
document.getElementById("stop").addEventListener("click", stopChangingColor);
