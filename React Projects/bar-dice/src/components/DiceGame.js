import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import Die from "./Die";

const DiceGame = () => {
  const [dice, setDice] = React.useState([]);
  const [startGame, setStartGame] = React.useState(false);
  const [numberOfRolls, setNumberOfRolls] = React.useState(3);
  const [score, setScore] = React.useState(0);

  const handleStartGame = () => {
    setStartGame(true);
    setScore(sumScore())
  };

  const randomNumber = () => {
    return Math.floor(Math.random() * 6 + 1);
  };

  const initializeDice = () => {
    let init = [];
    for (let i = 0; i < 5; i++) {
      let nano = nanoid();
      init.push({
        value: randomNumber(),
        isHeld: false,
        id: nano,
        key: nano,
      });
    }
    setDice(init);
    setScore(sumScore())
  };

  const holdDie = (id) => {
    setDice(
      dice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : { ...die };
      })
    );
  };

  const rollDice = () => {
    setDice(
      dice.map((die) => {
        return die.isHeld === false ? { ...die, value: randomNumber() } : die;
      })
    );
    setNumberOfRolls((prev) => prev - 1);
    setDice(sumScore)
  };

  // Array.Prototype.reduce
  const sumScore = () => {
    let sum = 0
    for (let item of dice) {
      sum += item.value
    }
    return sum
  };

  //   React.useEffect(() => {
  //     if(numberOfRolls === 0){

  //     }
  //   }, [numberOfRolls])

  React.useEffect(() => {
    initializeDice();
  }, []);

  return (
    <div className="dice-game">
      {startGame ? (
        <div className="dice-game--container">
          {dice.map((die) => {
            return (
              <Die
                value={die.value}
                isHeld={die.isHeld}
                holdDie={holdDie}
                id={die.id}
                key={die.key}
              />
            );
          })}
          <button onClick={rollDice}>ROLL</button>
          <h1>Number Of Remaining Rolls: {numberOfRolls}</h1>
          <h1>Number Of Points: {score}</h1>
        </div>
      ) : (
        <div className="start-dice-game">
          <button onClick={handleStartGame}>Start Game</button>
        </div>
      )}
    </div>
  );
};

export default DiceGame;
