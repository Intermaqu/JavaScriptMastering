import { StyleSheet, Text, ToastAndroid, View } from "react-native";
import React, { useEffect, useState } from "react";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import * as SQLite from "expo-sqlite"

const db = SQLite.openDatabase("RankingDB")

const GuessGame = ({navigation, route:{params:{nickname, score}}}) => {
  const [totalScore, setTotalScore] = useState(score)
  const [tries, setTries] = useState(0);
  const [randomNumber, setRandomNumber] = useState(0);
  const [currentScore, setCurrentScore] = useState(0)
  const [input, setInput] = useState("");
  const [gameFinished, setGameFinished] = useState(false)

  const handleGuess = () => {
    setTries(prev => prev + 1)
    if(input > 20 || input <= 0){
        setTries(prev => prev - 1)
        ToastAndroid.show("Twoja Liczba Powinna być z zakresu 1 - 20", ToastAndroid.LONG)
        return
    }
    else if(input == randomNumber){
        setGameFinished(true)
        // setTries(prev => prev-1)
    } else {
        if(parseInt(randomNumber) > parseInt(input))
            ToastAndroid.show("Zgadywana liczba jest większa!", ToastAndroid.SHORT)
        else
            ToastAndroid.show("Zgadywana liczba jest mniejsza!", ToastAndroid.SHORT)
        setInput("")
    }
  }

  const handleRestartGame = () => {
    setGameFinished(false)
    setCurrentScore(0)
    setInput("")
    setTries(0)
    setRandomNumber(generateRandomNumber)
  }

  const countScore = () => {
    if(tries <= 1)
        return 5
    else if(tries <= 4)
        return 3
    else if(tries <= 6)
        return 2
    else if(tries <= 10)
        return 1
    else
        return 0
  }

  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 20 + 1)
  }

  const updateScoreInDB = (val) => {
    db.transaction((tx) => {
      tx.executeSql(
        "UPDATE players SET score = ? WHERE nickname = ?",
        [totalScore, nickname],
        () => {
          console.log("score updated in db") 
        },
        (error) => console.log(error)
      );
    });
  }

  useEffect(() => {
    if(tries > 10)
        setGameFinished(true)
  }, [tries])

  useEffect(() => {
    if(gameFinished){
        setCurrentScore(countScore())
        if(tries < 10)
            ToastAndroid.show(`Gratulacje, Wygrałeś w ${tries} ruchach`,ToastAndroid.LONG)    
        else
            ToastAndroid.show(`Przegrałeś!`,ToastAndroid.LONG)    
    }
  }, [gameFinished])

  useEffect(() => {
    setRandomNumber(generateRandomNumber);
  }, []);

  useEffect(()=>{
    updateScoreInDB(totalScore + currentScore)
    setTimeout(()=>setTotalScore(prev => prev + currentScore), 500)
  },[currentScore])

  useEffect(() => {
    console.log(randomNumber);
  }, [randomNumber]);

  return (
    <View>
      <Text>GuessGame</Text>
      <Text>{`Hi ${nickname}`}</Text>
      <Text>Score: {totalScore}</Text>
      <Text>Number of Tries: {tries}</Text>
      <Text>Current Score: {currentScore}</Text>
      <CustomInput
        value={input}
        setValue={setInput}
        placeholder="Podaj liczbę 1 - 20"
      />
      <CustomButton
        text = {gameFinished ? "Zacznij grę od nowa" : "Zgadnij liczbę!"}
        onPress={gameFinished ? handleRestartGame : handleGuess}
      />
    </View>
  );
};

export default GuessGame;

const styles = StyleSheet.create({});
