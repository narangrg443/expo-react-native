import React from 'react'
import {View,Text,Button}from 'react-native'


export default function Input({data,onPress}){
  const [text,setText]=React.useState('hello');
  function handlePress(){
    onPress(text);
  }
  return(
    <View>
     <Button 
     title={data} 
     onPress={handlePress}
     />
    </View>
    );
}