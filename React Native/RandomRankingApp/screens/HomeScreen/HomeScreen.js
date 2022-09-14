import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomButton from '../../components/CustomButton'

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <CustomButton
        text = "LOGIN"
        onPress={()=>{navigation.navigate("SignInScreen", {navigation})}}
      />
      <CustomButton
        text = "REGISTER"
        onPress={()=>{navigation.navigate("RegisterScreen"), {navigation}}}
      />
      <CustomButton
        text = "RANKING"
        onPress={()=>{navigation.navigate("Ranking")}}
      />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        display:"flex",
        width: "100%",
        justifyContent:"center",
        alignItems: "center",
        borderWidth:1,
        height: "100%"
    }
})