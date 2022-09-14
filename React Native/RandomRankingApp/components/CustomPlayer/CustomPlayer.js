import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CustomPlayer = ({nickname, score, index}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        <Text>{index}. </Text> <Text>{nickname.toUpperCase()}</Text>
      </Text>
      <Text style={styles.text}>{score}</Text>
    </View>
  )
}

export default CustomPlayer

const styles = StyleSheet.create({
    container:{
        height: 40,
        width: "100%",
        borderWidth: 1,
        borderColor: "#d2d2d2",
        borderRadius: 5,
        flexDirection:"row",
        justifyContent:"space-between",
        paddingHorizontal: 20,
        marginVertical: 10,
    },
    text: {
        textAlignVertical: 'center',
        fontWeight: "bold",
        fontSize: 15,
    }
})