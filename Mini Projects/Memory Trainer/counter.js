const button = document.getElementById("counter-button");
const input = document.querySelector(".answer");
const correct = document.querySelector("#correct");
const wrong = document.querySelector("#wrong");
let correctValue = 0;
let wrongValue = 0;

let timer;

const getRandom = (max) => {
  return Math.floor(Math.random() * max + 1);
};

const init = () => {
  timer = setTimeout(() => {
    checkAnswer();
  }, 10000);
  const num1 = document.getElementById("counter-number1");
  const num2 = document.getElementById("counter-number2");
  const op = document.getElementById("counter-operation");
  const operations = {
    0: "+",
    1: "-",
    2: "*",
    3: "/",
  };
  const operation = operations[Math.floor(Math.random() * 4)];

  switch (operation) {
    case "+":
      num1.innerText = getRandom(2000);
      op.innerText = "+";
      num2.innerText = getRandom(2000);
      break;
    case "-":
      num1.innerText = getRandom(2000);
      op.innerText = "-";
      num2.innerText = getRandom(2000);
      break;
    case "*":
      num1.innerText = getRandom(20);
      op.innerText = "*";
      num2.innerText = getRandom(20);
      break;
    case "/":
      num1.innerText = getRandom(100);
      op.innerText = "/";
      num2.innerText = getRandom(30);
      break;
  }
};

const checkAnswer = () => {
  clearTimeout(timer);
  const num1 = document.getElementById("counter-number1").innerText;
  const num2 = document.getElementById("counter-number2").innerText;
  const op = document.getElementById("counter-operation").innerText;
  const result = "" + Math.round(eval(`${num1} ${op} ${num2}`));
  if (input.value === result) {
    correctValue += 1;
    correct.innerText = correctValue;
  } else {
    wrongValue += 1;
    wrong.innerText = wrongValue;
  }
  init();
};

button.addEventListener("click", checkAnswer);
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    button.click();
    input.value = "";
  }
});

init();
