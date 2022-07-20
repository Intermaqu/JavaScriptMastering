import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import Die from "./Die";

const DiceGame = () => {
  const [dice, setDice] =  useState([]);
  const [startGame, setStartGame] =  useState(false);
  const [numberOfRolls, setNumberOfRolls] =  useState(3);
  const [score, setScore] =  useState(0);
  const [gameFinished, setGameFinished] =  useState(false);
  const [round, setRound] = useState(-2)
  const [historyOfMatches, setHistoryOfMatches] = useState([])

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
    setDice(init)
    setScore(sumScore())
    setGameFinished(false)
    setNumberOfRolls(3)
    setRound(round => round += 1)
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
        return die.isHeld === false ? { ...die, value: randomNumber() } : {...die};
      })
    );
    setNumberOfRolls((prev) => prev - 1);
    setScore(sumScore)
  };

  const sumScore = () => {
    let sum = 0
    for (let item of dice) {
      sum += item.value
    }
    return sum
  };

  useEffect(() => {
    if(round > 0){
      const newHist = [...historyOfMatches, {"round": round, "score": score}]
      newHist.sort((a,b) => {
        return a.score <= b.score ? 1 : -1
      })
      setHistoryOfMatches(newHist)
    }
  }, [round])

  useEffect(() => {
    console.log(historyOfMatches)
  }, [historyOfMatches])

  useEffect(() => {
    numberOfRolls === 0 && setGameFinished(true)
  }, [numberOfRolls])

  useEffect(() => {
    initializeDice();
  }, []);
 
  useEffect(() => {
    setScore(sumScore)
  }, [gameFinished])

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
          <button onClick={gameFinished ? initializeDice : rollDice}>{gameFinished ? "RESTART" : "ROLL"}</button>
          <h1>Game number: {round}</h1>
          <h1>Number Of Remaining Rolls: {numberOfRolls}</h1>
          <h1>Number Of Points: {score}</h1>
          <table>
            <thead>
              <tr><td>ROUND</td><td>SCORE</td></tr>
            </thead>
            <tbody>
              {historyOfMatches.map((match) => {
                return <tr key={match.round}>
                  <td>{match.round}</td>
                  <td>{match.score}</td>
                </tr>
              })}
            </tbody>
          </table>
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
