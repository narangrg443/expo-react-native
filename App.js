import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [name, setName] = useState('');
  const [nameArray, setNameArray] = useState([]);

  useEffect(() => {
    // Load data from AsyncStorage on component mount
    loadData();
  }, []);

  const saveData = async () => {
    try {
      // Save data to AsyncStorage
      const updatedArray = [...nameArray, name];
      await AsyncStorage.setItem('nameArray', JSON.stringify(updatedArray));
      console.log('Data saved successfully');
      setNameArray(updatedArray);
      setName('');
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  const loadData = async () => {
    try {
      // Load data from AsyncStorage
      const storedData = await AsyncStorage.getItem('nameArray');
      if (storedData !== null) {
        const parsedData = JSON.parse(storedData);
        setNameArray(parsedData);
        console.log('Data loaded successfully');
      }
    } catch (error) {
      console.error('Error loading data:', error);
    }
  };

  const renderNameItem = ({ item }) => (
    <Text style={{ marginVertical: 5 }}>{item}</Text>
  );

  return (
    <View style={{ margin: 20 }}>
      <TextInput
        style={{ backgroundColor: 'skyblue', height: 40, marginBottom: 10 }}
        value={name}
        placeholder="Enter name"
        onChangeText={(text) => setName(text)}
      />
      <Button title="Save" onPress={saveData} />
      <Button title="Show Data" onPress={loadData} />
      <FlatList
        data={nameArray}
        renderItem={renderNameItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}
