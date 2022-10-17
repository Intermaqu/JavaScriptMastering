import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBhLCmzzEcRxk5cIMtU85_J0C9VPMjU-u0",
  authDomain: "aplikacje-mobilne-wyklad.firebaseapp.com",
  projectId: "aplikacje-mobilne-wyklad",
  storageBucket: "aplikacje-mobilne-wyklad.appspot.com",
  messagingSenderId: "751778592729",
  appId: "1:751778592729:web:43dcc625929138f2b20bc8"
};

const firebase = initializeApp(firebaseConfig)

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
