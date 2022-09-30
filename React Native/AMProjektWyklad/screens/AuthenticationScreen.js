import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import CustomButton from "../components/CustomButton";
import COLORS from "../colors";
import logo from "../images/logo.png";

const AuthenticationScreen = ({ navigation }) => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{
        alignItems: "center",
        paddingBottom: 70,
      }}
    >
      <Image source={logo} style={styles.logo} />
      <CustomButton
        text="Zaloguj Się"
        onPress={() => navigation.navigate("LoginScreen", { navigation })}
        mainColor={COLORS.pink}
        subColor="#fff"
      />
      <CustomButton
        text="Zarejestruj Się"
        onPress={() => navigation.navigate("RegisterScreen", { navigation })}
        mainColor="#fff"
        subColor={COLORS.pink}
      />
      <CustomButton
        text="Kontynuuj jako gość"
        onPress={() => {
          navigation.navigate("MenuScreen", { navigation, user: undefined });
        }}
        mainColor={COLORS.pink}
        subColor="#fff"
      />
    </ScrollView>
  );
};

export default AuthenticationScreen;

const styles = StyleSheet.create({
  logo: {
    width: "60%",
    height: null,
    aspectRatio: 1,
    marginBottom: 30,
    marginTop: 70,
    maxWidth: 200,
    maxHeight: 200,
  },
});
