import React, { useState } from "react";
import {
  Alert,
  StyleSheet,
  TextInput,
  View,
  LogBox,
  ToastAndroid,
} from "react-native";
import CustomButton from "../components/CustomButton";
import COLORS from "../colors";

import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebase-config";

LogBox.ignoreAllLogs();

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Signed In!");
        const user = userCredential.user;
        console.log(user);
        ToastAndroid.show("Signed In!", ToastAndroid.SHORT);
        navigation.navigate("MenuScreen", { navigation, user });
      })
      .catch((error) => {
        console.log(error.message);
        ToastAndroid.show(error.message, ToastAndroid.SHORT);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
          autoCapitalize="none"
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          secureTextEntry
          autoCapitalize="none"
        />
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          text="Zaloguj"
          onPress={handleSignIn}
          mainColor="#fff"
          subColor={COLORS.pink}
        />
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  inputContainer: {
    width: "80%",
  },
  input: {
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  button: {
    backgroundColor: "#0782f9",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonOutline: {
    backgroundColor: "#fff",
    marginTop: 5,
    borderColor: "#0782f9",
    borderWidth: 2,
  },
});
