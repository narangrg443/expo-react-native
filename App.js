import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet,ScrollView, Button } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';
import Submit from './components/src/Submit';



export default function App() {
  const [list, setList] = useState([]);
  const [deleteAll, setDeleteAll] = useState(false);
  const [checkedItems, setCheckedItems] = useState([]);

  const handleSubmit = (data) => {
    if (data.trim() !== '') {
      setList((prev) => [...prev, { text: data, checked: false }]);
    }
  };

  const handleDeleteItem = (id) => {
    setList((prev) => prev.filter((item, index) => id !== index));
  };

  const handleDeleteAll = () => {
    setList((prev) => prev.filter((item) => !item.checked));
    setDeleteAll(false);
  };

  const handleCheckbox = (id) => {
    setList((prevList) =>
      prevList.map((item, index) => (index === id ? { ...item, checked: !item.checked } : item))
    );
    

    
  };

  useEffect(() => {
  const checked=list.filter((item)=>item.checked);
  setCheckedItems(checked);

  
  if(checked.length){
    setDeleteAll(true)
  }else{
    setDeleteAll(false);
  }
    
  }, [list]);

  return (
    <View style={styles.container}>
      <Submit onPress={handleSubmit} />

      {list.map((item, index) => (
        <View key={index} style={styles.list}>
          <Text style={{ backgroundColor: item.checked ? 'red' : 'green', ...styles.indexStyle }}>
            {index+1}
          </Text>
          <Text style={[styles.textStyle, { backgroundColor: item.checked ? 'red' : 'green' }]}>
            {item.text}
          </Text>
          <FontAwesome
            style={styles.s_del}
            name="trash"
            size={24}
            color="red"
            onPress={() => handleDeleteItem(index)}
          />
          <Checkbox
            style={styles.s_check}
            value={item.checked}
            onValueChange={() => handleCheckbox(index)}
          />
        </View>
      ))}

      { 
            checkedItems.length>0  && (
        <View style={styles.deleteAllButton}>
          <Button title="Delete All" onPress={handleDeleteAll} />
        </View>
      )}
      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'brown',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 50,
  },
  textStyle: {
    backgroundColor: 'lightblue',
    margin: 2,
    width: '70%',
    textAlign: 'center',
    height: 30,
    textAlignVertical: 'center',
    borderRadius: 5,
  },
  list: {
    backgroundColor: 'white',
    width: '80%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  s_del: {
    marginRight: 5,
  },
  s_check: {
    color: 'red',
    backgroundColor: 'lightblue',
    marginRight: 5,
    borderColor: 'black',
  },
  indexStyle: {
    width: 20,
    height: 30,
    borderRadius: 5,
    padding: 5,
    marginLeft: 2,
  },
  deleteAllButton: {
    margin: 5,
    backgroundColor: 'blue',
    width: '80%',
  },
});
