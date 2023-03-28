const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
btn.addEventListener("click", () => {
  //randomHexcolor
  let hexColor = "#";
  for (let i = 1; i <= 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  console.log(hexColor);
  //background
  document.body.style.backgroundColor = hexColor;
  //textcolor
  color.textContent = hexColor;
});
function getRandomNumber() {
  return Math.floor(Math.random() * hex.length); //15
}
