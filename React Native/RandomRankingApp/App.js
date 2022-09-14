import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import CustomButton from "./components/CustomButton";
import CustomInput from "./components/CustomInput";
import GuessGame from "./screens/GuessGame";
import HomeScreen from "./screens/HomeScreen";
import Ranking from "./screens/Ranking/Ranking";
import RegisterScreen from "./screens/RegisterScreen";
import SignInScreen from "./screens/SignInScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  const [displayHome, setDisplayHome] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setDisplayHome(true);
    }, 3000);
  }, []);

  return (
      displayHome ? (
        <NavigationContainer style={styles.container}>
          <Stack.Navigator style={styles.container}>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="SignInScreen" component={SignInScreen} />
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
            <Stack.Screen name="Ranking" component={Ranking} />
            <Stack.Screen name="GuessGame" component={GuessGame}/>
          </Stack.Navigator>
        </NavigationContainer>
      ) : (
        <WelcomeScreen style={styles.container} />
      )
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    width: "100%",
    height: "100%",
    borderWidth:1
  },
});
