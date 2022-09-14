import { BackHandler, StyleSheet, Text, ToastAndroid, View } from "react-native";
import React, { useEffect, useState } from "react";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("RankingDB");

const RegisterScreen = ({navigation}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const createTable = () => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS players (id INTEGER PRIMARY KEY AUTOINCREMENT, nickname TEXT UNIQUE, `password` TEXT, score  INTEGER)",
        null,
        (txObj) => {
          // console.log("CREATE SUCCESS");
        },
        (error) => console.log(error)
      );
    });
  }

  const registerPlayer = () => {
    console.log(username, password)
    db.transaction(tx => {
      tx.executeSql(
        "INSERT INTO players (nickname, `password`, score) values (?, ?, 0)",
        [username, password],
        (txObj, result) => {
          ToastAndroid.show("Zarejestrowano Pomyślnie", ToastAndroid.LONG)
          backToHome()
        },
        (txObj, error) => {console.log(error); console.warn("Nickname is taken, Choose another one!")}
      )
    })
  }

  const backToHome = () => {
    setTimeout(()=>{
      navigation.goBack()
    }, 2000)
  }

  const dropTable = () => {
    db.transaction(tx => {
      tx.executeSql(
        "DROP TABLE players",
        null,
        (txObj, result) => {console.log("Drop Success")},
        (txObj, error) => {console.log(error)}
      )
    })
  }


  useEffect(() => {
    createTable()
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>RegisterScreen</Text>
      <CustomInput
        placeholder="username"
        value={username}
        setValue={setUsername}
      />
      <CustomInput
        placeholder="password"
        value={password}
        setValue={setPassword}
        secureTextEntry
      />
      <CustomButton text="Sign In!" onPress={registerPlayer} />
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: { width: "100%", alignItems: "center" },
  title: {},
});
