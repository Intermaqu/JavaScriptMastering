import React, { useState, uesEffect, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Location from "expo-location";
import COLORS from "../colors";

const WeatherScreen = (navigation) => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState(null);
  const [errorMasg, setErrorMsg] = useState(null);

  const setup = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status != "granted") {
      setErrorMsg("Location Permission Denied!");
      return;
    }

    try {
      let location = await Location.getCurrentPositionAsync();
      setLocation(location);
    } catch (e) {
      console.log(e);
    }
  };

  const fetchData = async () => {
    const lat = location.coords.latitude.toFixed(2);
    const lon = location.coords.longitude.toFixed(2);
    const API_KEY = "ff9ae4f0eb41bbbcf7d8a7de91330602";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    const res = await fetch(url);
    const data = await res.json();
    setData(data);
  };

  useEffect(() => {
    setup();
  }, []);

  useEffect(() => {
    location && fetchData();
  }, [location]);

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { fontSize: 24 }]}>
        {" "}
        Pogoda dla twojej lokalizacji
      </Text>
      <Text style={styles.text}>
        Szerokość Geograficzna:{" "}
        <Text style={{ color: COLORS.pink, fontWeight: "bold" }}>
          {location?.coords.latitude.toFixed(2)}
        </Text>
      </Text>
      <Text style={styles.text}>
        Długość Geograficzna:{" "}
        <Text style={{ color: COLORS.pink, fontWeight: "bold" }}>
          {location?.coords.longitude.toFixed(2)}
        </Text>
      </Text>
      <Text style={styles.text}>
        Temperatura:
        <Text style={{ color: COLORS.pink, fontWeight: "bold" }}>
          {` ` + data?.main?.temp.toFixed(0) + `°C`}
        </Text>
      </Text>
      <Text style={styles.text}>
        Temperatura Minimalna:
        <Text style={{ color: COLORS.pink, fontWeight: "bold" }}>
          {` ` + data?.main?.temp_min.toFixed(0) + `°C`}
        </Text>
      </Text>
      <Text style={styles.text}>
        Temperatura Maksymalna:
        <Text style={{ color: COLORS.pink, fontWeight: "bold" }}>
          {` ` + data?.main?.temp_max.toFixed(0) + `°C`}
        </Text>
      </Text>
      <Text style={styles.text}>
        Ciśnienie Atmosferyczne:
        <Text style={{ color: COLORS.pink, fontWeight: "bold" }}>
          {` ` + data?.main?.pressure.toFixed(0) + ` hPa`}
        </Text>
      </Text>
      <Text style={styles.text}>
        Wilgotność:
        <Text style={{ color: COLORS.pink, fontWeight: "bold" }}>
          {` ` + data?.main?.humidity.toFixed(0) + `%`}
        </Text>
      </Text>
      <Text style={styles.text}>
        Warunki Atmosferyczne:
        <Text style={{ color: COLORS.pink, fontWeight: "bold" }}>
          {` `}
          {data && data.weather && data.weather[0].main}
        </Text>
      </Text>
    </View>
  );
};

export default WeatherScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    justifyContent: "center",
    borderWidth: 1,
    alignItems: "center",
  },
  title: {
    color: COLORS.pink,
    fontWeight: "bold",
    marginBottom: 10,
  },
  text: {
    marginBottom: 5,
  },
});
