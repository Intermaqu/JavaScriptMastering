const button = document.getElementById("counter-button");
const input = document.querySelector(".answer");

let timer;
let len = 3;
let correctValue = 0;
let wrongValue = 0;
const correct = document.querySelector("#correct");
const wrong = document.querySelector("#wrong");

const generateString = () => {
  let num = "";
  for (let i = 0; i < len; i++) {
    num += Math.floor(Math.random() * 10);
  }
  return num;
};

const init = () => {
  button.style.display = "none";
  input.style.display = "none";
  const num = document.querySelector(".numberToRemember");
  num.innerText = generateString();
  num.style.display = "grid";
  console.log("Time start!");
  timer = setTimeout(() => {
    console.log("Timeout!");
    num.style.display = "none";
    button.style.display = "block";
    input.style.display = "block";
    input.focus();
  }, 5000);
};

const checkAnswer = () => {
  const num = document
    .querySelector(".numberToRemember")
    .innerText.split("")
    .reverse()
    .join("");
  if (num === input.value) {
    console.log("Correct");
    len += 1;
    correctValue += 1;
    correct.innerText = correctValue;
    init();
  } else {
    console.log("Incorrect");
    len = 3;
    wrongValue += 1;
    wrong.innerText = wrongValue;
    init();
  }
};

button.addEventListener("click", checkAnswer);
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    button.click();
    input.value = "";
  }
});

init();
