import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { firebaseConfig } from "../firebase-config";
import * as Location from "expo-location";
import MapView, { Marker } from "react-native-maps";
import COLORS from "../colors";

const FindWayHomeScreen = ({
  navigation,
  route: {
    params: { user },
  },
}) => {
  const [home, setHome] = useState({
    longitude: 0,
    latitude: 0,
    latitudeDelta: 0,
    longitudeDelta: 0,
  });
  const [location, setLocation] = useState(null);
  const [errorMasg, setErrorMsg] = useState(null);

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const getData = async () => {
    const homeCol = collection(db, "home");
    const homeSnapshot = await getDocs(homeCol);
    const homeList = homeSnapshot.docs.map((doc) => doc.data());
    const data = homeList.filter((home) => home.email === user.email);

    setHome({
      longitude: data[0].longitude,
      latitude: data[0].latitude,
      latitudeDelta: 0,
      longitudeDelta: 0,
    });
  };

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

  useEffect(() => {
    user && getData();
    setup();
  }, []);
  useEffect(() => {
    console.log(location?.coords);
    console.log(home.longitude);
  });
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ alignItems: "center", height: "100%" }}
    >
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: home?.latitude ? home?.latitude : 52.4,
          longitude: home?.longitude ? home?.longitude : 16.9,
          latitudeDelta: 0,
          longitudeDelta: 0,
        }}
        showsUserLocation={true}
      >
        {user && home && <Marker coordinate={home} pinColor="blue" />}
      </MapView>
      {user ? (
        <View style={{ alignItems: "center", padding: 50 }}>
          <Text style={styles.title}>Traf Do Domu</Text>
          <Text style={styles.text}>
            Idź w kierunku pina na mapie a na pewno trafisz do domu
          </Text>
        </View>
      ) : (
        <Text style={[styles.title, { paddingHorizontal: 30 }]}>
          Zaloguj się aby móc w prosty sposób wrócić do domu
        </Text>
      )}
    </ScrollView>
  );
};

export default FindWayHomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
  },
  map: {
    width: "100%",
    height: "50%",
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    color: COLORS.pink,
    marginTop: 50,
  },
  text: {
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 10,
  },
});
