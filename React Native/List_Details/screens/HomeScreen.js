import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView, Dimensions } from "react-native";
import * as SQLite from "expo-sqlite";

import RouteIcon from "../components/RouteIcon";
import malta from "../images/malta.jpg";
import cytadela from "../images/cytadela.jpg";
import rusalka from "../images/rusalka.jpg";
import wartostrada from "../images/wartostrada.jpg";
import zoo from "../images/zoo.jpg";

const db = SQLite.openDatabase("ListDetailsDB");
const cols = 2;
const marginHorizontal = 10;
const marginVertical = 10;
const width =
  Dimensions.get("window").width / cols - marginHorizontal * (cols - 1);

const HomeScreen = ({ navigation }) => {
  const [routes, setRoutes] = useState([]);

  const getImagePath = (name) => {
    switch (name) {
      case "malta":
        return malta;
      case "rusalka":
        return rusalka;
      case "wartostrada":
        return wartostrada;
      case "cytadela":
        return cytadela;
      case "zoo":
        return zoo;
      default:
        return undefined;
    }
  };

  const createTable = () => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS routes (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT UNIQUE, distance NUMBER, description TEXT)",
        null,
        (txObj) => {
          console.log("CREATE TABLE SUCCESS");
        },
        (error) => console.log(error)
      );
    });
  };

  const insertData = () => {
    db.transaction((tx) => {
      tx.executeSql(
        'INSERT INTO routes (name, distance, description) values ("cytadela", 4.3, "Trasa ta biegnie wokół cytadeli w Poznaniu. Jest to bardzo historyczne miejsce gdyż dokładnie tam w II WŚ poznaniacy bronili się przed najeźcami. Dzisiaj można znaleźć tam wiele pomników historycznych ale przede wszystkim bardzo ciche i spokojne miejsce na spacer czy jazdę na rolkach.")',
        null,
        (txObj, result) => {
          console.log("INSERT DATA SUCCESS");
        },
        (txObj, error) => {
          console.log(error);
        }
      );
    });
  };

  const getAllData = () => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * from routes",
        null,
        (txObj, result) => {
          setRoutes(result.rows._array);
        },
        (txObj, error) => {
          console.log(error);
        }
      );
    });
  };

  // useEffect(() => {
  //   console.log(routes[0]);
  // }, [routes]);

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={[styles.title, styles.firstTitle]}>Jogging</Text>
      <Text style={styles.title}>Training</Text>
      <Text style={styles.title}>App</Text>
      <View style={styles.grid}>
        {routes &&
          routes.map(({ name, id, description, distance }) => (
            <View style={styles.gridItem} key={id}>
              <RouteIcon
                name={name}
                path={getImagePath(name)}
                navigation={navigation}
                description={description}
                distance={distance}
                id={id}
              />
            </View>
          ))}
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  firstTitle: {
    marginTop: 50,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
    color: "#c29",
  },
  grid: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  gridItem: {
    marginVertical: marginVertical,
    marginHorizontal: marginHorizontal,
    width: width - 10,
    height: 200,
  },
});
