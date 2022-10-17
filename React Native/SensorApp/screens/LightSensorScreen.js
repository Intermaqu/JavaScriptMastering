import { StyleSheet, Text, View, DeviceEventEmitter } from 'react-native'
import React, { useEffect, useState } from 'react'
import {startLightSensor, stopLightSensor} from "react-native-ambient-light-sensor"

const LightSensorScreen = () => {
    const[result, setResult] = useState()


    useEffect(()=>{
        startLightSensor()
        const sub = DeviceEventEmitter.addListener(
            "LIGHT_SENSOR",
            (data) => {
                setResult(data.lightValue)
            }
        )
        return ()=>{
            stopLightSensor()
            sub?.remove()
        }
    },[])

  return (
    <View>
      <Text>Light Result: {result}</Text>
    </View>
  )
}

export default LightSensorScreen

const styles = StyleSheet.create({})