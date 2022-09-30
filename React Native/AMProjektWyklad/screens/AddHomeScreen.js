import React, { useState } from "react";
import { StyleSheet, Text, View, Dimensions, ToastAndroid } from "react-native";
import MapView from "react-native-maps";
import COLORS from "../colors";
import CustomButton from "../components/CustomButton";
import {
  collection,
  doc,
  getDocs,
  getFirestore,
  setDoc,
} from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebase-config";
import { StackActions } from "@react-navigation/native";

const AddHomeScreen = ({
  navigation,
  route: {
    params: { user },
  },
}) => {
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const setData = async () => {
    await setDoc(doc(db, "home", user?.email), {
      email: user.email,
      latitude: region.latitude,
      longitude: region.longitude,
    });
    ToastAndroid.show("Zapisano Adres twojego domu!", ToastAndroid.SHORT);
    navigation.goBack();
  };

  const [region, setRegion] = useState({
    latitude: 52.4,
    longitude: 16.9,
    latitudeDelta: 0,
    longitudeDelta: 0,
  });
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 52.4,
          longitude: 16.9,
          latitudeDelta: 0,
          longitudeDelta: 0,
        }}
        onRegionChangeComplete={(region) => setRegion(region)}
      />
      <Text style={styles.text}>
        Poniżej wyświetlają ci się koordynaty geograficzne, Nakieruj na twój dom
        a dodamy je abyś w każdym momencie mógł wrócić do niego.
      </Text>
      <Text style={{ paddingHorizontal: 20 }}>
        Szerokość Geograficzna:{" "}
        <Text style={{ color: COLORS.pink, fontWeight: "bold" }}>
          {region.latitude.toFixed(2)}
        </Text>
      </Text>
      <Text style={{ paddingHorizontal: 20, marginBottom: 20 }}>
        Długość Geograficzna:{" "}
        <Text style={{ color: COLORS.pink, fontWeight: "bold" }}>
          {region.longitude.toFixed(2)}
        </Text>
      </Text>

      <CustomButton
        onPress={setData}
        text="Zapisz Adres swojego domu"
        mainColor={COLORS.pink}
        subColor="#fff"
      />
    </View>
  );
};

export default AddHomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  map: {
    width: "100%",
    height: "50%",
  },
  text: {
    padding: 20,
    fontSize: 16,
  },
});
