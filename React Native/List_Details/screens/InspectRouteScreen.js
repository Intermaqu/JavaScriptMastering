import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  LogBox,
  ToastAndroid,
  TouchableOpacity,
} from "react-native";
import CustomButton from "../components/CustomButton";
import * as SQLite from "expo-sqlite";
import stoper from "../images/stoper.png";

LogBox.ignoreAllLogs();

const db = SQLite.openDatabase("ListDetailsDB");

const InspectRouteScreen = ({
  navigation,
  route: {
    params: { name, path, description, distance, id },
  },
}) => {
  const [seconds, setSeconds] = useState(0);
  const [isStart, setIsStart] = useState(false);
  const [bestTime, setBestTime] = useState({});
  const [lastTime, setLastTime] = useState({});
  const [toggleStoper, setToggleStoper] = useState(true);

  let timer;

  const createTable = () => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS timers (id INTEGER PRIMARY KEY AUTOINCREMENT, route_id INTEGER, timer INTEGER, timer_date DATE)",
        null,
        (txObj) => {
          console.log("CREATE TABLE SUCCESS timers");
        },
        (error) => console.log(error)
      );
    });
  };

  const insertData = async (route_id) => {
    console.log(route_id);
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO timers (route_id, timer, timer_date) values (?, ?, date())",
        [route_id, seconds],
        (txObj) => {
          console.log("INSERT DATA SUCCESS");
        },
        (error) => console.log(error)
      );
    });
  };

  const stopTimer = () => {
    setIsStart(false);
    clearInterval(timer);
    ToastAndroid.show("Czas został wstrzymany!", ToastAndroid.SHORT);
  };

  const restartTimer = () => {
    setIsStart(false);
    clearInterval(timer);
    setSeconds(0);
    ToastAndroid.show("Czas został wyzerowany!", ToastAndroid.SHORT);
  };

  const saveTimer = async () => {
    await insertData(id);
    setIsStart(false);
    clearInterval(timer);
    setSeconds(0);
    ToastAndroid.show("Czas został zapisany!", ToastAndroid.SHORT);
    getBestTime();
    getLastTime();
  };

  const getBestTime = () => {
    db.transaction((tx) =>
      tx.executeSql(
        "SELECT * FROM timers WHERE route_id = ? ORDER BY timer ASC",
        [id],
        (txtObj, { rows: { _array } }) => {
          setBestTime(_array[0]);
        },
        () => {
          console.log("Best Time Error");
        }
      )
    );
  };

  const getLastTime = () => {
    db.transaction((tx) =>
      tx.executeSql(
        "SELECT * FROM timers WHERE route_id = ? ORDER BY id DESC",
        [id],
        (txtObj, { rows: { _array } }) => {
          setLastTime(_array[0]);
        },
        () => {
          console.log("Last Time Error");
        }
      )
    );
  };

  const getAllData = () => {
    db.transaction((tx) =>
      tx.executeSql(
        "SELECT * FROM timers",
        null,
        (txtObj, { rows: { _array } }) => {
          console.log(_array);
        },
        () => {
          console.log("Get All error");
        }
      )
    );
  };

  const clearData = () => {
    db.transaction((tx) =>
      tx.executeSql(
        "DELETE FROM timers",
        null,
        (txtObj, { rows: { _array } }) => {
          console.log("DELETE ALL SUCCESS");
        },
        () => {
          console.log("DELETE DATA ERROR");
        }
      )
    );
  };
  // 23 => 0023 => 23      7 => 007 => 07

  const formatNumber = (num) => {
    return ("00" + num).slice(-2);
  };

  const formatNumberToTimer = (num) => {
    return `${formatNumber(parseInt(num / 3600))}:${formatNumber(
      parseInt((num / 60) % 60)
    )}:${formatNumber(num % 60)}`;
  };

  useEffect(() => {
    if (isStart) {
      timer = setInterval(() => {
        setSeconds((p) => p + 1);
      }, 1000);
    }
    return () => {
      clearInterval(timer);
    };
  }, [isStart]);

  useEffect(() => {
    createTable();
    getBestTime();
    getLastTime();
    // getAllData();
  }, []);

  return (
    <>
      <ScrollView
        className={styles.container}
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
          padding: 20,
        }}
      >
        <Image source={path} style={styles.image} />
        <Text style={styles.name}>{name}</Text>
        {toggleStoper && (
          <Text>Aktualny czas: {formatNumberToTimer(seconds)}</Text>
        )}
        {toggleStoper && (
          <View style={styles.buttonView}>
            <CustomButton
              text="START"
              onPress={() => {
                setIsStart(true);
                !isStart &&
                  ToastAndroid.show(
                    "Rozpoczęto Liczenie Czasu",
                    ToastAndroid.SHORT
                  );
              }}
            />
            <CustomButton text="PAUSE" onPress={stopTimer} />
          </View>
        )}
        {toggleStoper && (
          <View style={styles.buttonView}>
            <CustomButton text="RESTART" onPress={restartTimer} />
            <CustomButton text="SAVE" onPress={saveTimer} />
          </View>
        )}
        {toggleStoper && (
          <Text>
            {`Najlepszy czas na trasie - ${
              (bestTime?.timer && formatNumberToTimer(bestTime?.timer)) ||
              formatNumberToTimer(0)
            }`}
          </Text>
        )}
        {toggleStoper && (
          <Text>{`Data: ${bestTime?.timer_date || "Brak Danych"}\n`}</Text>
        )}
        {toggleStoper && (
          <Text>
            {`Ostatni czas na trasie - ${
              (lastTime?.timer && formatNumberToTimer(lastTime?.timer)) ||
              formatNumberToTimer(0)
            }`}
          </Text>
        )}
        {toggleStoper && (
          <Text>{`Data: ${lastTime?.timer_date || "Brak Danych"}\n`}</Text>
        )}
        <Text style={styles.distance}>Długość Trasy: {distance} Km</Text>
        <Text style={styles.description}>{description}</Text>
      </ScrollView>
      <TouchableOpacity
        style={styles.stoper}
        onPress={() => setToggleStoper((prev) => !prev)}
      >
        <Image source={stoper} style={{ width: "100%", height: "100%" }} />
      </TouchableOpacity>
    </>
  );
};

export default InspectRouteScreen;

const styles = StyleSheet.create({
  container: {
    textAlign: "center",
    padding: 20,
  },
  image: {
    width: "100%",
    height: null,
    aspectRatio: 1,
    marginVertical: 20,
    maxWidth: 400,
  },
  name: {
    marginVertical: 20,
    fontSize: 24,
    fontWeight: "bold",
  },
  buttonView: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginVertical: 10,
  },
  distance: { marginVertical: 20, fontSize: 16 },
  description: {
    marginHorizontal: 20,
    marginBottom: 80,
  },
  stoper: {
    position: "absolute",
    right: 15,
    bottom: 15,
    height: 60,
    padding: 10,
    width: 60,
    borderRadius: 20,
    backgroundColor: "#B266FF",
  },
});
