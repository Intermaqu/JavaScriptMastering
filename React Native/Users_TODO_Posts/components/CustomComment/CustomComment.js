import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CustomComment = ({name, email, body}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.email}>{email}</Text>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.body}>{body}</Text>
    </View>
  )
}

export default CustomComment

const styles = StyleSheet.create({
    container:{
        padding: 20,
        margin: 20,
        borderWidth: 1,
        borderRadius: 5,
    },
    email:{
        fontSize: 12
    },
    name: {
        fontSize: 16,
        marginVertical: 20,
        fontWeight:"bold"
    },
    body:{
        fontSize:14
    }
})