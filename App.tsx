import { Pressable, StyleSheet, Text, View } from "react-native";
import one from './src/assets/one.png'
import two from './src/assets/two.png'
import three from './src/assets/three.png'
import four from './src/assets/four.png'
import five from './src/assets/five.png'
import six from './src/assets/six.png'
import Dice from "./src/components/Dice";
import React, { useState } from "react";
import { trigger } from "react-native-haptic-feedback";

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

function App(): React.JSX.Element {
  const [diceimg, setDiceimg] = useState(one)
  const handleChange=()=>{
    const r=Math.floor(Math.random()*6)+1;
    switch (r) {
      case 1:
        setDiceimg(one)
        break;
      case 2:
        setDiceimg(two)
        break;
      case 3:
        setDiceimg(three)
        break;
      case 4:
        setDiceimg(four)
        break;
      case 5:
        setDiceimg(five)
        break;
      case 6:
        setDiceimg(six)
        break;
      default:
        setDiceimg(one)
        break;
    }
    trigger("impactHeavy", options);
  }
  return (
    <View className="h-screen justify-center items-center bg-black">
      <Dice imageurl={diceimg}/>
      <Pressable onPress={handleChange} className="bg-white rounded-lg mt-10" >
      <Text className="text-black font-extrabold text-xl  px-6 py-1 ">ROLL</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  
});

export default App;
