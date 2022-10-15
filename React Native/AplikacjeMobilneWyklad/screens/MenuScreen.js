import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import COLORS from "../colors";
import CustomButton from "../components/CustomButton";
import AddHomeScreen from "./AddHomeScreen";

const MenuScreen = ({
  navigation,
  route: {
    params: { user = undefined },
  },
}) => {
  console.log(user?.email);
  const [hours, setHours] = useState(null);
  const [minutes, setMinutes] = useState(null);

  let timer;

  useEffect(() => {
    timer = setInterval(() => {
      setHours(new Date().getHours());
      setMinutes(new Date().getMinutes());
    }, 1000);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Menu</Text>
      <Text style={styles.zegar}>{`${("00" + hours).slice(
        -2
      )}:${minutes}`}</Text>
      <CustomButton
        onPress={() => {
          navigation.navigate("SensorsScreen", { navigation, user });
        }}
        text="Pobawmy się Sensorami"
        mainColor={COLORS.pink}
        subColor="#fff"
      />
      <CustomButton
        text="Sprawdźmy Pogodę"
        onPress={() => {
          navigation.navigate("WeatherScreen", { navigation });
        }}
        subColor={COLORS.pink}
        mainColor="#fff"
      />
      <CustomButton
        mainColor={COLORS.pink}
        subColor="#fff"
        onPress={() => {
          navigation.navigate("FindWayHomeScreen", { navigation, user });
        }}
        text="Znajdźmy drogę do domu"
      />
      {user ? (
        <CustomButton
          mainColor="#fff"
          subColor={COLORS.pink}
          onPress={() => {
            navigation.navigate("AddHomeScreen", { navigation, user });
          }}
          text="Dodaj Lokalizacje Twojego Domu"
        />
      ) : (
        <View style={styles.disabled}>
          <Text style={styles.disabledText}>
            Zaloguj się Aby uzyskać dostęp do tej funkcjonalności
          </Text>
        </View>
      )}
    </View>
  );
};

export default MenuScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: 70,
    flex: 1,
    alignItems: "center",
  },
  zegar: {
    fontSize: 36,
    backgroundColor: "#FFF",
    borderRadius: 10,
    width: 200,
    textAlign: "center",
    borderWidth: 2,
    color: COLORS.pink,
    borderColor: COLORS.pink,
    marginBottom: 30,
  },
  text: {
    color: COLORS.pink,
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 50,
  },
  disabled: {
    width: "60%",
    maxWidth: 200,
    padding: 10,
    backgroundColor: "#ccc",
    borderWidth: 2,
    borderColor: COLORS.pink,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  disabledText: {
    color: COLORS.pink,
    fontSize: 16,
    fontWeight: "bold",
  },
});
