import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './style/AppStyle';
import Checkbox from './components/Checkbox';
export default function App() {
  const [isChecked, setIsChecked] = useState(false);

  const handlePress = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      <Checkbox
      onPress={handlePress} 
      color2={'red'} 
      type={'circle'}
      size={30}
      />

      {isChecked ? <Text>Checked</Text> : <Text>Not Checked</Text>}
    </View>
  );
}
