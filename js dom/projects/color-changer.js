let buttons = document.querySelectorAll(".button");
let theme = {
  grey: {
    bg: "grey",
    text: "white",
  },
  white: {
    bg: "white",
    text: "black",
  },
  blue: {
    bg: "blue",
    text: "red",
  },
  yellow: {
    bg: "yellow",
    text: "green",
  },
};

buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    let style = theme[e.target.id];
    // style = an object like grey or yellow if a valid  color wala button is clicked
    // style = undefined if any other button is clicked

    if (!style) return;
    // (!style) = (!object) = false => return not executed and further code will be used
    // (!style) = (!undefined) = true => return executed and further code will not be used

    document.body.style.backgroundColor = style.bg;
    document.body.style.color = style.text;
  });
});
