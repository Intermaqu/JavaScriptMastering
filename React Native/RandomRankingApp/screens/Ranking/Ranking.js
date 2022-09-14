import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import CustomPlayer from "../../components/CustomPlayer";
import * as SQLite from "expo-sqlite";
import { setStatusBarNetworkActivityIndicatorVisible } from "expo-status-bar";

const db = SQLite.openDatabase("RankingDB");

const Ranking = () => {
const [players, setPlayers] = useState([])


  const getAllPlayers = () => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM players ORDER BY score DESC",
        null,
        (txObj, {rows: {_array}}) => {
          setPlayers(_array);
        },
        (error) => console.log(error)
      );
    });
  };



  useEffect(()=>{
    getAllPlayers()
  },[])
  
  useEffect(()=>{
    console.log(players)
  }, [players])

  return (
    <View style={styles.container}>
      {
        players.map((player,index) => {
            if(index < 10)
              return <CustomPlayer
                index = {index + 1}
                nickname = {player.nickname}
                score = {player.score}
                key = {player.id}
              />
        })
      }
    </View>
  );
};

export default Ranking;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 10,
  },
});
