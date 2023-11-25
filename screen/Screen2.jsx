import React from 'react';
import { View, Text, Button } from 'react-native';

export default function Screen2({ navigation ,route}) {
 const {data="no data"}=route.params ||{};


  return (
    <View style={{
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'red',
      flex: 1,
    }}>
      <Text style={{fontSize:22}}>Screen2</Text>
      <Text>data:{data}</Text>
      <Button title="Go to Screen3" onPress={() => {
        navigation.navigate('Screen3')
      }} />
      <Button title="Go to Screen1" onPress={() => {
        navigation.navigate('Screen1')
      }} />
    </View>
  );
}
