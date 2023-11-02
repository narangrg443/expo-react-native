import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';
import styles from './style/AppStyle';

export default function App() {
  const [data, setData] = useState([]);

  const getApi = async () => {
    try {
      const url = 'https://jsonplaceholder.typicode.com/posts';
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error('No response');
      } else {
        const jsonData = await res.json();
        setData(jsonData);
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getApi();
  }, []);

  return (
    <View style={styles.container}>
      {
        data.length > 0 ? (
          <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <Text>{item.id}: {item.title}</Text>
            )}
          />
        ) : null
      }
    </View>
  );
}
