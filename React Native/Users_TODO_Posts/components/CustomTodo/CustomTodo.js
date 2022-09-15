import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CustomTodo = ({title, completed}) => {
const color = completed ? "#0f09" : "#F009"

  return (
    <View style={{...styles.container, backgroundColor: color}}>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

export default CustomTodo

const styles = StyleSheet.create({
    container:{
        borderWidth: 1,
        borderRadius: 5,
        margin: 20,
        padding: 15,
        flex: 1,
        justifyContent: "center"
    },
    text:{
        fontSize: 16,
        textAlign: "justify"
    }
})