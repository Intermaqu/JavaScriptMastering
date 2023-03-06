let turn = "x";
let symbols = [["", "", ""], ["", "", ""], ["", "", ""]];

const board = document.querySelector(".board");
const tiles = Array.from(document.querySelectorAll(".tile"));

board.addEventListener("click", ({ target }) => {
  const classes = Array.from(target.classList);
  if (classes.includes("tile") && classes.length !== 1) return;

  const idx = tiles.indexOf(target);

  target.classList.add(`tile-${turn}`);
  symbols[idx % 3][Math.floor(idx / 3)] = turn;
  turn = turn === "x" ? "o" : "x";

  displayTurn(turn);

  checkWin();
});

function displayTurn(turn) {
  document.querySelector(".turn").innerText = `${turn.toUpperCase()} turn`;

  // 1. zmień text elementu h1 z klasą "turn" zależnie od tego, czyja jest aktualnie tura
}

function checkWin() {
  for(let i = 0; i < 3; i++) {
    if(symbols[i][0] === symbols[i][1] && symbols[i][1] === symbols[i][2] && symbols[i][0] !== "") 
      return alert(`${symbols[i][0].toUpperCase()} won!`);
    if(symbols[0][i] === symbols[1][i] && symbols[1][i] === symbols[2][i] && symbols[0][i] !== "") 
      return alert(`${symbols[0][i].toUpperCase()} won!`);
  }
  if(symbols[0][0] === symbols[1][1] && symbols[1][1] === symbols[2][2] && symbols[0][0] !== "") 
    return alert(`${symbols[0][0].toUpperCase()} won!`);
  if(symbols[0][2] === symbols[1][1] && symbols[1][1] === symbols[2][0] && symbols[0][2] !== "")
    return alert(`${symbols[0][2].toUpperCase()} won!`);

  // if(new Set(symbols[0][0], symbols[1][1], symbols[2][2]).length === 1 && symbols[0][0] !== "") Another way to compare


    // 2. sprawdź czy któryś z graczy wygrał pojedynek - jeśli tak wyświetla komunikat (możesz użyć np. funkcji "alert(...)")
}

// 3. dodaj listener pod przycisk z napisaem "reset" tak, aby po jego kliknięciu wywołać funkcję reset
document.querySelector(".reset").addEventListener("click", reset);

function reset() {
  symbols = [["", "", ""], ["", "", ""], ["", "", ""]];
  document.querySelectorAll(".tile").forEach(tile => tile.className = "tile");
  // 4. zresetuj stan gry
}
