import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import UsersScreen from "./screens/UsersScreen";
import PostsScreen from "./screens/PostsScreen";
import CommentsScreen from "./screens/CommentsScreen";
import UserHomeScreen from "./screens/UserHomeScreen/UserHomeScreen";
import TodosScreen from "./screens/TodosScreen";

const Stack = createNativeStackNavigator()

export default function App() {
  
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen name="UsersScreen" component = {UsersScreen}/>
        <Stack.Screen name="UserHomeScreen" component={UserHomeScreen}/>
        <Stack.Screen name="PostsScreen" component = {PostsScreen}/>
        <Stack.Screen name="TodosScreen" component = {TodosScreen}/>
        <Stack.Screen name="CommentsScreen" component = {CommentsScreen}/>
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
