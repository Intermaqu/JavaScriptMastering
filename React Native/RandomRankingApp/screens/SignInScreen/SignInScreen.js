import { StyleSheet, Text, ToastAndroid, View, LogBox } from "react-native";
import React, { useEffect, useState } from "react";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import * as SQLite from "expo-sqlite"

const db = SQLite.openDatabase("RankingDB")

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state'
])

const SignInScreen = ({navigation}) => {
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [players, setPlayers] = useState([])


  const handleLogin = () => {
    const playerObj = players.find(obj => obj.nickname === nickname && obj.password === password)
    if(!playerObj){
      console.warn("Wrong Nickname and Password")
      return
    }
    ToastAndroid.show(`Zalogowano ${playerObj.nickname}`, ToastAndroid.SHORT)
    setTimeout(()=>{
        navigation.navigate("GuessGame",{nickname: playerObj.nickname, score: playerObj.score})
    }, 2000)
  }


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

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SignInScreen</Text>
      <CustomInput
        placeholder="nickname"
        value={nickname}
        setValue={setNickname}
      />
      <CustomInput
        placeholder="password"
        value={password}
        setValue={setPassword}
        secureTextEntry
      />
      <CustomButton text="Sign In!" onPress={handleLogin} />
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: { width: "100%", alignItems: "center" },
  title: {},
});
