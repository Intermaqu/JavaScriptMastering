import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  ToastAndroid,
} from "react-native";
import * as SQLite from "expo-sqlite";

import RouteIcon from "../components/RouteIcon";
import malta from "../images/malta.jpg";
import cytadela from "../images/cytadela.jpg";
import rusalka from "../images/rusalka.jpg";
import wartostrada from "../images/wartostrada.jpg";
import zoo from "../images/zoo.jpg";
import CustomNavButton from "../components/CustomNavButton";
import CustomSmallView from "../components/CustomSmallView";

const db = SQLite.openDatabase("ListDetailsDB");
const cols = 2;
const marginHorizontal = 10;
const width =
  Dimensions.get("window").width / cols - marginHorizontal * (cols - 1);

const HomeScreen = ({ navigation }) => {
  const [routes, setRoutes] = useState([]);
  const [category, setCategory] = useState("title");

  const setTitle = () => {
    setCategory("title");
  };

  const setEasy = () => {
    setCategory("easy");
  };

  const setAll = () => {
    setCategory("all");
  };

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

  useEffect(() => {
    let text = "";
    switch (category) {
      case "title":
        text = "Tytuł";
        break;
      case "easy":
        text = "Łatwe";
        break;
      default:
        text = "Wszystkie";
    }
    ToastAndroid.show(`${text}`, ToastAndroid.SHORT);
  }, [category]);

  return (
    <>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: "#fff",
          padding: 10,
          paddingBottom: 30,
        }}
      >
        <CustomNavButton text="TYTUŁ" onPress={setTitle} />
        <CustomNavButton text="ŁATWE" onPress={setEasy} />
        <CustomNavButton text="WSZYSTKIE" onPress={setAll} />
      </View>
      {category != "title" ? (
        <ScrollView style={styles.container}>
          <View style={styles.grid}>
            {category === "all" &&
              routes &&
              routes.map(({ name, id, description, distance }) => (
                <CustomSmallView
                  name={name}
                  id={id}
                  description={description}
                  distance={distance}
                  path={getImagePath(name)}
                  key={id}
                  navigation={navigation}
                />
              ))}
            {category === "easy" &&
              routes &&
              routes
                .filter(
                  (route) =>
                    route.name === "wartostrada" || route.name === "zoo"
                )
                .map(({ name, id, description, distance }) => (
                  <CustomSmallView
                    name={name}
                    id={id}
                    description={description}
                    distance={distance}
                    path={getImagePath(name)}
                    key={id}
                    navigation={navigation}
                  />
                ))}
          </View>
        </ScrollView>
      ) : (
        <View
          style={{
            height: "100%",
            backgroundColor: "#fff",
            justifyContent: "center",
          }}
        >
          <Text style={styles.title}>Joggingr</Text>
          <Text style={styles.title}>Training</Text>
          <Text style={styles.title}>Tracking</Text>
          <Text style={styles.title}>App</Text>
        </View>
      )}
    </>
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
    color: "#B266FF",
  },
  grid: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
});
