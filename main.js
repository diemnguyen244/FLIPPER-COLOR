const colors = ["green", "red", "rgba(133,122,200", "F15025"];
//find btn to click-> place change color: background, text color
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
btn.addEventListener("click", () => {
  //background
  const randomColor = getRandomNumber();
  //   console.log(randomColor);
  document.body.style.backgroundColor = colors[randomColor];

  //textcolor
  color.textContent = colors[randomColor];
});
function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
