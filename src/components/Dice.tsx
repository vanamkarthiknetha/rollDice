import { Image, ImageSourcePropType, ImageURISource, StyleSheet, Text, View } from 'react-native'
import React, { PropsWithChildren } from 'react'


type diceprops = PropsWithChildren<{
    imageurl:ImageSourcePropType
}>
const Dice = ({imageurl}:diceprops):JSX.Element => {
  return (
    <View className="">
      <Image source={imageurl} style={{width: 200, height:200}}/>
    </View>
  )
}

export default Dice

const styles = StyleSheet.create({})