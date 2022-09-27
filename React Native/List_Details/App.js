import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import InspectRouteScreen from "./screens/InspectRouteScreen";
import AnimatedWelcome from "./screens/AnimatedWelcome";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.navigation}>
      <Stack.Navigator style={styles.stack}>
        <Stack.Screen name="AnimatedWelcome" component={AnimatedWelcome} />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          style={styles.screen}
        />
        <Stack.Screen
          name="InspectRouteScreen"
          component={InspectRouteScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({});
