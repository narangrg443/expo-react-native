import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './style/AppStyle';

export default function App() {
  const [isChecked, setIsChecked] = useState(false);

  const handlePress = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      <CheckBoxRadio 
      onPress={handlePress} 
      color2={'red'} 
      type='circle'
      size={30}
      
      
      />

      {isChecked ? <Text>Checked</Text> : <Text>Not Checked</Text>}
    </View>
  );
}

export function CheckBoxRadio({ onPress, type, color1, color2,size }) {
  const [isChecked, setIsChecked] = useState(false);
if(!size){
  size =20;
}
  if (!type) {
    type = 'box';
  }

  if (!color1) {
    color1 = 'grey';
  }

  if (!color2) {
    color2 = 'green';
  }

  const handlePress = () => {
    setIsChecked((prev) => !prev);
    onPress();
  };

  return (
    <Pressable onPress={handlePress}>
     <View style={[
       {
         justifyContent:'center',
         alignItems:'center',
         padding:2,
        width:size,
        height:size,
        borderColor:color1,
        borderWidth:1,
        
       },
       isChecked&&{borderColor:color2},
       type==='circle'&&{borderRadius:size/2},
     ]}>
      
      
      
      {
        isChecked&&(
          <View style={[
              {
              width:size-6,
              height:size-6,
              backgroundColor:color2,
              },
              type==='circle'&&{borderRadius:size/2},
            ]}>
          </View>
        )
      }
      </View>
    </Pressable>
  );
}
