import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'


const CustomButton = ({text, onPress}) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
        <Text style={styles.text}>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#3b71f3",
        width: "100%",
        padding: 15,
        marginVertical: 10,
        alignItems: "center",
        borderRadius: 5
    },
    text:{
        fontWeight:"bold",
        color: "#fff"
    }
})


export default CustomButton
