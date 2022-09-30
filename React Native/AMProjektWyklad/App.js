import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthenticationScreen from "./screens/AuthenticationScreen";
import SensorsScreen from "./screens/SensorsScreen";
import AccelerometerScreen from "./screens/AccelerometerScreen";
import GyroscopeScreen from "./screens/GyroscopeScreen";
import MagnetometerScreen from "./screens/MagnetometerScreen";
import PedometerScreen from "./screens/PedometerScreen";
import RegisterScreen from "./screens/RegisterScreen";
import LoginScreen from "./screens/LoginScreen";
import AnimationScreen from "./screens/AnimationScreen";
import MenuScreen from "./screens/MenuScreen";
import WeatherScreen from "./screens/WeatherScreen";
import AddHomeScreen from "./screens/AddHomeScreen";
import FindWayHomeScreen from "./screens/FindWayHomeScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator style={styles.container}>
        <Stack.Screen name="AnimationScreen" component={AnimationScreen} />
        <Stack.Screen
          name="AuthenticationScreen"
          component={AuthenticationScreen}
        />
        <Stack.Screen name="SensorsScreen" component={SensorsScreen} />
        <Stack.Screen
          name="AccelerometerScreen"
          component={AccelerometerScreen}
        />
        <Stack.Screen name="GyroscopeScreen" component={GyroscopeScreen} />
        <Stack.Screen
          name="MagnetometerScreen"
          component={MagnetometerScreen}
        />
        <Stack.Screen name="PedometerScreen" component={PedometerScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="MenuScreen" component={MenuScreen} />
        <Stack.Screen name="WeatherScreen" component={WeatherScreen} />
        <Stack.Screen name="AddHomeScreen" component={AddHomeScreen} />
        <Stack.Screen name="FindWayHomeScreen" component={FindWayHomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
